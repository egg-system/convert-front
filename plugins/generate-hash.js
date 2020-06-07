import xxhash from 'xxhash-wasm'

export const generateHash = async (payload) => {
  const handler = await xxhash()
  const hashString = handler.h64(payload)

  const timeStamp = new Date().getTime()
  return `${hashString}${timeStamp}`
}
