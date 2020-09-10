<template>
	<view class="no-content">
	     <view  class="icon">
	     		<u-empty mode="page"></u-empty>
	     </view>
		<u-button type="primary" size="medium" @click="goHome" class="button">返回首页</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goHome(){
				uni.switchTab({
					url:"../tabBar/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
