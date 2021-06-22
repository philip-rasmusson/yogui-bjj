import Axios from 'axios'

const DEV_API_BASE_URL = 'https://localhost:3001/'

const TFAServerAPI = Axios.create({
	baseURL: DEV_API_BASE_URL
})

export default TFAServerAPI