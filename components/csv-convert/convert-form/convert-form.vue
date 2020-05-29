<template>
  <v-form ref="convertForm" v-model="isValid">
    <v-card>
      <v-container>
        <v-row>
          <v-card-title>
            {{ doUpdate ? 'CSV設定の更新' : 'CSV設定の登録' }}
          </v-card-title>
        </v-row>
        <v-card-text>
          <v-row>
            <v-text-field
              v-model="name"
              label="変換し終わったCSVファイルの列名を入力する"
              :rules="[
                (value) => !!value || '変換後の列名を入力してください。'
              ]"
              required
            />
          </v-row>
          <convert-inputs v-model="convertSetting" />
        </v-card-text>
        <convert-form-actions
          v-model="convertSetting"
          :do-update="doUpdate"
          :is-valid="isValid"
          @validate="validate"
          @cancel="cancel"
        />
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
import convertFormActions from './convert-form-actions'
import convertFormMixins from './mixins/convert-form-mixins'
import convertInputs from './convert-inputs.vue'

export default {
  components: { convertInputs, convertFormActions },
  mixins: [convertFormMixins],
  props: {
    doUpdate: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    isValid: false
  }),
  computed: {
    name: {
      get() {
        return this.convertSetting.name
      },
      set(name) {
        this.convertSetting = {
          ...this.convertSetting,
          name
        }
      }
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    validate() {
      this.$refs.convertForm.validate()
    }
  }
}
</script>
