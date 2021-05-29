<template>
  <div class="row">
    <div class="col-12">
      <h1>DSA5 Probenrechner</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-3 col-md-2 col-md-offset-2">
      <number-input ref="firstInput" v-model="property1" label="EG1" />
    </div>
    <div class="col-3 col-md-2">
      <number-input v-model="property2" label="EG2" />
    </div>
    <div class="col-3 col-md-2">
      <number-input v-model="property3" label="EG3" />
    </div>
    <div class="col-3 col-md-2">
      <number-input v-model="skillValue" label="FW" :max="25" />
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6 col-md-offset-3">
      <table style="width: 100%;">
        <thead>
          <tr>
            <th style="width: 24px;">Mod.</th>
            <th v-for="ql in 6" :key="ql">QS{{ ql }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mod in 21" :key="mod">
            <th style="text-align: center">{{ mod - 11 }}</th>
            <result-column
              v-for="ql in 6"
              :key="ql"
              :value="calc(mod - 11, ql)"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <p>
        Die Werte der Felder können auch mit den Pfeiltasten bzw. Bild
        hoch/runter (+5/-5) manipuliert werden.
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-12" style="font-style: italic;">
      <p>
        Der ursprüngliche Code zur Berechnung der Wahrscheinlichkeit stammt aus
        dem
        <a href="http://dsa5.mueller-kalthoff.com/" target="_blank">
          Erfolgswahrscheinlichkeitsrechner
        </a>
        von Hanno Müller-Kalthoff // CC-BY 3.0
      </p>
      <p>
        Dieses Tool ist unter der
        <a
          href="https://github.com/C0Nd3Mnd/dsa-probenrechner/blob/main/LICENSE"
          target="_blank"
        >
          MIT-Lizenz
        </a>
        lizensiert.
        <a href="https://github.com/C0Nd3Mnd/dsa-probenrechner" target="_blank">
          Quellcode auf GitHub
        </a>
      </p>
      <p>
        Version {{ version }} -
        <a
          href="https://github.com/C0Nd3Mnd/dsa-probenrechner/blob/main/CHANGELOG.md"
          target="_blank"
        >
          Changelog
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { probability } from './probability'
import ResultColumn from './components/ResultColumn.vue'
import NumberInput from './components/NumberInput.vue'
import { version } from '../package.json'

export default defineComponent({
  components: {
    ResultColumn,
    NumberInput
  },
  /**
   * Component data.
   *
   * @returns Component data.
   */
  data: () => ({
    version,
    property1: 8,
    property2: 8,
    property3: 8,
    skillValue: 0
  }),
  methods: {
    /**
     * Calculates the probability of success for a given modification value and
     * quality level using the [[probability]] function.
     *
     * @param mod - Modification value.
     * @param ql - Quality level.
     * @returns Probability.
     */
    calc(mod: number, ql: number): number {
      return probability(
        +this.property1,
        +this.property2,
        +this.property3,
        +this.skillValue,
        mod,
        ql
      )
    }
  }
})
</script>

<style type="text/css">
.description-column {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: right;
}
</style>
