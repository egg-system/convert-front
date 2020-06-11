<template>
  <div>
    <v-row>
      <v-radio-group
        v-model="isFixedValue"
        label="変換し終わったCSVデータの取得元を選択する"
        width="100%"
      >
        <v-radio :value="false" label="変換したいCSVファイルから値を取得する" />
        <v-radio :value="true" label="固定の値にする" />
      </v-radio-group>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isFixedValue: {
      get() {
        return this.value
      },
      set(isFixedValue) {
        this.$emit('input', isFixedValue)
      }
    }
  }
}
</script>
