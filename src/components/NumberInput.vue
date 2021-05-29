<template>
  <div class="row">
    <div class="col-12">
      <button
        tabindex="-1"
        class="btn btn--block btn--large"
        :disabled="virtualModel === max"
        @click="++virtualModel"
      >
        <font-awesome-icon icon="plus" />
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-12 center">
      <input
        v-model="virtualModel"
        type="text"
        class="number-input__input"
        :min="min"
        :max="max"
        @keydown.arrow-up="++virtualModel"
        @keydown.page-up="virtualModel += 5"
        @keydown.arrow-down="--virtualModel"
        @keydown.page-down="virtualModel -= 5"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-12 center">
      <span class="number-input__label">{{ label }}</span>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <button
        tabindex="-1"
        class="btn btn--block btn--large"
        :disabled="virtualModel === min"
        @click="--virtualModel"
      >
        -
      </button>
    </div>
  </div>
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
      /**
       * Gets the model value.
       *
       * @returns Model value.
       */
      get(): number {
        return this.modelValue
      },
      /**
       * Emits an event to update the model value to the new value. The input
       * value is converted to an integer first and then kept within the
       * constraints of the `min` and `max` properties.
       *
       * @param value - New value.
       */
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
  display: block;
  padding: 2px 8px;
  white-space: nowrap;
  overflow: hidden;
}
.number-input__input {
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 60px;
  margin: 0;
  appearance: none;
  border: none;
  display: block;
  padding: 0;
}
.number-input__input:focus {
  border: 3px solid #2196f3;
}
</style>
