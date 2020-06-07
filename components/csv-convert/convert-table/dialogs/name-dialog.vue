<template>
  <v-edit-dialog
    :return-value.sync="settingName"
    save-text="保存する"
    cancel-text="キャンセル"
    persistent
    large
  >
    <v-icon disabled>mdi-pencil-outline</v-icon>
    <span :class="settingName ? '' : 'text--secondary'">
      {{ settingName ? settingName : '(クリックすると、データを入力できます)' }}
    </span>
    <template v-slot:input>
      <v-text-field v-model="settingName" single-line />
    </template>
  </v-edit-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    setting() {
      return this.settings[this.index]
    },
    settingName: {
      get() {
        return this.setting.name
      },
      set(settingName) {
        this.updateSetting({
          ...this.setting,
          name: settingName
        })
      }
    },
    ...mapState('csv/converter', ['settings'])
  },
  methods: {
    ...mapMutations('csv/converter', ['updateSetting'])
  }
}
</script>
