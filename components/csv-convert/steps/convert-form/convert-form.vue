<template>
  <v-container>
    <v-row>
      <v-text-field v-model="name" label="変換後のCSVの列名を入力する" />
    </v-row>
    <convert-from-input v-model="convertSetting" />
  </v-container>
</template>

<script>
import convertFormMixins from './convert-form-mixins'
import convertFromInput from './convert-from-input'

export default {
  components: { convertFromInput },
  mixins: [convertFormMixins],
  computed: {
    name: {
      get() {
        return this.convertSetting.name
      },
      set(name) {
        this.convertSetting = {
          ...this.convertSetting,
          name
        }
      }
    }
  }
}
</script>
