<template>
   <div class="doc_details">
        <img src="@/assets/images/Home/document1.jpg" alt="">
        <img src="@/assets/images/Home/document2.jpg" alt="">
        <img src="@/assets/images/Home/document3.jpg" alt="">
        <img src="@/assets/images/Home/document4.jpg" alt="">
   </div>
</template>
<script>
export default {
   name: 'categoryDocument'
};
</script>
<style>
/* 相关证件详情 */
.doc_details{
    flex-wrap: wrap;
    align-items: center;
    overflow-y: auto;
    height: calc(100% - 70px);
}
.doc_details img{
    width: 503px;
    height: 301px;
    margin-right: 16px;
    margin-bottom: 14px;
}
</style>