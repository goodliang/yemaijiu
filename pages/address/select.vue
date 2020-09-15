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
		<u-cell-group title="附近地址"><u-cell-item title="河南开封市清明上河园" :arrow="false" v-for="(item, index) in 13" :key="index"></u-cell-item></u-cell-group>
	</view>
</template>

<script>
import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';
export default {
	data() {
		return {
			isShowCity: true,
			qqMap: new QQMapWX({ key: 'VNYBZ-BYVKX-FPU4D-7MK4K-JZLNF-SOFEM', vm: this })
		};
	},
	onLoad() {
		this.qqMap.search({
			keyword: 'kfc', //搜索关键词
			location: '39.980014,116.313972', //设置周边搜索中心点
			success: function(res) {
				//搜索成功后的回调
				console.log(res);
			},
			fail: function(res) {
				console.log(res);
			},
			complete: function(res) {
				console.log(res);
			}
		});
	},
	methods: {}
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
