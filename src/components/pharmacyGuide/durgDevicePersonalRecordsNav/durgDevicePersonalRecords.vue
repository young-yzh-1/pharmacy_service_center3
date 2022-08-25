<template>
      <div class="service_content">
         <div class="service_box" 
            v-for="(item,index) in list" 
            :key="item.id">
            <div class="img_area">
               <img :src="item.pic" alt="">
            </div>
            <div class="service_text">{{ item.title }}</div>
         </div>
      </div>
</template>
<script>
import {reactive,toRefs} from 'vue'
export default {
   name: 'durgDevicePersonalRecords',
   setup(){
      const itemList = reactive({
         list:[
            {
               id:1,
               pic:require("@/assets/images/parmacyGuide/individual_case.png"),
               title:'个人药历'
            },
            {
               id:2,
               pic:require("@/assets/images/parmacyGuide/drug_tidy.png"),
               title:'药物整理'
            },
            {
               id:3,
               pic:require("@/assets/images/parmacyGuide/bad_reaction.png"),
               title:'不良反应上报'
            },
            {
               id:4,
               pic:require("@/assets/images/parmacyGuide/slow_disease_file.png"),
               title:'慢病档案'
            }        
         ]
      })
      return{
         ...toRefs(itemList)
      }
   }
};
</script>
<style>
/* 右边内容区域 */
.service_content{
    flex: 1;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
   /* overflow: hidden; */
}
</style>