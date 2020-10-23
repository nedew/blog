export function generateUniqueId(ids: string[]) {
  let uniqueId:string
  let isDone:boolean = false

  while (!isDone) {
    uniqueId = ('00000' + Math.floor(Math.random() * 100000)).slice(-5)
    if (ids.indexOf(uniqueId) !== -1) {
      continue
    }
    isDone = true
  }

  return uniqueId
}
