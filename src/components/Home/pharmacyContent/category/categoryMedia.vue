<template>
   <div class="media_details">
        <div class="media_text">全省首个“互联网+三医联动”药事服务站落户椒江</div>
        <div class="media_text">椒江启动红色药事服务联盟 百姓在家门口就能 体验到“一站式”服务-台州新闻</div>
        <div class="media_text">【基层实践】椒江区成立全省首个数字化红色药事服务联盟</div>
        <div class="media_text">【基层实践】椒江建成全省首个“互联网+三医联动”药事服务站</div>
        <div class="media_text">华东医药台州东海大道店作为全省10家五星级民生药事服务站之一，今天接受授牌，可喜可贺</div>
   </div>
</template>
<script>
export default {
   name: 'categoryMedia'
};
</script>
<style>
/* 媒体报道详情 */
.media_details{
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    height: calc(100% - 70px);
}
.media_text{
    margin: 20px 0;
    cursor: pointer;
    color: #32518a;
}
</style>