export default {
  editor: {
    label: {
      en: "Bryntum Calendar",
      fr: "Calendrier Bryntum"
    },
    component: 'ww-layout',
  },
  properties: {
    initialDate: {
      label: { en: "Initial Date" },
      type: "Date",
      defaultValue: new Date(2020, 9, 12),
      bindable: true
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
      bindable: true
    },
    eventsData: {
      label: { en: "Events Data" },
      type: "Array",
      defaultValue: [],
      bindable: true
    },
    resourcesData: {
      label: { en: "Resources Data" },
      type: "Array",
      defaultValue: [],
      bindable: true
    }
  },
}; 