<template>
    <div class="outer_instore_content">
        <div class="instore_content">
            <div class="content_top">
                <div class="title">店内指导</div>
                <img src="@/assets/images/parmacyGuide/close_icon.png" @click="backNav">
            </div>
            <div class="content_txt">
                提供店内用药指导，药师交待各种药品的用法、用量及注意事项，
                <br>
                遇到不良反应该如何处理，及碰到紧急情况如何处理等等
            </div>
            <div class="content_bottom">—— 此为线下服务，请咨询店员 ——</div>
            <img src="@/assets/images/parmacyGuide/content_img.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
   name: 'drugDeviceGuideInstore',
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
/* 内容区 */
.outer_instore_content{
    flex: 1;
}
.instore_content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 768px;
    background-color: #fff;
    border-radius: 20px;
    margin: 48px 0;
    box-shadow: 0 0 43px 3px #e5e5e5;
    overflow-y: auto;
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
.instore_content img{
    position: absolute;
    right: 0;
    bottom: 0;
    /* border-style: none; */
}

</style>