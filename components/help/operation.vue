<template>
  <div>
    <v-card class="operation-card">
      <div v-for="(help, i) in operation" :key="i" class="operation">
        <v-card-text>{{ help.procedure }}</v-card-text>
      </div>
    </v-card>
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
}
a {
  text-decoration: none;
  color: black;
}
.operation::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  color: black;
  background: #dbdbdb;
}
.operation-card {
  margin: 12px;
}
</style>
