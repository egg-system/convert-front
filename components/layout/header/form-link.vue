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
        class="ma-2"
        color="primary"
        href="https://forms.gle/TsjdCb64pwLY6AyUA"
        target="blank"
        fab
        small
        v-on="on"
      >
        <v-icon dark>
          mdi-email-edit-outline
        </v-icon>
      </v-btn>
    </template>
    <span>
      当サービスに関するご意見やご要望、<br />
      お問い合わせについてはこちらからお願いします。
    </span>
  </v-tooltip>
</template>
