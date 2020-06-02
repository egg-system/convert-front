<template>
  <v-card-actions>
    <v-row justify="center">
      <v-btn class="ma-2" color="primary" @click="reflectSetting">
        {{ doUpdate ? '更新する' : '登録する' }}
      </v-btn>
      <v-btn class="ma-2 cancel" @click="cancel">キャンセル</v-btn>
    </v-row>
  </v-card-actions>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    value: {
      type: null,
      required: true
    },
    doUpdate: {
      type: Boolean,
      required: true
    },
    isValid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    reflectSetting() {
      this.$emit('validate')
      if (!this.isValid) {
        return
      }

      const reflectSetting = this.doUpdate
        ? this.updateSetting
        : this.addSetting

      reflectSetting(this.value)
      this.$emit('input', null)
    },
    ...mapMutations('csv/converter', ['addSetting', 'updateSetting'])
  }
}
</script>
