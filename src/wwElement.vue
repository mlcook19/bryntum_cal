<template>
  <div class="bryntum-calendar-container">
    <bryntum-calendar
      ref="calendar"
      v-bind="calendarConfig"
      :date="content.initialDate"
      :mode="content.viewMode"
    />
  </div>
</template>

<script>
import { BryntumCalendar } from '@bryntum/calendar-vue-3';
import { useCalendarConfig } from '@/AppConfig';

export default {
  props: {
    content: { type: Object, required: true },
  },
  
  components: {
    BryntumCalendar
  },

  setup() {
    const calendarConfig = useCalendarConfig();
    return { calendarConfig };
  },

  computed: {
    calendarConfig() {
      return {
        ...useCalendarConfig(),
        autoLoad: true,
        transport: {
          load: {
            url: 'data/data.json',
            data: this.content
          }
        }
      };
    }
  }
};
</script>

<style lang="scss">
@import '~@bryntum/calendar/calendar.stockholm.css';
@import '~@bryntum/demo-resources/scss/example-webpack.scss';

.bryntum-calendar-container {
  height: 100%;
  width: 100%;
  position: relative;
  
  .b-calendar {
    height: 100%;
    [data-ref='modeSelector'].b-buttongroup {
      display: none;
    }
  }
}
</style> 