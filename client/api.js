import request from 'superagent'

export function retrieveRandomTitle () {
  return request.get('/v1/books/review')
    .then(resp => {
      console.log('api.js: ' + resp.body)
      const bookData = resp.body
      return bookData
    })
    .catch(() => {
      throw Error('Requires /v1/books/review api route')
    })
}

export function retrieveAllTitles () {
  return request.get('/v1/books/alllist')
    .then(resp => {
      const titles = resp.body
      return titles
    })
    .catch(() => {
      throw Error('Requires /v1/alllist api route')
    })
}

