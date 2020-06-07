<template>
  <v-card>
    <v-container>
      <v-card-title>変換し終わったCSVのプレビュー</v-card-title>
      <v-card-text>
        <v-data-table
          v-if="csv"
          :headers="csvHeaders"
          :items="csvItems"
          hide-default-footer
          disable-pagination
          disable-filtering
          disable-sort
        />
        <v-row v-else>
          <v-progress-circular indeterminate size="100" color="primary" />
        </v-row>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import parse from 'csv-parse/lib/sync'
import { putSettingsFile, getPreview } from '../convert-actions'

const columnPrefix = 'column-'

export default {
  data: () => ({ csv: null }),
  computed: {
    csvHeaders() {
      const csvHeaders = parse(this.csv, { to_line: 1 })[0]
      return csvHeaders.map((csvValue, csvKey) => ({
        text: csvValue,
        value: `${columnPrefix}${csvKey}`
      }))
    },
    csvItems() {
      const csvRows = parse(this.csv, { from_line: 2 })
      return csvRows.map((csvRow) => {
        return csvRow.reduce((csvObject, csvValue, csvKey) => {
          csvObject[`${columnPrefix}${csvKey}`] = csvValue
          return csvObject
        }, {})
      })
    }
  },
  async created() {
    await putSettingsFile()
    this.csv = await getPreview()
  }
}
</script>
