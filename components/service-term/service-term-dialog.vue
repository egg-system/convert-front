<template>
  <v-dialog v-model="dialog" width="70%">
    <template v-slot:activator="{ on }">
      <v-btn dark depressed v-on="on">
        &ensp;利用規約
      </v-btn>
    </template>
    <v-card>
      <v-row class="term-header">
        <v-card-title class="term-title">
          <h3 class="pl-10">利用規約</h3>
        </v-card-title>
        <v-card-actions class="pt-3">
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-row>
      <v-card-text>
        <service-term />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import serviceTerm from './service-term'

export default {
  components: { serviceTerm },
  data: () => ({
    dialog: false
  })
}
</script>

<style scoped>
.term-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  vertical-align: middle;
}
</style>
