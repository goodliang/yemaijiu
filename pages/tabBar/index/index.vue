<template>
	<view class="content">
		{{ vuex_version }}
		<view class="button-demo"><u-button :ripple="true" type="primary" @click="selectAddress">选择地址</u-button></view>
	</view>
</template>

<script>
let page
export default {
	data() {
		return {
			title: 'Hello',
			name: 'goodsliang',
			pages:''
		};
	},
	async onLoad() {
		this.getData();
		//       setTimeout(()=>{
		// 	 this.getData();
		// },1100)
		// setTimeout(()=>{
		// 	 this.getData();
		// },2100)
    
		uni.getLocation({
			type: 'wgs84',
			success: function(res) {
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
				console.log(res)
			},
			fail(err) {
				console.log('地址错误', err);
			}
		});
		this.getLocation()
	},
	methods: {
		async getData() {
			let [err, res] = await this.$await(this.$axios.get('/api/user/list'));
			console.log(res);
			console.log(err);
		},
		selectAddress() {
			this.$u.route('/pages/address/select')
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40rpx;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 100rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 28rpx;
	color: $u-content-color;
}

.button-demo {
	margin-top: 80rpx;
}

.link-demo {
	margin-top: 80rpx;
}
</style>
