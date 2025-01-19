import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

// Function to extract module number from the title
const getModuleNumber = (title) => {
  const match = title.match(/^(\d+)(\.\d+)?/);
  return match ? [parseInt(match[1], 10), match[2] || 0] : [0, 0];
};

// Function to get lockChapter from Markdown content using gray-matter
const getLessonUnlocked = (content) => {
  const { data } = matter(content);
  return data.lessonUnlocked !== undefined ? data.lessonUnlocked : true;
};

// Function to compare modules for sorting
const compareModules = (a, b) => {
  const [aModule, aFraction] = getModuleNumber(a.title);
  const [bModule, bFraction] = getModuleNumber(b.title);

  if (aModule !== bModule) {
    return aModule - bModule;
  }

  return aFraction - bFraction;
};

export default async function handler(req, res) {
  const { folderName } = req.query;
  const basePath = process.cwd();
  const directoryPath = path.join(basePath, folderName);

  try {
    const items = await fs.readdir(directoryPath);

    const output = [];

    // Iterating over each item in the directory
    for (const item of items) {
      const itemPath = path.join(directoryPath, item);
      const stat = await fs.stat(itemPath);

      // Checking if the item is a directory and not "assets"
      if (stat.isDirectory() && item !== "assets") {
        // Getting the list of Markdown files in the directory
        const files = await fs.readdir(itemPath);
        const mdFiles = files.filter((file) => file.endsWith(".md"));

        // Object to represent the module
        const moduleObject = {
          title: item,
          module: 0,
          subModules: [],
        };

        // Iterating over each Markdown file
        for (const mdFile of mdFiles) {
          const filePath = path.join(itemPath, mdFile);
          const fileContent = await fs.readFile(filePath, "utf-8");

          // Extracting title, slug, and lockChapter from the Markdown file content
          const titleMatch = fileContent.match(/^title:\s*["'](.*)["']/m);
          const lessonUnlocked = getLessonUnlocked(fileContent);

          moduleObject.subModules.push({
            title: titleMatch ? titleMatch[1] : null,
            slug: `${mdFile.replace(/\.md$/, "")}`,
            lessonUnlocked,
          });
        }

        // Sorting subModules based on their titles
        moduleObject.subModules.sort(compareModules);
        moduleObject.module = getModuleNumber(
          moduleObject.subModules[0].title
        )[0];

        // Adding the moduleObject to the output array
        output.push(moduleObject);
      }
    }

    // Sorting output array based on module numbers
    output.sort((a, b) => a.module - b.module);

    res.status(200).json(output);
  } catch (error) {
    console.error("Error reading directory:", error);
    res.status(500).send("Internal Server Error");
  }
}
