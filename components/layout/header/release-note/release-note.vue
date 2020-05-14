<template>
  <div>
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
          color="warning"
          fab
          small
          v-on="on"
          @click.stop="dialog = true"
        >
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </template>
      当サービスのリリースノートや機能実装予定は<br />
      こちらからご確認いただけます。
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="50%">
      <release-note-content />
    </v-dialog>
  </div>
</template>

<script>
import releaseNoteContent from './release-note-content'

export default {
  components: { releaseNoteContent },
  data: () => ({
    dialog: false
  })
}
</script>
