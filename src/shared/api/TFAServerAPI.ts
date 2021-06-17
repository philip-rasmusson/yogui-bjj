import Axios from 'axios'

const DEV_API_BASE_URL = 'localhost:3001/user'

const TFAServerAPI = Axios.create({
	baseURL: DEV_API_BASE_URL
})

export default TFAServerAPI