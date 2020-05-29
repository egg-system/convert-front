<template>
  <v-tooltip
    class="pt-10"
    color="grey darken-3"
    transition="slide-y-transition"
    nudge-bottom="6"
    col="1"
    bottom
  >
    <template v-slot:activator="{ on }">
      <v-btn
        class="ma-2 white"
        color="primary"
        href="/help"
        target="blank"
        fab
        small
        outlined
        v-on="on"
      >
        <v-icon>
          mdi-help
        </v-icon>
      </v-btn>
    </template>
    <span>
      当サービスにの使用方法については、<br />
      こちらからお願いします。
    </span>
  </v-tooltip>
</template>
