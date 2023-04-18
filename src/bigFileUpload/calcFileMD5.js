import SparkMD5 from "spark-md5";

export function calcFileMD5(file) {
	return new Promise((resolve, reject) => {
		const chunkSize = 1024 * 1024 * 2; // 2M
		const chunks = Math.ceil(file.size / chunkSize);
		let currentChunk = 0;
		let spark = new SparkMD5.ArrayBuffer();
		const fileReader = new FileReader();

		fileReader.onload = (e) => {
			spark.append(e.target.result);
			currentChunk++;
			if (currentChunk < chunks) {
				loadNext();
			} else {
				resolve(spark.end());
			}
		};

		fileReader.onerror = (e) => {
			reject(fileReader.error);
			fileReader.abort();
		};

		function loadNext() {
			let start = currentChunk * chunkSize;
			let end =
				start + chunkSize >= file.size ? file.size : start + chunkSize;
			fileReader.readAsArrayBuffer(file.slice(start, end));
		}

		loadNext();
	});
}
