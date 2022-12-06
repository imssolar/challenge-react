import axios from 'axios'

const URL_BASE = `${process.env.NODE_ENV}/api/glossary`

const api = axios.create({
	baseURL: URL_BASE,
})

export default api
