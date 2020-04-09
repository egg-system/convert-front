<template>
  <v-container>
    <v-container>
      CSVの変換ができます。以下のステップに従って、操作してください。
    </v-container>
    <v-container>
      <convert-steps />
    </v-container>
  </v-container>
</template>

<script>
import convertSteps from '@/components/csv-convert/convert-steps.vue'

export default {
  layout: 'input',
  components: { convertSteps },
  fetch({ query, redirect, store }) {
    if (!('step' in query)) {
      redirect(302, '/', { step: 1 })
    }

    store.commit('csv/setCurrentStep', query.step)
  },
  watchQuery: ['step']
}
</script>
