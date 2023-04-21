import instance from "../api/request";
import {onUnmounted} from "vue";

export function useAxios() {
	const abortController = new AbortController()

	async function request() {
		try {
			abortController.abort()

			const res = await instance('', {
				signal: abortController.signal
			})
			return res.data
		} catch (e) {
			console.log(e)
		}
	}

	onUnmounted(() => {
		abortController.abort()
	})

	return {
		request
	}
}
