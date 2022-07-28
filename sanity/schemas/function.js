export default {
  name: "appfunction",
  title: "App Function",
  type: "document",
  fields: [
    {
      name: "title",
      title: "ScreenName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "functionName",
      title: "Function Name",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
  ],
};
