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
   name: 'drugBuyService',
   setup(){
      const itemList = reactive({
         list:[
            {
               id:1,
               pic:require("@/assets/images/parmacyGuide/drug_buy.png"),
               title:'药品代购'
            },
            {
               id:2,
               pic:require("@/assets/images/parmacyGuide/home_delivery.png"),
               title:'送药上门'
            },
            {
               id:3,
               pic:require("@/assets/images/parmacyGuide/split_sales.png"),
               title:'拆零销售'
            },
            {
               id:4,
               pic:require("@/assets/images/parmacyGuide/home_medicine_arr.png"),
               title:'家庭药箱整理'
            },
            {
               id:5,
               pic:require("@/assets/images/parmacyGuide/cooler_bag.png"),
               title:'免费冷藏袋'
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
   flex-wrap: wrap;
   margin: 60px 40px;
}
</style>