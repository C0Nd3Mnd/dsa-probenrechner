<template>
  <td :class="['result-column', valueClass]">
    {{ prettyValue }}
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    /**
     * Generates a class name that adds a background color to the <td> based on
     * the percentage value.
     *
     * @returns Class name.
     */
    valueClass(): string {
      if (this.value >= 0.99275) {
        return 'result-column--perfect'
      }

      if (this.value <= 0) {
        return 'result-column--impossible'
      }

      return `result-column--${Math.floor(this.value * 10) * 10}`
    },
    /**
     * Formats a raw percentage value to a formatted string. For example,
     * `0.45114` gets converted to `'45.11'`.
     *
     * @returns Formatted percentage string.
     */
    prettyValue(): string {
      return (this.value * 100).toFixed(2)
    }
  }
})
</script>

<style type="text/css">
.result-column {
  /*width: 48px;*/
  font-family: monospace;
  font-weight: bold;
  text-align: right;
}

.result-column--impossible {
  color: #fff;
  background-color: #b0bec5;
}
.result-column--0 {
  color: #fff;
  background-color: #f44336;
}
.result-column--10 {
  color: #fff;
  background-color: #f66437;
}
.result-column--20 {
  color: #fff;
  background-color: #f88638;
}
.result-column--30 {
  background-color: #faa739;
}
.result-column--40 {
  background-color: #fcc93a;
}
.result-column--50 {
  background-color: #ffeb3b;
}
.result-column--60 {
  background-color: #d2dc40;
}
.result-column--70 {
  background-color: #a5cd45;
}
.result-column--80 {
  color: #fff;
  background-color: #78be4a;
}
.result-column--90 {
  color: #fff;
  background-color: #4caf50;
}
.result-column--perfect {
  color: #fff;
  background-color: #2196f3;
}
</style>
