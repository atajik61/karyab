import { z } from "zod";

export const opportunitySchema = z.object({
  title: z.string().trim().min(1, "Title is required."),

  organization: z.string().trim().min(1, "Organization is required."),

  location: z.string().trim().min(1, "Location is required."),

  category: z.string().min(1, "Please select a category."),

  type: z.string().min(1, "Please select a type."),

  deadline: z.string().min(1, "Deadline is required."),

  description: z.string().trim().min(1, "Description is required."),

  requirements: z.string().trim().min(1, "Requirements are required."),

  tags: z.string().trim().min(1, "Please enter at least one tag."),

  apply: z.string().trim().url("Please enter a valid application URL."),
});
