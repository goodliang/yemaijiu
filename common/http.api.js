let baseUrl
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest'
}
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://o2o.yesmywine.com/topapi/'
}

const api = {
	login: 'lgoin'
}
export {
	baseUrl,
	api
}
