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
      defaultValue: new Date(2020, 9, 12),
    },
    viewMode: {
      label: { en: "Default View Mode" },
      type: "Enum",
      options: {
        items: [
          { label: "Day", value: "day" },
          { label: "Week", value: "week" },
          { label: "Month", value: "month" }
        ],
      },
      defaultValue: "week",
    }
  },
}; 