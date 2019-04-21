import request from 'superagent'

export function retrieveAllTitles () {
  return request.get('/v1/alllist')
    .then(res => {
      const titles = res.body
      return titles
    })
    .catch(() => {
      throw Error('Requires /v1/alllist api route')
    })
}