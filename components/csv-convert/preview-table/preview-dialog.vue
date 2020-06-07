<template>
  <v-dialog v-model="isShown">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" outlined v-on="on">
        プレビューを見る
      </v-btn>
    </template>
    <preview-table v-if="isShown" />
  </v-dialog>
</template>

<script>
import previewTable from './preview-table.vue'

export default {
  components: { previewTable },
  data: () => ({ isShown: false })
}
</script>
