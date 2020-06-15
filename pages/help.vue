<template>
  <div class="container">
    <div class="my-3 font-weight-bold subtitle-1">ヘルプページ</div>
    <div>
      <helpTab
        v-for="item in list"
        :key="item.id"
        v-model="currentId"
        v-bind="item"
      />
    </div>
    <section v-show="current.id === 1">
      <operation :operation="operation" />
    </section>
    <section v-show="current.id === 2">
      <qa :qa="qa" />
    </section>
  </div>
</template>
<script>
import help from '../components/help/help'
import qa from '../components/help/qa'
import operation from '../components/help/operation'
import helpTab from '../components/help/help-tab'

export default {
  components: {
    qa,
    operation,
    helpTab
  },
  data() {
    return {
      qa: help.qa,
      operation: help.operation,
      currentId: 1,
      list: [
        { id: 1, label: '操作方法' },
        { id: 2, label: 'Q&A' }
      ]
    }
  },
  computed: {
    current() {
      return this.list.find((el) => el.id === this.currentId) || {}
    }
  },
  head() {
    return {
      title: 'ヘルプページ',
      meta: [
        {
          hid: 'help-description',
          name: 'description',
          content: 'ヘルプページです'
        },
        {
          hid: 'help-keywords',
          name: 'keywords',
          content: '操作方法, Q&A'
        },
        {
          hid: 'help-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        { hid: 'help-og:type', property: 'og:type', content: 'article' },
        {
          hid: 'help-og:title',
          property: 'og:title',
          content: 'ヘルプページ'
        },
        {
          hid: 'help-og:description',
          property: 'og:description',
          content: 'ヘルプページです'
        },
        {
          hid: 'help-og:url',
          property: 'og:url',
          content: 'https://convert-service.x-face.net/'
        },
        {
          hid: 'help-og:image',
          property: 'og:image',
          content: ''
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
