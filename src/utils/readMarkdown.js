import axios from 'axios'

function readMarkdown (name) {
  return axios.get(`/static/markdowns/${name}.md`)
    .then(r => { console.log(r.data); return r.data })
}

export default readMarkdown
