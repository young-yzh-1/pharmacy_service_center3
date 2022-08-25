<template>
    <div class="outer_pharmacy_guidance">
        <div class="inner_pharmacy_guidance">
            <div class="pharmacy_guidance_head">
                <div class="get_back" @click="back">
                    <img src="@/assets/images/parmacyGuide/return_arrow.png" alt="">
                    <div class="get_back_text">返回</div>
                </div>
                <div class="guide_title">药事指导</div>
                <div class="first_page" @click="back">
                    <img src="@/assets/images/parmacyGuide/first_page.png" alt="">
                    <div class="first_page_text">首页</div>
                </div>
            </div>    
            <div class="pharmacy_guidance_body">
                <div class="pharmacy_guidance_nav">
                    <div 
                        class="category_box" 
                        @click="toggleContent('drugDeviceGuide')"
                        :class="{active: active == 'drugDeviceGuide'}">
                        <img :src="active == 'drugDeviceGuide' ? whiteUrl1 : Url1" alt="">
                        <div class="category_text">药械指导</div>
                    </div>
                    <div 
                        class="category_box" 
                        @click="toggleContent('drugDeviceBuyService')"
                        :class="{active: active == 'drugDeviceBuyService'}">
                        <img :src="active == 'drugDeviceBuyService' ? whiteUrl2 : Url2" alt="">
                        <div class="category_text">购药服务</div>
                    </div>
                    <div 
                        class="category_box" 
                        @click="toggleContent('durgDevicePersonalRecords')"
                        :class="{active:active == 'durgDevicePersonalRecords'}">
                        <img :src="active == 'durgDevicePersonalRecords' ? whiteUrl3 : Url3" alt="">
                        <div class="category_text">个人药历档案</div>
                    </div>
                    <div 
                        class="category_box" 
                        @click="toggleContent('durgDeviceHealthSelfHelp' )"
                        :class="{active:active == 'durgDeviceHealthSelfHelp'}">
                        <img :src="active == 'durgDeviceHealthSelfHelp' ? whiteUrl4 : Url4" alt="">
                        <div class="category_text">健康自助</div>
                    </div>
                </div>
                <transition name="fade" mode="out-in">
                    <component 
                        :is="currentContent" 
                        v-if="show">
                    </component>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import {reactive,toRefs} from 'vue'
import { useRouter } from 'vue-router';

import drugDeviceGuide from './drugDeviceGuideNav/drugDeviceGuide.vue'
import drugDeviceBuyService from './drugDeviceBuyServiceNav/drugDeviceBuyService.vue'
import durgDevicePersonalRecords from './durgDevicePersonalRecordsNav/durgDevicePersonalRecords.vue'
import durgDeviceHealthSelfHelp from './durgDeviceHealthSelfHelpNav/durgDeviceHealthSelfHelp.vue'

export default {
   name: 'pharmacyGuideHome',
   components: {
    drugDeviceGuide,
    drugDeviceBuyService,
    durgDevicePersonalRecords,
    durgDeviceHealthSelfHelp
   },
   setup(){
    const $router = useRouter()
    const initData = reactive({
        currentContent:'drugDeviceGuide',
        active: 'drugDeviceGuide',
        Url:'',
        whiteUrl:'',
        show: true
    })
    const images = reactive({
        Url1 : require('@/assets/images/parmacyGuide/device_guide.png'),
        whiteUrl1 : require('@/assets/images/parmacyGuide/white_device_guide.png'),
        Url2 : require('@/assets/images/parmacyGuide/buy_service.png'),
        whiteUrl2 : require('@/assets/images/parmacyGuide/white_buy_service.png'),
        Url3 : require('@/assets/images/parmacyGuide/personal_doc.png'),
        whiteUrl3 : require('@/assets/images/parmacyGuide/white_personal_doc.png'),
        Url4 : require('@/assets/images/parmacyGuide/self_help.png'),
        whiteUrl4 : require('@/assets/images/parmacyGuide/white_self_help.png')
    })
    const back = ()=>{
        $router.go(-1)
    }
    const toggleContent = (index)=>{
        initData.active = index,
        initData.currentContent = index
    }
    return{
        ...toRefs(initData),
        ...toRefs(images),
        back,
        toggleContent
    }
   }
   
};
</script>
<style>
.fade-enter-active, .fade-leave-active{
    transition: all .4s ease;
}
.fade-enter, .fade-leave-to{
    transform: translateX(70px);
    opacity: 0;
}

body{
    margin: 0;
    background-color: #F0F7FF;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}
/* 头部 */
.pharmacy_guidance_head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 142px;
    padding: 0 50px;
    box-shadow: 0 6px 20px 0 rgb(0 122 253 / 10%);
    background-color: #fff;
    font-size: 36px;
    color: #007afd;
}
/* 返回首页 */
.get_back  ,.first_page{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.get_back img ,.first_page img{
    margin-right: 22px;
}
/* 药事指导标题 */
.guide_title{
    font-size: 60px;
    font-weight: 700;
    text-align: center;
}
/* 内容区 */
.pharmacy_guidance_body{
    display: flex;
    justify-content: left;
    align-items: flex-start;
    padding: 0;
    overflow: hidden;
}
/* 左边分类区域 */
.pharmacy_guidance_nav{
    margin-top: 226px;
    left: 0;
}
.category_box{
    display: flex;
    align-items: center;
    justify-content: left;
    width: 283px;
    height: 100px;
    color: #32518a;
    background: #fff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 13px;
    border-radius: 0 50px 50px 0;
    box-shadow: 0 0 43px 3px #e5e5e5;
    cursor: pointer;
}
.category_box:active{
    background-color: #007afd;
    color: #fff;
}
.active{
    background-color: #007afd;
    color: #fff;
}
.category_box img{
    margin-right: 20px;
    margin-left: 30px;
}

</style>