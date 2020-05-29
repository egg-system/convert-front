<template>
  <div>
    <h1>ヘルプページ</h1>
    <h2 id="card1">Q&A</h2>
    <v-card>
      <a href="#card1" icon @click="question1 = !question1">
        <v-card-title>
          質問タイトル
        </v-card-title>
      </a>
      <v-expand-transition>
        <div v-show="question1">
          <v-divider></v-divider>
          <v-card-text>
            回答内容
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <p id="card2" class="card"></p>
    <v-card>
      <a href="#card2" icon @click="question2 = !question2">
        <v-card-title>
          質問タイトル
        </v-card-title>
      </a>
      <v-expand-transition>
        <div v-show="question2">
          <v-divider></v-divider>
          <v-card-text>
            回答内容
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <p id="card3" class="card"></p>
    <v-card>
      <a href="#card3" icon @click="question3 = !question3">
        <v-card-title>
          質問タイトル
        </v-card-title>
      </a>
      <v-expand-transition>
        <div v-show="question3">
          <v-divider></v-divider>
          <v-card-text>
            回答内容
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    question1: false,
    question2: false,
    question3: false
  })
}
</script>

<style scoped>
h1 {
  margin: 50px;
}
h2 {
  margin: 28px;
}
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
