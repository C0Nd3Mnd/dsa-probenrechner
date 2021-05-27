<template>
  <label class="number-input__wrapper">
    <span class="number-input__label">{{ label }}</span>
    <input
      v-model="virtualModel"
      class="number-input__input"
      :min="min"
      :max="max"
      readonly
      @keydown.arrow-up="++virtualModel"
      @keydown.page-up="virtualModel += 5"
      @keydown.arrow-down="--virtualModel"
      @keydown.page-down="virtualModel -= 5"
      @keydown.arrow-left="focusPrevious"
      @keydown.arrow-right="focusNext"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 20
    },
    label: {
      type: String,
      required: false,
      default: 'Unnamed'
    }
  },
  computed: {
    virtualModel: {
      get(): number {
        return this.modelValue
      },
      set(value: string) {
        let numberValue = Math.floor(+value)

        if (numberValue > this.max) {
          numberValue = this.max
        } else if (numberValue < this.min) {
          numberValue = this.min
        }

        this.$emit('update:modelValue', numberValue)
      }
    }
  },
  methods: {
    focusPrevious($event: KeyboardEvent) {
      if (!$event?.target) {
        return false
      }

      const target = $event.target as Element

      if (!target.parentNode) {
        return false
      }

      const parentNode = target.parentNode as Element

      if (!parentNode.previousElementSibling?.childNodes[1]) {
        return
      }

      (parentNode.previousElementSibling.childNodes[1] as HTMLElement).focus()
    },
    focusNext($event: KeyboardEvent) {
      if (!$event?.target) {
        return false
      }

      const target = $event.target as Element

      if (!target.parentNode) {
        return false
      }

      const parentNode = target.parentNode as Element

      if (!parentNode.nextElementSibling?.childNodes[1]) {
        return
      }

      (parentNode.nextElementSibling.childNodes[1] as HTMLElement).focus()
    }
  }
})
</script>

<style type="text/css">
.number-input__wrapper {
  border: 1px solid #000;
  width: 140px;
  display: inline-block;
  margin: 0 8px;
}
.number-input__label {
  width: 100%;
  text-align: center;
  display: block;
  padding: 2px 8px;
}
.number-input__input {
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 60px;
  margin: 0;
  appearance: none;
  border: 1px solid #000;
  margin: 8px;
  margin: 4px auto;
  display: block;
}
.number-input__input:focus {
  border: 3px solid #2196F3;
}
</style>
