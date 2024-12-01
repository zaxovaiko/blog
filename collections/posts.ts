import type { AccessArgs, CollectionConfig } from "payload";

const isAdmin = (args: AccessArgs) => {
  return args.req.user?.email === "zaxovaiko@gmail.com";
};

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "previewText",
      label: "Preview text",
      type: "richText",
    },
    {
      name: "slug",
      type: "text",
      label: "URL",
      required: true,
      unique: true,
    },
    {
      label: "Description",
      name: "body",
      type: "richText",
      required: true,
    },
    {
      label: "Published at",
      name: "publishedAt",
      type: "date",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
