import parse from 'csv-parse/lib/sync'
import { generateHash } from '@/plugins/generateHash'

export const state = () => ({
  fileKey: null,
  file: null,
  content: null
})

export const mutations = {
  setContent(state, content) {
    state.content = content
  },
  setFile(state, file) {
    state.file = file
  },
  setFileKey(state, fileKey) {
    state.fileKey = fileKey
  }
}

export const getters = {
  csvHeaders(state) {
    if (!state.content) {
      return []
    }

    const contents = parse(state.content, { to_line: 1 })
    return contents[0].map((value, key) => {
      return { value: key, text: value }
    })
  }
}

export const actions = {
  async getFile({ state, commit }, fileKey) {
    commit('setFileKey', fileKey)

    try {
      const { data } = await this.$axios.get('/files', {
        params: { fileKey: state.fileKey }
      })
      commit('setContent', data)
    } catch (apiError) {
      if (apiError.response.status === 404) {
        commit('setFileKey', null)
        this.$router.push('/')
      }
    }
  },
  async putFile({ commit, dispatch }, file) {
    commit('setFile', file)

    const fileKey = await generateHash(file)
    commit('setFileKey', fileKey)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileKey', fileKey)
    await dispatch('doPutFile', formData)
  },
  async doPutFile({ state, error, dispatch }, formData) {
    try {
      await this.$axios.put('/files', formData)
      await dispatch('getFile', state.fileKey)
    } catch (apiError) {
      error({
        statusCode: apiError.response.status,
        message: apiError.response.message
      })
    }
  }
}
