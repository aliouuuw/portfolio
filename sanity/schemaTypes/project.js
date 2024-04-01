export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "string",
      title: "Project Link",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "technologies",
      type: "string",
      title: "Technologies",
    },
  ],
};
