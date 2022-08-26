<template>
   <div class="service_content"  >
      <div class="service_box" 
         v-for="(item,index) in list" 
         :key="item.id"
         v-if="navShow"
         @click="toggleContent(index)">
        <div class="img_area">
            <img :src="item.pic" alt="">
        </div>
        <div class="service_text">{{ item.title }}</div>
      </div>
      <DrugDeviceGuideCommunity v-if="activeIndex==0"   @backMethod = "backMethod"/>
      <DrugDeviceGuideInstore v-if="activeIndex==1"  @backMethod = "backMethod"/>
      <DrugDeviceGuideOnline v-if="activeIndex==2"  @backMethod = "backMethod"/>
      <DrugDeviceGuideOnline v-if="activeIndex==3"  @backMethod = "backMethod"/>
      <DrugDeviceGuideOnline v-if="activeIndex==4"  @backMethod = "backMethod"/>
   </div>
</template>
<script>
import {ref,reactive,toRefs} from 'vue'

import DrugDeviceGuideCommunity from './drugDeviceGuideCommunity.vue'
import DrugDeviceGuideInstore from './drugDeviceGuideInstore.vue'
import DrugDeviceGuideOnline from './drugDeviceGuideOnline.vue'
export default {
   name: 'DrugDeviceGuide',
   components:{
      DrugDeviceGuideCommunity,
      DrugDeviceGuideInstore,
      DrugDeviceGuideOnline
   },
   setup(){
      const navShow = ref(true)
      const show = ref(false)
      const activeIndex = ref(-1)
      const itemList = reactive({
         list:[
            {
               id:1,
               pic:require("@/assets/images/parmacyGuide/community_guide.png"),
               title:'社区指导'
            },
            {
               id:2,
               pic:require("@/assets/images/parmacyGuide/instore_guide.png"),
               title:'店内指导'
            },
            {
               id:3,
               pic:require("@/assets/images/parmacyGuide/online_guide.png"),
               title:'线上指导'
            },
            {
               id:4,
               pic:require("@/assets/images/parmacyGuide/phone_guide.png"),
               title:'电话指导'
            },
            {
               id:5,
               pic:require("@/assets/images/parmacyGuide/instrument_adjust.png"),
               title:'医疗器械校准'
            }
         ]
      })
      const toggleContent = (index)=>{
         navShow.value = false
         activeIndex.value = index   
      }
      const backMethod = ()=>{
         navShow.value = true
         activeIndex.value = -1   
      }
      return{
         navShow,
         show,
         activeIndex,
         ...toRefs(itemList),
         toggleContent,
         backMethod
      }
   }
};
</script>
<style>
.service_content{
   flex: 1;
   margin: 60px 40px;
   flex-wrap: wrap;
}
/* 右边内容区域 */
.service_box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 490px;
    height: 360px;
    font-size: 36px;
    font-weight: 700;
    color: #17498C;
    background-color: #fff;
    margin: 24px 20px;
    border-radius: 20px;
    box-shadow: 0px 0px  43px 3px #e5e5e5;
    cursor: pointer;
}
.img_area{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 144px;
    height: 144px;
    background-color: rgba(0,122,253,.2);
    border-radius: 50%;
    margin-right: 48px;
}
</style>