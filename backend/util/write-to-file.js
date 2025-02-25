import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Function to write data to different files based on the fileType argument
export default function writeToFile(data, fileType) {
    console.log(`Received fileType: ${fileType}`);  // Debug log for fileType

    // Ensure the correct file name based on fileType
    let fileName;
    if (fileType === "posts") {
        fileName = "posts.json";  // Write to posts.json for job posts
    } else if (fileType === "movies") {
        fileName = "movies.json";  // Write to movies.json for movies
    } else if (fileType === "blogs") {
        fileName = "blogs.json";  // Write to blog.json for movies 
    } else {
        throw new Error("Unknown file type!");  // Catch unknown file types
    }

    // Debug log for the correct file path
    const filePath = join(__dirname, "..", "data", fileName);
    console.log(`Writing to file at path: ${filePath}`);

    console.log(`Data being written:`, data);  // Log the data being written

    try {
        // Write data to the resolved file path
        writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
        console.log(`${fileName} has been updated successfully.`);
    } catch (err) {
        console.log(`Error writing to ${fileName}:`, err);
    }
}
