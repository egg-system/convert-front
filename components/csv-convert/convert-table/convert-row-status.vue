<template>
  <v-tooltip top :disabled="isValidSetting(convertSetting)">
    <template v-slot:activator="{ on }">
      <v-icon
        :color="isValidSetting(convertSetting) ? 'green' : 'red'"
        v-on="on"
      >
        {{ isValidSetting(convertSetting) ? 'mdi-check' : 'mdi-alert' }}
      </v-icon>
    </template>
    <span>{{ errorMessage }}</span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    convertSetting: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessage() {
      const errors = this.validateSetting(this.convertSetting)
      return errors.join('\n\r')
    },
    ...mapGetters('csv/converter/validator', [
      'validateSetting',
      'isValidSetting'
    ])
  }
}
</script>
