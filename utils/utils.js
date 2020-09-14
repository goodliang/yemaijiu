/**
 * await时处理错误(不想用可以在项目中使用try-catch处理)
 * @param {Promise} promise 请求地址
 */
export function handlePromise(promise) {
	return promise
		.then((data) => [undefined, data])
		.catch((err) => [err.data, undefined]);
}

/**

 * 设置父页面数据并返回
 * @method
 * @param {data} 需要设置的data
 
 * @return null
 * 
 */

export function setParentData(data) {

	var pages = getCurrentPages();
	var currPage = pages[pages.length - 1]; //当前页面
	var prevPage = pages[pages.length - 2]; //上一个页面
	// 直接调用上一个页面的setData()方法，把数据存到上一个页面中去

	prevPage.setData(data, () => {
		console.log('赋值成功', data)
		uni.navigateBack({
			delta: 1
		})
	})
}
