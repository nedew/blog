import tagMap from '../gen/tagMap.json'

export function getAllTag() {
  return Object.keys(tagMap).map(tag => {
    return {
      params: { tag }
    }
  })
}