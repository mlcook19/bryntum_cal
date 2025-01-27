<template>
  <div class="bryntum-calendar-container">
    <bryntum-calendar
      ref="calendar"
      :date="content.initialDate"
      :events="content.events"
      :resources="content.resources"
      :crudManager="crudManagerConfig"
    />
  </div>
</template>

<script>
import { BryntumCalendar } from '@bryntum/calendar-vue-3';

export default {
  props: {
    content: { type: Object, required: true },
  },
  
  components: {
    BryntumCalendar
  },

  computed: {
    crudManagerConfig() {
      return {
        autoLoad: true,
        transport: {
          load: {
            url: "",
            data: {
              events: this.content.events,
              resources: this.content.resources
            }
          }
        }
      };
    }
  }
};
</script>

<style lang="scss">
@import '~@bryntum/calendar/calendar.stockholm.css';

.bryntum-calendar-container {
  height: 100%;
  width: 100%;
  
  .b-calendar {
    height: 100%;
  }
}
</style> 