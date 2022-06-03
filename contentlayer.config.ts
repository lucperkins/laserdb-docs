import {
  defineDocumentType,
  FieldDef,
  makeSource,
} from "contentlayer/source-files";

export const prefixes: Record<string, string> = {
  docs: "docs",
  blog: "blog",
};

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
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `${prefixes.blog}/**/*.md`,
  fields: {
    title: fields.title,
    tags: fields.tags,
    date: fields.date,
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `${prefixes.docs}/**/*.md`,
  fields: {
    title: fields.title,
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "index.md",
  fields: {},
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, Post, Doc],
});
