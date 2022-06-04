import { DocumentGen } from "contentlayer/core";
import { DocumentTypeNames } from "contentlayer/generated";
import { ComputedFields, defineDocumentType, FieldDef, makeSource } from "contentlayer/source-files";
import * as fs from "node:fs/promises";
import path from "node:path";

// Constants
const contentDirPath = "content";

export const prefixes: Record<string, string> = {
  docs: "docs",
  blog: "blog",
};

// Helper functions
const getLastEditedDate = async (doc: DocumentGen): Promise<Date> => {
  const stats = await fs.stat(path.join(contentDirPath, doc._raw.sourceFilePath));
  return stats.mtime;
};

// Reusable static field definitions
const fields: Record<string, FieldDef> = {
  title: {
    type: "string",
    description: "The document's title",
    required: true,
  },
  tags: {
    type: "list",
    of: {
      type: "string",
    },
    description: "Optional taxonomy tags for the document",
    default: [],
  },
  date: {
    type: "date",
    description: "The publication date of the document",
    required: true,
  },
  weight: {
    type: "number",
    description: "Weight assigned to the page",
    required: false,
    default: 1,
  },
};

// Reusable computed field definitions
const computedFields: ComputedFields<DocumentTypeNames> = {
  lastEdited: {
    type: "date",
    resolve: getLastEditedDate,
  },
  url: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

// Document types
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `${prefixes.blog}/**/*.md`,
  fields: {
    title: fields.title,
    tags: fields.tags,
    date: fields.date,
  },
  computedFields: {
    url: computedFields.url,
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `${prefixes.docs}/**/*.md`,
  fields: {
    title: fields.title,
    weight: fields.weight,
  },
  computedFields: {
    url: computedFields.url,
    lastEdited: computedFields.lastEdited,
  },
}));

export const Home = defineDocumentType(() => ({
  name: "Home",
  filePathPattern: "index.md",
  isSingleton: true,
  fields: {},
}));

// Source definition
export default makeSource({
  contentDirPath,
  documentTypes: [Home, Post, Doc],
});
