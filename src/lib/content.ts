import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ContentDocument {
  slug: string;
  body: string;
  [key: string]: unknown;
}

export function getContentBySlug(slug: string): ContentDocument {
  const filePath = path.join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    body: content,
    ...data,
  };
}

export function getContentFromDirectory(dir: string): ContentDocument[] {
  const dirPath = path.join(contentDir, dir);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        body: content,
        ...data,
      };
    });
}

export function getJsonContent<T = Record<string, unknown>>(
  dir: string,
  filename: string
): T {
  const filePath = path.join(contentDir, dir, `${filename}.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as T;
}

export function getAllJsonFromDirectory<T = Record<string, unknown>>(
  dir: string
): T[] {
  const dirPath = path.join(contentDir, dir);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents) as T;
    });
}

export function getTopLevelSlugs(): string[] {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md") && file !== "home.md")
    .map((file) => file.replace(/\.md$/, ""));
}

export function getDocSlugs(): string[] {
  const docsDir = path.join(contentDir, "docs");
  if (!fs.existsSync(docsDir)) return [];

  const files = fs.readdirSync(docsDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
