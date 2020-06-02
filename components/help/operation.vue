<template>
  <div>
    <div v-for="(help, i) in operation" :key="i">
      <v-card>
        <v-card-title> {{ help.procedure }}<br /> </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    operation: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  padding-top: 64px;
  margin-top: -64px;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
</style>
