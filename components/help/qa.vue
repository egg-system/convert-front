<template>
  <div>
    <section v-for="(help, i) in qa" :id="'question' + help.id" :key="i">
      <v-card>
        <a :href="'#question' + help.id" icon @click="help.qid = !help.qid">
          <v-card-title> {{ help.question }}<br /> </v-card-title>
        </a>
        <v-expand-transition>
          <div v-show="!help.qid">
            <v-divider></v-divider>
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
.card {
  padding-top: 64px;
  margin-top: -64px;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
section:before {
  padding-top: 64px;
  margin-top: -64px;
  visibility: hidden;
  content: '';
  display: block;
}
</style>
