<template>
  <v-edit-dialog
    :return-value.sync="itemValue"
    save-text="保存する"
    cancel-text="キャンセル"
    persistent
    large
  >
    <v-icon disabled>mdi-pencil-outline</v-icon>
    <span :class="itemValue ? '' : 'text--secondary'">
      {{ itemValue ? itemValue : '(クリックすると、データを入力できます)' }}
    </span>
    <template v-slot:input>
      <v-text-field v-model="itemValue" single-line />
    </template>
  </v-edit-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    property: {
      type: String,
      required: true
    }
  },
  computed: {
    itemValue: {
      get() {
        return this.value[this.index][this.property]
      },
      set(itemValue) {
        const value = this.value.concat()
        value[this.index][this.property] = itemValue
        this.$emit('input', value)
      }
    }
  }
}
</script>
