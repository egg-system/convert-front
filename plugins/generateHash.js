import xxhash from 'xxhash-wasm'

export const generateHash = async (payload) => {
  const handler = await xxhash()
  return handler.h64(payload)
}
