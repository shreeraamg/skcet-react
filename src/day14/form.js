export const configForm = {
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "Age", label: "Age", type: "number", required: true },
    { name: "Password", label: "Password", type: "password", required: true },
  ],
  onSubmit: () => {
    console.log("Form submitted");
  },
};
