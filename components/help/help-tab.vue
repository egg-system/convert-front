<template>
  <v-btn :class="[active, 'tab']" @click="$emit('input', id)">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: null
    }
  },
  computed: {
    active() {
      return this.value === this.id
        ? 'active primary white--text'
        : 'white primary--text'
    }
  }
}
</script>

<style scoped>
.tab {
  margin: 12px;
}
</style>
