<template>
  <td :class="'result-column ' + valueClass">
    {{ prettyValue }}
  </td>
</template>

<script type="text/javascript">
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    valueClass() {
      if (this.value >= 0.99275) {
        return 'result-column--perfect'
      }

      if (this.value <= 0) {
        return 'result-column--impossible'
      }

      return `result-column--${Math.floor(this.value * 10) * 10}`
    },
    prettyValue() {
      return (this.value * 100).toFixed(2)
    }
  }
}
</script>

<style type="text/css">
.result-column {
  width: 48px;
  font-family: monospace;
  font-weight: bold;
  text-align: right;
}

.result-column--impossible {
  color:  #fff;
  background-color: #888;
}
.result-column--0 {
  color: #fff;
  background-color: #F44336;
}
.result-column--10 {
  color: #fff;
  background-color: #F66437;
}
.result-column--20 {
  color: #fff;
  background-color: #F88638;
}
.result-column--30 {
  background-color: #FAA739;
}
.result-column--40 {
  background-color: #FCC93A;
}
.result-column--50 {
  background-color: #FFEB3B;
}
.result-column--60 {
  background-color: #D2DC40;
}
.result-column--70 {
  background-color: #A5CD45;
}
.result-column--80 {
  color: #fff;
  background-color: #78BE4A;
}
.result-column--90 {
  color: #fff;
  background-color: #4CAF50;
}
.result-column--perfect {
  color: #fff;
  background-color: #2196F3;
}
</style>
