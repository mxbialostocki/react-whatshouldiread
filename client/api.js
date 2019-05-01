import request from 'superagent'

export function retrieveAllTitles () {
  return request.get('/v1/books')
    .then(resp => {
      const bookData = resp.body
      return bookData
    })
    .catch(() => {
      throw Error('Requires /v1/books api route')
    })
}
