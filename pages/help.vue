<template>
  <div>
    <h1>ヘルプページ</h1>
    <div class="title">
      <h2>操作方法</h2>
      <a href="#qa">QAはこちら</a>
    </div>
    <operation :operation="operation" class="" />
    <h2 id="qa" class="title">Q&A</h2>
    <qa :qa="qa" class="" />
  </div>
</template>
<script>
import help from '../components/help/help'
import qa from '../components/help/qa'
import operation from '../components/help/operation'

export default {
  components: {
    qa,
    operation
  },
  data() {
    return {
      qa: help.qa,
      operation: help.operation
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 50px;
}
.title h2 {
  display: inline;
}
.title {
  margin: 28px;
}
h2:before {
  padding-top: 64px;
  margin-top: -64px;
  visibility: hidden;
  content: '';
  display: block;
}
</style>
