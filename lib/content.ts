import { format, parseISO } from "date-fns";
import { unique } from "typescript-array-utils";

// Constants
const DATE_FORMAT = "LLLL d, yyyy";

const allTags = <T extends { tags: string[] }>(items: T[]): string[] => {
  return unique(items.flatMap((i) => i.tags));
};

// Sorting functions
const byTitle = <T extends { title: string }>(a: T, b: T): number => {
  return a.title > b.title ? 1 : -1;
};

const byWeight = <T extends { weight: number }>(a: T, b: T): number => {
  return a.weight > b.weight ? 1 : -1;
};

// Formatting functions
const formatDate = (date: string): string => {
  return format(parseISO(date), DATE_FORMAT);
};

// Querying functions
const pagesWithTag = <T extends { tags: string[] }>(items: T[], tag: string): T[] => {
  return items.filter((i) => i.tags.includes(tag));
};

export { allTags, byTitle, byWeight, formatDate, pagesWithTag };
