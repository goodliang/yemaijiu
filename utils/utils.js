/**
 * await时处理错误(不想用可以在项目中使用try-catch处理)
 * @param {Promise} promise 请求地址
 */
export function handlePromise(promise) {
	return promise
		.then((data) => [undefined, data])
		.catch((err) => [err.data, undefined]);
}