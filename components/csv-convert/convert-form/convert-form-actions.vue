<template>
  <v-card-actions>
    <v-row justify="center">
      <v-btn class="ma-2" color="primary" @click="updateSetting">
        {{ '設定を反映する' }}
      </v-btn>
      <v-btn class="ma-2" @click="cancel">キャンセルする</v-btn>
    </v-row>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    isValid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    updateSetting() {
      this.$emit('validate')
      if (!this.isValid) {
        return
      }

      this.$emit('update')
    }
  }
}
</script>
