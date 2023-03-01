export default {
  name: "searchHistory",
  title: "Search Recently",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Search value",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
