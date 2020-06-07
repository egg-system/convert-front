<template>
  <v-dialog v-model="isShown">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" outlined v-on="on" :disabled="!isValidSettings">
        プレビューを見る
      </v-btn>
    </template>
    <preview-table v-if="isShown" />
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import previewTable from './preview-table.vue'

export default {
  components: { previewTable },
  data: () => ({ isShown: false }),
  computed: {
    ...mapGetters('csv/converter', ['isValidSettings'])
  }
}
</script>
