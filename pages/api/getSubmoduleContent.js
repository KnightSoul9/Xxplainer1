import path from "path";
import fs from "fs/promises";

export default async function handler(req, res) {
  const { folderName, module, submoduleSlug } = req.query;
  const basePath = process.cwd();
  const directoryPath = path.join(basePath, folderName);

  try {
    const items = await fs.readdir(directoryPath);

    let submoduleContent = null;

    for (const item of items) {
      const itemPath = path.join(directoryPath, item);
      const stat = await fs.stat(itemPath);

      // Checking if the item is a directory and not "assets"
      if (stat.isDirectory() && item !== "assets" && item === module) {
        const files = await fs.readdir(itemPath);
        const mdFiles = files.filter((file) => file.endsWith(".md"));

        for (const mdFile of mdFiles) {
          const filePath = path.join(itemPath, mdFile);
          const fileContent = await fs.readFile(filePath, "utf-8");

          const slug = `${mdFile.replace(/\.md$/, "")}`;

          if (slug === submoduleSlug) {
            submoduleContent = fileContent;
            break;
          }
        }

        if (submoduleContent) {
          break;
        }
      }
    }

    if (submoduleContent) {
      res.status(200).json({ content: submoduleContent });
    } else {
      res.status(404).json({ error: "Submodule not found" });
    }
  } catch (error) {
    console.error("Error reading directory:", error);
    res.status(500).send("Internal Server Error");
  }
}
