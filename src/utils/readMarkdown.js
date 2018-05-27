import axios from 'axios'

function readMarkdown (name) {
  return axios.get(`/static/markdowns/${name}.md`).then(r => r.data)
}

export default readMarkdown
