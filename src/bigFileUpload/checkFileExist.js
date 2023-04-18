import request from "./request";

export function checkFileExist(url, name, md5) {
	return request.get(url, {
			params: {
				name,
				md5
			}
		})
		.then((res) => res.data);
}
