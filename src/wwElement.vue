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
import { useCalendarConfig } from './AppConfig';

export default {
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object },
    wwUtils: { type: Object },
  },
  
  components: {
    BryntumCalendar
  },

  computed: {
    calendarConfig() {
      return {
        ...useCalendarConfig.call(this),
        autoLoad: true,
        transport: {
          load: {
            url: this.wwUtils.getPublicUrl('data/data.json'),
            data: this.content
          }
        },
        listeners: {
          beforeEventEdit: ({ eventRecord }) => {
            this.wwUtils.onEdit({ id: eventRecord.id });
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