<template>
	<view class="container">
		<y-search-address></y-search-address>
		<view class="select-address">当前选择：歌德盈香</view>
		<u-cell-group title="当前位置">
			<u-cell-item title="北京市科创四街" :arrow="false">
				<view class="u-flex text-primary" slot="right-icon">
					<view class="">重新定位</view>
					<u-icon name="reload"></u-icon>
				</view>
			</u-cell-item>
		</u-cell-group>
		<u-cell-group title="我的地址">
			<u-cell-item :arrow="false" v-for="(item, index) in 3" :key="index">
				<view slot="title">
					<view class="u-flex u-font-14 bold">歌德盈香公司</view>
					<view class="u-font-12 u-content-color">
						<text class="u-m-r-20">史文良</text>
						<text>13691043834</text>
					</view>
				</view>
			</u-cell-item>
		</u-cell-group>
		<u-cell-group title="附近地址"><u-cell-item :title="item.title" :arrow="false" v-for="(item, index) in nearbyList" :key="index"></u-cell-item></u-cell-group>
	</view>
</template>

<script>
// #ifdef H5
import QQMapWX from '@/utils/qqmap-h5-jssdk.min.js';
// #endif
// #ifndef H5
import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';
// #endif

export default {
	data() {
		return {
			nearbyList:[],
			isShowCity: true,
			qqMap: new QQMapWX({ key: this.$baseConfig.mapKey, vm: this })
		};
	},
	onLoad() {
		this.getNearbyAddress()
	},
	methods: {
		async getNearbyAddress() {
			let [err, res] = await uni.getLocation();
			this.qqMap.reverseGeocoder({
				location: {
					latitude: res.latitude,
					longitude: res.longitude
				},
				poi_options:'page_size=5;address_format=short;policy=2;radius=1000',
				get_poi: 1,
				success: res => {
					console.log(res)
					this.nearbyList = res.result.pois
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.select-address {
	padding: 8px 15px;
	font-size: 12px;
	background-color: $u-type-primary-light;
	color: $u-type-primary;
}
</style>
