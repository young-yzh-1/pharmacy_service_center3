<template>
    <div class="community_content">
        <div class="content_top">
            <div class="title">社区指导</div>
            <img src="@/assets/images/parmacyGuide/close_icon.png" @click="backNav()">
        </div>
        <div class="content_txt">
            每年开展2场进社区药事服务活动，
            <br>
            提供量血压，帮助居民整理药箱及对过期药品进行回收，
            <br>
            中药材的真假鉴别及器械使用指导、校准等服务
        </div>
        <div class="content_bottom">—— 此为线下服务，请咨询店员 ——</div>
        <img src="@/assets/images/parmacyGuide/content_img.png" alt="">
    </div>
</template>
<script>
export default {
   name: 'drugDeviceGuideCommunity',
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
.community_content{
    flex: 1;
    padding: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 768px;
    background-color: #fff;
    box-shadow: 0 0 43px 3px #e5e5e5;
    border-radius: 20px;

}
.content_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 40px 0 40px;
    padding-left: 40px;
}
.content_top .title{
    position: relative;
    font-size: 36px;
    font-weight: 700;
    color: #007afd;
}
.content_top{
    position: relative;
}
.content_top::before{
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 12px;
    height: 34px;
    background: #3699ff;
}
.content_top img{
    cursor: pointer;
}
.content_txt{
    font-size: 48px;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    flex-wrap: wrap;
    padding: 0 70px;
}
.content_bottom{
    font-size: 24px;
    font-weight: 700;
    color: #2a3765;
    text-align: center;
    margin-bottom: 52px;
}
.community_content img{
    position: absolute;
    right: 0;
    bottom: 0;
}

</style>