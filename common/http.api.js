const baseConfig = {
	baseUrl:'https://o2o.yesmywine.com/topapi/',
	mapKey:'VNYBZ-BYVKX-FPU4D-7MK4K-JZLNF-SOFEM'
}
if (process.env.NODE_ENV === 'development') {
    baseConfig.baseUrl = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest',
	baseConfig.mapKey = 'VNYBZ-BYVKX-FPU4D-7MK4K-JZLNF-SOFEM'
}

const api = {
	login: 'lgoin'
}
export {
	baseConfig,
	api
}
