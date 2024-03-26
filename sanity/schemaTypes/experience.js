export default {
    name: "experience",
    type: "document",
    title: "Experience",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "position",
        type: "string",
        title: "Position",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "startDate",
        type: "string",
        title: "Start Date",
        description: "Short description of the article",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "endDate",
        type: "string",
        title: "End Date",
        description: "Short description of the article",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        type: "image",
        title: "Image",
      },
      {
        name: "description",
        type: "array",
        title: "Description",
        of: [
          // Define the block types allowed in the array
          {
            type: "block",
          },
        ],
      },
    ],
  };
  