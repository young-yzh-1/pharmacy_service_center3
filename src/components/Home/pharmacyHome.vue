<template>
    <div class="pharmacy_service">
        <!-- 头部 -->
        <PharmacyHeader/>
        <!-- 内容区 -->
        <PharmacyContent/>
        <!-- 尾部 -->
        <div class="pharmacy_service_bottom">
            <img src="@/assets/images/Home/badge.png" alt="">
            <div>椒江区市场监督管理局 监督热线 xxxx-xxxxxxxx</div>
        </div>
  </div>  
</template>
<script>
import PharmacyHeader from './pharmacyHeader/pharmacyHeader.vue'
import PharmacyContent from './pharmacyContent/pharmacyContent.vue'
export default {
    name:'pharmacyHome',
    components:{PharmacyHeader,PharmacyContent}
}
</script>
<style>
body{
    box-sizing: border-box;
    min-width: 2000px;
    margin: 0;
    background-color: #EEF5FC;
    height: 100%;
    background: #f1f8ff;
    overflow-y: auto;
    font-family: PingFang SC,PingFang SC-Medium,Microsoft YaHei, Microsoft YaHei-Regular;;
}
/* 底部 */
.pharmacy_service_bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: #323232;
}
.pharmacy_service_bottom img{
    margin-right: 10px;
}

</style>