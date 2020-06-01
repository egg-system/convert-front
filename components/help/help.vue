<template>
  <div class="columns is-multiline">
    <div v-for="(help, i) in qa" :key="i" class="column">
      <v-card>
        <a
          :id="'question' + help.id"
          :href="'#question' + help.id"
          icon
          @click="help.qid = !help.qid"
        >
          <v-card-title> {{ help.question }}<br /> </v-card-title>
        </a>
        <v-expand-transition>
          <div v-show="!help.qid">
            <v-divider></v-divider>
            <v-card-text> {{ help.answer }}<br /> </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qa: {
      type: Array,
      default: null
    },
    operation: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false
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
</style>
