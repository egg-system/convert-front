<template>
  <v-edit-dialog
    :return-value.sync="itamValue"
    save-text="保存する"
    cancel-text="キャンセル"
    persistent
    large
  >
    <v-icon disabled>mdi-pencil-outline</v-icon>
    <span class="text--secondary">
      {{ itamValue ? itamValue : '(クリックすると、データを入力できます)' }}
    </span>
    <template v-slot:input>
      <v-text-field v-model="itamValue" single-line />
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
    itamValue: {
      get() {
        return this.value[this.index][this.property]
      },
      set(itamValue) {
        const value = this.value.concat()
        value[this.index][this.property] = itamValue
        this.$emit('input', value)
      }
    }
  }
}
</script>
