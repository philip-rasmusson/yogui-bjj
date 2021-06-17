import TFAServerAPI from '../TFAServerAPI'

const createUser = async (name:string, password:string) => {
	try {
		await TFAServerAPI.post('user/', { name: name, password: password })
	} catch (error) {
		console.log(error)
	}
}

const getUser = (id:string) => {
	try {
		TFAServerAPI.get(`user/${id}`)
	} catch (error) {
		console.log(error)
	}
}

export default {
	createUser,
	getUser,
}