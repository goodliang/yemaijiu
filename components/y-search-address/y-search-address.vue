<template>
	<view class="search-content">
		<view class="search-box">
			<view class="search-head white-bg u-flex u-p-l-30 u-p-r-30">
				<view class="city-box u-flex u-p-r-20" :class="{ active: cityChecked }" @click="selectCity">
					<view class="city">北京市</view>
					<view class="icon-box u-p-l-10"><u-icon name="arrow-down" size="24" class="icon"></u-icon></view>
				</view>
				<u-search class="u-flex-1" placeholder="请输入地址" :show-action="false" @change="searchKeys" @search="searchKeys"></u-search>
			</view>
			<scroll-view scroll-y class="search-body" v-show="nearbyView"><view v-for="(item, index) in 100" :key="index">11111</view></scroll-view>
		</view>
		<u-picker mode="region" v-model="isShowCity"></u-picker>
	</view>
</template>

<script>
const QQMapWX = require('@/utils/qqmap-wx-jssdk.min.js');
const qqmapsdk = new QQMapWX({
	key: 'VNYBZ-BYVKX-FPU4D-7MK4K-JZLNF-SOFEM'
});
export default {
	name: 'y-search-address',
	data() {
		return {
			nearbyList: [],
			cityChecked: false,
			nearbyView: false,
			isShowCity: false
		};
	},
	onLoad() {
		this.getNearbyList();
	},
	methods: {
		async getNearbyList() {
			const [err, res] = await uni.getLocation();
			console.log(res);
		},
		selectCity() {
			this.cityChecked = !this.cityChecked;
			this.isShowCity = !this.isShowCity
		},
		searchKeys() {
			console.log(this.nearbyView);
			this.nearbyView = !this.nearbyView;
		}
	}
};
</script>

<style lang="scss" scoped>
.search-content {
	min-height: 40px;
	.search-box {
		width: 100%;
		position: fixed;
		z-index: 9;
		.search-head {
			width: 100%;
			height: 40px;
			.city-box {
				.icon-box {
					.icon {
						transition: transform 0.5s;
					}
				}
				&.active {
					color: $u-type-primary;
					.icon-box {
						.icon {
							transform: rotate(180deg);
						}
					}
				}
			}
		}
		.search-body {
			background-color: #fff;
			height: calc(100vh - var(--window-top));
		}
	}
}
</style>
