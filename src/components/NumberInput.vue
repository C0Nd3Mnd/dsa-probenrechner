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
      @keyup.arrow-left="focusPrevious"
      @keyup.arrow-right="focusNext"
    />
  </label>
</template>

<script type="text/javascript">
export default {
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
      get() {
        return this.modelValue
      },
      set(value) {
        value = Math.floor(+value)

        if (value > this.max) {
          value = this.max
        } else if (value < this.min) {
          value = this.min
        }

        this.$emit('update:modelValue', +value)
      }
    }
  },
  methods: {
    focusPrevious($event) {
      if (!$event?.target?.parentNode?.previousElementSibling?.childNodes[1]) {
        return
      }

      $event.target.parentNode.previousElementSibling.childNodes[1].focus()
    },
    focusNext($event) {
      if (!$event?.target?.parentNode?.nextElementSibling?.childNodes[1]) {
        return
      }

      $event.target.parentNode.nextElementSibling.childNodes[1].focus()
    }
  }
}
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
