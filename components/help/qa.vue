<template>
  <div class="qa">
    <div class="subtile-1">Q&A</div>
    <section v-for="(help, i) in qa" :id="'question' + help.id" :key="i">
      <v-card class="qa-card">
        <a :href="'#question' + help.id" icon @click="help.qid = !help.qid">
          <v-card-title class="subtitle-2">
            {{ help.question }}<br />
            <v-spacer></v-spacer>
            <v-btn fab x-small color="primary">
              <v-icon v-show="help.qid">mdi-plus</v-icon>
              <v-icon v-show="!help.qid">mdi-minus</v-icon>
            </v-btn>
          </v-card-title>
        </a>
        <v-expand-transition>
          <div v-show="!help.qid">
            <v-divider></v-divider>
            <!-- help.answerは固定値なので、問題なし -->
            <!-- eslint-disable-next-line vue/no-v-html -->
            <v-card-text v-html="help.answer"> </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    qa: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.qa {
  margin: 20px;
}
.qa-card {
  margin: 12px;
}
section:before {
  padding-top: 64px;
  margin-top: -64px;
  visibility: hidden;
  content: '';
  display: block;
}
.subtitle-1 {
  margin-left: 12px;
}
</style>
