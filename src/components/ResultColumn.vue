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
