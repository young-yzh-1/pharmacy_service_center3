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
   name: 'durgDeviceHealthSelfHelp',
   components:{},
   setup(){
      const itemList = reactive({
         list:[
            {
               id:1,
               pic:require("@/assets/images/parmacyGuide/instore_drug_enquiry.png"),
               title:'店内药品查询'
            },
            {
               id:2,
               pic:require("@/assets/images/parmacyGuide/nation_drug_enquiry.png"),
               title:'国家药品查询'
            },
            {
               id:3,
               pic:require("@/assets/images/parmacyGuide/health_measure.png"),
               title:'健康测量'
            },
            {
               id:4,
               pic:require("@/assets/images/parmacyGuide/clean_wound.png"),
               title:'自助清创'
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
   margin: 60px 40px;
   flex-wrap: wrap;
   /* overflow: hidden; */
}

</style>