<template>
  <v-form ref="convertForm" v-model="isValid">
    <v-card>
      <v-container>
        <v-row>
          <v-card-title>
            変換し終わったCSVの変換内容を設定する
          </v-card-title>
        </v-row>
        <v-card-text>
          <convert-inputs v-model="convertSetting" />
        </v-card-text>
        <convert-form-actions
          :is-valid="isValid"
          @validate="validate"
          @update="update"
          @cancel="cancel"
        />
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
import convertFormActions from './convert-form-actions'
import convertInputs from './convert-inputs.vue'

export default {
  components: { convertInputs, convertFormActions },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isValid: false,
    convertSetting: null
  }),
  watch: {
    value: {
      handler() {
        this.initialize()
      },
      deep: true
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.convertSetting = this.value
    },
    cancel() {
      this.$emit('cancel')
    },
    validate() {
      this.$refs.convertForm.validate()
    },
    update() {
      this.$emit('input', this.convertSetting)
    }
  }
}
</script>
