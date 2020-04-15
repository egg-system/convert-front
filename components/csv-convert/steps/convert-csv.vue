<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      CSVの変換設定を入力する
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <convert-table />
        <v-btn
          class="ma-5"
          color="primary"
          :disabled="disabled"
          @click="postSettings"
        >
          保存する
        </v-btn>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import stepsMixins from './steps-mixins'
import convertTable from './convert-table/convert-table.vue'

export default {
  components: { convertTable },
  mixins: [stepsMixins],
  computed: {
    editable() {
      return 'csv' in this.$route.query
    },
    disabled() {
      return this.settings.length === 0
    },
    ...mapState('csv/converter', ['settings'])
  },
  methods: {
    async postSettings() {
      await this.putSettingsFile()
      this.pushStep(this.nextStep)
    },
    ...mapActions('csv', ['pushStep']),
    ...mapActions('csv/converter', ['putSettingsFile'])
  }
}
</script>
