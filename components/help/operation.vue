<template>
  <div class="operation">
    <div class="subtile-2">操作方法</div>
    <v-card class="operation">
      <div v-for="(help, i) in operation" :key="i">
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
.operation {
  margin: 12px;
}
</style>
