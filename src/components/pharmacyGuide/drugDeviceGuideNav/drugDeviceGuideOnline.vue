<template>
    <div class="outer_online_content">
        <div class="online_content">
            <div class="back">
                <img src="@/assets/images/parmacyGuide/close_icon.png" @click="backNav">
            </div>
            <img src="@/assets/images/parmacyGuide/content_bg.png" alt="">
            <div class="content_bottom"> 扫码关注华东大药房东海大道店药事服务中心微信公众号，线上咨询药事指导。 </div>
            <div class="code_box">
                <div class="box_area">
                    <img src="@/assets/images/parmacyGuide/code_img.jpg" alt="">
                    <p>苏药师</p>
                </div>
                <div class="box_area">
                    <img src="@/assets/images/parmacyGuide/code_img.jpg" alt="">
                    <p>叶药师</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   name: 'drugDeviceGuideOnline',
   setup(prop,context){
    const backNav = ()=>{
        context.emit('backMethod')
    }
    return{
        backNav
    }
   }
};
</script>
<style>
/* 内容区域 */
.outer_online_content{
    flex: 1;
}
.online_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    height: 768px;
    background-color: #fff;
    border-radius: 20px;
    margin: 48px 0;
    box-shadow: 0 0 43px 3px #e5e5e5;
}
.back{
    position: absolute;
    right: 46px;
    top: 37px;
    cursor: pointer;
}
.content_bottom{
    font-size: 24px;
    font-weight: 700;
    color: #2a3765;
    text-align: center;
    margin-bottom: 52px;
}
.code_box{
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 575px;
    height: 224px;
    top: 204px;
    left: 50%;
    transform: translateX(-49.5%);
    
}
.code_box img{
    width: 224px;
    height: 224px;
    background: #d7eaff;
}
.code_box p{
    font-size: 36px;
    font-weight: 700;
    color: #2272da;
    text-align: center;
    margin: 0;
    padding-top: 25px;
}
</style>