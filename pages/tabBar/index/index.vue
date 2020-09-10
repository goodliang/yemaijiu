<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="button-demo">
			<u-button :ripple="true" type="primary">按钮组件演示</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
           this.getData()
		   uni.getLocation({
		       type: 'wgs84',
		       success: function (res) {
		           console.log('当前位置的经度：' + res.longitude);
		           console.log('当前位置的纬度：' + res.latitude);
		       }
		   });
		},
		methods: {
			async getData(){
				 let [err,res] = await this.$await(this.$axios.get('/api/user/lists'))
				 console.log(res)
				 console.log(err)
			}
		}
	}
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
