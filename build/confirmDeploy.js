/* global process */

import readline from 'readline';
import { exec } from 'child_process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Are you sure you want to deploy? (yes/no) ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
        console.log('Deploying...');
        exec('npm run build && gh-pages -d dist --cname nicksneed.com', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${err.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } else {
        console.log('Deployment canceled.');
    }
    rl.close();
});