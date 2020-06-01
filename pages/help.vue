<template>
  <div>
    <h1>ヘルプページ</h1>
    <h2>操作方法</h2>
    <help :qa="help" class="" />
    <h2>Q&A</h2>
    <help :qa="help" class="" />
  </div>
</template>
<script>
import help from '../components/help/help'
import qa from '../components/help/qa'
import { operation } from '../components/help/operation'

export default {
  components: {
    help
  },
  data() {
    return {
      question1: false,
      question2: false,
      question3: false,
      help: qa.qa,
      operation: operation.operation
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 50px;
}
h2 {
  margin: 28px;
}
</style>
