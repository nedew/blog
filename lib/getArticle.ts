import articles from '../gen/articles.json'

export function getSortedArticles(limit?: number, tag?: string) {

  let items = articles.map(article => {
    return {
      slug: article.slug,
      title: article.fm.title,
      date: article.fm.date,
      tags: article.fm.tags,
    }
  })

  items.sort((a, b) => {
    const dateA = +a.date.replace(/-/g, '')
    const dateB = +b.date.replace(/-/g, '')
    if (dateA > dateB) return -1
    if (dateA < dateB) return 1
    return 0
  })

  if (limit) {
    items = items.slice(0, limit)
  }

  if (tag) {
    items = items.filter(i => {
      return i.tags.includes(tag)
    })
  }

  return items
}
