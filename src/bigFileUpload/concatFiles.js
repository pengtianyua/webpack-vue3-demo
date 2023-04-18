import request from "./request";

export function concatFiles(url, name, md5) {
	return request.get(url, {
		params: {
			name,
			md5
		}
	});
}
