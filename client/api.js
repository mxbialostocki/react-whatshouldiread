import request from 'superagent'

export function retrieveAllTitles () {
  return request.get('/v1/books/alllist')
    .then(resp => {
      console.log('api.js: ' + resp.body)
      const bookData = resp.body
      return bookData
    })
    .catch(() => {
      throw Error('Requires /v1/books/review api route')
    })
}
