<template>
  <div class="operation">
    <div class="subtile-2">操作方法</div>
    <v-card class="operation">
      <div v-for="(help, i) in operation" :key="i">
        <!-- help.produreは固定値なので、問題なし -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <v-card-text class="procedure" v-html="help.procedure"></v-card-text>
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
.operation /deep/ .row-name {
  padding-right: 3em;
}
.operation /deep/ .change-content {
  padding-right: 1em;
}
/* .operation /deep/ .action {
  padding-right: 1em;
} */
.operation /deep/ .content-2 {
  padding-left: 9em;
  text-indent: -7em;
}
.operation /deep/ .title-operation {
  padding-left: 2em;
  text-indent: -2.5em;
}
.operation /deep/ .kome {
  padding-left: 2em;
  text-indent: -1.5em;
}
</style>
