/* global process */
import readline from 'readline';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function runCommand(command, description) {
    console.log(`Running ${description}...`);
    try {
        const { stdout, stderr } = await execPromise(command);
        if (stderr) console.error(`${description} stderr:`, stderr);
        console.log(`${description} completed:`, stdout);
        return true;
    } catch (error) {
        console.error(`${description} failed:`, error.message);
        return false;
    }
}

async function deploy() {
    // Run tests first
    if (!await runCommand('npm run test', 'tests')) {
        return false;
    }

    // Build the project
    if (!await runCommand('npm run build', 'build')) {
        return false;
    }

    // Deploy to GitHub Pages
    if (!await runCommand('gh-pages -d dist --cname nicksneed.com', 'deployment')) {
        return false;
    }

    return true;
}

rl.question('Are you sure you want to deploy? (yes/no) ', async (answer) => {
    if (answer.toLowerCase() === 'yes') {
        console.log('Starting deployment process...');
        const success = await deploy();
        if (success) {
            console.log('Deployment completed successfully!');
        } else {
            console.log('Deployment failed!');
        }
    } else {
        console.log('Deployment canceled.');
    }
    rl.close();
});