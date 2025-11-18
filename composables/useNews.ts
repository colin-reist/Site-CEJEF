export const useNewsList = () => {
  return useAsyncData('news-list', () => $fetch('/api/news'))
}

export const useNewsItem = (id: string | number) => {
  return useAsyncData(`news-${id}`, () => $fetch(`/api/news/${id}`), { watch: [() => id] })
}
