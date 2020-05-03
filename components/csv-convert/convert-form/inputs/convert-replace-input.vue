<template>
  <div>
    <v-row>
      <v-radio-group
        v-model="replaceComponent"
        label="コード変換の設定"
        width="100%"
      >
        <v-radio :value="null" label="コード変換は設定しない" />
        <v-radio :value="true" label="固定の値にする" />
      </v-radio-group>
    </v-row>
  </div>
</template>

<script>
import convertFormMixins from '../mixins/convert-form-mixins'

export default {
  mixins: [convertFormMixins],
  data: () => ({
    replaceComponent: null
  })
}
</script>
