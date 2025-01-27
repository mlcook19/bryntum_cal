export default {
  editor: {
    label: {
      en: "Bryntum Calendar",
    },
  },
  properties: {
    initialDate: {
      label: { en: "Initial Date" },
      type: "Date",
      defaultValue: new Date(),
    },
    events: {
      label: { en: "Events Data" },
      type: "Array",
      defaultValue: [],
    },
    resources: {
      label: { en: "Resources Data" },
      type: "Array", 
      defaultValue: [],
    }
  },
}; 