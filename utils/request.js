/**
 * @version 3.0.4
 * @Author goodliang
 * 文档: https://www.quanzhan.co/luch-request/
 * github: https://github.com/lei-mu/luch-request
 * DCloud: http://ext.dcloud.net.cn/plugin?id=392
 */


import Request from '@/plugins/luch-request/index.js'

const getTokenStorage = () => {
	let token = ''
	try {
		token = uni.getStorageSync('Token')
	} catch (e) {

	}
	return token
}

const service = new Request()


service.setConfig((config) => { /* 设置全局配置 */
	config.baseURL = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest'
	config.custom = {
		auth: true, // 是否传token
		loading: true, // 是否使用loading
		fail: true, // 是否不处理错误由全局处理
	}
	return config
})


/* 请求之前拦截器 */
service.interceptors.request.use((config) => {
	if (config.custom.auth) {
		config.header.Token = getTokenStorage()
	}
	if (config.custom.loading) {
		uni.showLoading()
	}
	return config
}, (config) => {
	return Promise.reject(config)
})


/* 请求之后拦截器 */
service.interceptors.response.use((response) => {
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	if (response.data.code !== 0) {
		if (response.data.code === 4001) {
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/passport/login/login.vue'
				})
			}, 1000)
		} else {
			if (response.config.custom.fail && response.data && response.data.msg) {
				uni.showToast({
					icon: 'none',
					title: response.data.msg
				})
			}
		}
		return Promise.reject(response)
	} else {
		return response.data
	}
	return response
}, (response) => {
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	if (response.config.custom.custom.fail) {
		uni.showToast({
			icon: 'none',
			title: response.data.msg
		})
	}
	return Promise.reject(response)
})

export default service