<template>
  <h1>DSA5 Probenrechner</h1>
  <number-input v-model="property1" ref="firstInput" label="Eigenschaft 1" />
  <number-input v-model="property2" label="Eigenschaft 2" />
  <number-input v-model="property3" label="Eigenschaft 3" />
  <number-input v-model="skillValue" label="Fertigkeitswert" :max="100" />
  <number-input v-model="modShift" label="Mod.-Versch." :min="-100" :max="100" />
  <table>
    <thead>
      <tr>
        <th></th>
        <th>
          QS:
        </th>
        <th v-for="ql in 6" :key="ql">{{ ql }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="mod in 21" :key="mod">
        <td v-if="mod === 1" rowspan="10" class="description-column">Benachteiligt</td>
        <td v-else-if="mod === 11" class="description-column" style="padding: 16px 0;"></td>
        <td v-else-if="mod === 12" rowspan="10" class="description-column">Vorteil</td>
        <td style="text-align: right;">{{ mod - 11 + modShift }}</td>
        <result-column v-for="ql in 6" :key="ql" :value="calc(mod - 11 + modShift, ql)" />
      </tr>
    </tbody>
  </table>
  <p>
    Steuerung (Tastenbelegung):
    <ul>
      <li v-for="entry in controlHelp" :key="entry.kbd" style="margin-bottom: 2px;">
        <kbd>{{ entry.kbd }}</kbd>
        {{ entry.description }}
      </li>
    </ul>
  </p>
  <div style="margin-top: 40px; font-style: italic;">
    <p>
      Der ursprüngliche Code zur Berechnung der Wahrscheinlichkeit stammt aus
      dem <a href="http://dsa5.mueller-kalthoff.com/" target="_blank">Erfolgswahrscheinlichkeitsrechner</a>
      von Hanno Müller-Kalthoff // CC-BY 3.0
    </p>
    <p>
      Dieses Tool ist unter der
      <a href="https://github.com/C0Nd3Mnd/dsa-probenrechner/blob/main/LICENSE" target="_blank">MIT-Lizenz</a>
      lizensiert.
      <a href="https://github.com/C0Nd3Mnd/dsa-probenrechner" target="_blank">Quellcode auf GitHub</a>
    </p>
    <p>
      Version {{ version }} - <a href="https://github.com/C0Nd3Mnd/dsa-probenrechner/blob/main/CHANGELOG.md" target="_blank">Changelog</a>
    </p>
  </div>
</template>

<script type="text/javascript">
import { probability } from './probability.js'
import ResultColumn from './components/ResultColumn.vue'
import NumberInput from './components/NumberInput.vue'
import { version } from '../package.json'

export default {
  components: {
    ResultColumn,
    NumberInput
  },
  data: () => ({
    version,
    property1: 8,
    property2: 8,
    property3: 8,
    skillValue: 0,
    modShift: 0,
    controlHelp: [
      {
        kbd: '⬆',
        description: 'Wert um 1 erhöhen'
      },
      {
        kbd: '⬇',
        description: 'Wert um 1 senken'
      },
      {
        kbd: 'Bild ⬆',
        description: 'Wert um 5 erhöhen'
      },
      {
        kbd: 'Bild ⬇',
        description: 'Wert um 5 senken'
      },
      {
        kbd: '➡',
        description: 'Nächstes Feld'
      },
      {
        kbd: '⬅',
        description: 'Vorheriges Feld'
      }
    ]
  }),
  methods: {
    calc(mod, ql) {
      return probability(+this.property1, +this.property2, +this.property3, +this.skillValue, mod, ql)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.firstInput.$el.focus()
    })
  }
}
</script>

<style type="text/css">
.description-column {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: right;
}
</style>
