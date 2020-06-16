<template>
  <div class="container">
    <div class="my-3 font-weight-bold subtitle-1">ヘルプページ</div>
    <operation :operation="operation" />
    <qa :qa="qa" />
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
  },
  head() {
    return {
      title: 'ヘルプページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ヘルプページです'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ヘルプページ'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ヘルプページです。操作方法とQ&Aがあります。'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://convert-service.x-face.net/help'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 12px;
}
h2:before {
  padding-top: 64px;
  margin-top: -64px;
  visibility: hidden;
  content: '';
  display: block;
}
</style>
