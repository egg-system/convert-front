<template>
  <div align="right">
    <v-btn depressed color="light-blue" dark @click="windowOpen(twitterLink)">
      <font-awesome-icon :icon="['fab', 'twitter']" />
      フォローする
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitterLink: `https://twitter.com/intent/follow?screen_name=xfaCE_egg`
    }
  },
  methods: {
    windowOpen(link) {
      return window.open(
        link,
        '_blank',
        'top=100,left=100,width=600,height=540'
      )
    }
  }
}
</script>
