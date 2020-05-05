<template>
  <div class="term-of-service pb-6 pl-5 pr-5">
    <div>
      <p v-for="termDescription in termDescriptions" :key="termDescription">
        {{ termDescription }}
      </p>
    </div>

    <div v-for="(term, index) in terms" :key="index" class="ma-4">
      <h3>{{ getTermHeader(term.header, index) }}</h3>
      <ol v-for="(article, articleIndex) in term.articles" :key="article.text">
        <p v-html="getTermText(article.text, articleIndex)"></p>
        <div v-if="article.details">
          <ul v-for="detail in article.details" :key="detail">
            <li>{{ detail }}</li>
          </ul>
        </div>
      </ol>
    </div>
  </div>
</template>

<script>
import { termDescriptions, terms } from './service-term-constants'

export default {
  computed: {
    termDescriptions() {
      return termDescriptions
    },
    terms() {
      return terms
    }
  },
  methods: {
    getTermText(text, index) {
      return `${index + 1}. ${text}`
    },
    getTermHeader(header, index) {
      return `第${index + 1}条 ${header}`
    }
  }
}
</script>

<style lang="scss" scoped>
.term-of-service {
  color: #3b3b3b;
  text-align: left;
}

h3 {
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #f5f5f5;
  border-left: 4px solid #b6b6b6;
}

p {
  margin-top: 10px;
  margin-bottom: 6px;
  padding-right: 10px;
}

li {
  list-style: disc;
  padding-right: 10px;
}
</style>
