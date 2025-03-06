/* global process */

/*
Create a .env file with TINIFY_API_KEY=
https://tinify.com/dashboard/api
*/

import tinify from "tinify";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Set your API key
dotenv.config();
tinify.key = process.env.TINIFY_API_KEY;

// Specify the directory to process
const directoryPath = "./src/img/unc/";

// Function to process a single file
async function processFile(filePath, distFilePath) {
    try {
        const source = tinify.fromFile(filePath);
        await source.toFile(distFilePath);
        console.log(`Optimized: ${filePath}`);
    } catch (error) {
        console.error(`Error optimizing ${filePath}: ${error}`);
    }
}

// Read the directory and process each image file
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const fileExt = path.extname(filePath).toLowerCase();

        if (fileExt === ".jpg" || fileExt === ".png" || fileExt === ".jpeg") {
            const distFilePath = filePath.replace('unc\\', 'comp\\');
            fs.access(distFilePath, fs.constants.F_OK, (err) => {
                if (err) {
                    // File does not exist in dist folder, process it
                    processFile(filePath, distFilePath);
                }
            });
        }
    });
});