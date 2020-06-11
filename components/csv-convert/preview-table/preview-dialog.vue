<template>
  <v-col align-self="center">
    <v-btn color="primary" outlined @click="doOpenDialog">
      プレビューを見る
    </v-btn>
    <v-dialog v-model="isShown">
      <preview-table v-if="isShown" />
    </v-dialog>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'
import previewTable from './preview-table.vue'

export default {
  components: { previewTable },
  props: {
    isValid: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({ isShown: false }),
  computed: {
    ...mapGetters('csv/converter', ['isValidSettings'])
  },
  methods: {
    doOpenDialog() {
      this.$emit('validate')
      this.$nextTick(() => this.openDialog())
    },
    openDialog() {
      if (this.isValid) {
        this.isShown = true
      }
    }
  }
}
</script>
