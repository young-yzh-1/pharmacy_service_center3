<template>
    <div class="outer_content">
      <div class="inner_content">
        <!-- 详情介绍区域 -->
        <div class="details">
          <!-- 公司与药师的联系方式介绍区域 -->
          <div class="intro">
            <!-- 左-公司介绍 -->
            <div class="intro_company">
              <div class="company">
                <img src="@/assets/images/Home/company.jpg" alt="" class="company_img" />
                <div class="company_info">
                  <p class="company_name">华东医药台州有限公司东海大道店</p>
                  <p class="address">台州市椒江区东海大道793号</p>
                  <div class="star">
                    <img src="@/assets/images/Home/yellow_star.png" alt="" />
                    <img src="@/assets/images/Home/yellow_star.png" alt="" />
                    <img src="@/assets/images/Home/yellow_star.png" alt="" />
                    <img src="@/assets/images/Home/yellow_star.png" alt="" />
                    <img src="@/assets/images/Home/blue_star.png" alt="" />
                  </div>
                </div>
              </div>
              <p class="intro_details">
                华东大药房东海大道店，是椒江区内开设的一家5星药事服务中心。面向所有居民，让居民在“家门口”享受到专业、优质、安全、人性化的用药用械咨询指导服务，满足群众知药、懂药、购好药、会用药的需求。华东大药房东海大道店，是椒江区内开设的一家5星药事服务中心。面向所有居民，让居民在“家门口”享受到专业、优质、安全。
              </p>
            </div>
            <div class="line"></div>
            <!-- 右-药师联系方式 -->
            <div class="contact_details">
              <div class="connect">药师热线</div>
              <div class="pharmacist_img">
                <img src="@/assets/images/Home/pharmacist.png" alt="" />
              </div>
              <div class="name">蒋医师</div>
              <div class="phone">1358 5864 8526</div>
              <div class="pharmacist_code">
                <img src="@/assets/images/Home/pharmacist_code.jpg" alt="">
              </div>
              <div class="follow">扫码关注</div>
            </div>
          </div>
          <!-- 分类介绍 -->
          <div class="outer_category">
            <div class="category">
                <div 
                    class="category_title" 
                    v-for="(item,index) in list"
                    :key="item.id"
                    :class="{'active_title':activeIndex == index}"
                    @click="toggleContent(index)">{{ item.title }}
                </div>
            </div>
            <div class="outer_category_details">
                <div class="category_details">
                    <CategoryDocument  :style="{display:activeIndex == 0 ?'block':'none'}"/>
                    <CategoryMedia  :style="{display:activeIndex == 1 ?'block':'none'}"/>
                    <CategorySystem  :style="{display:activeIndex == 2 ?'block':'none'}"/>
                    <CategoryStyle  :style="{display:activeIndex == 3 ?'block':'none'}"/>
                </div>
            </div>
          </div>
        </div>
        <!-- 右侧导航区 -->
        <PharmacyNav/>
      </div>
    </div>
</template>
<script>
import PharmacyNav from './pharmacyNav'
import CategoryDocument from './category/categoryDocument.vue'
import CategoryMedia from './category/categoryMedia.vue'
import CategoryStyle from './category/categoryStyle.vue'
import CategorySystem from './category/categorySystem.vue'

import {reactive,ref,toRefs} from 'vue'
export default {
  name: "parmacyContent",
  components: {PharmacyNav,CategoryDocument,CategoryMedia,CategoryStyle,CategorySystem},
  setup(){
    let index = ref(0)
    let activeIndex = ref(0)
    let state = reactive({
        list:[
            { id:1, title:'相关证件'},
            { id:2, title:'相关媒体'},
            { id:3, title:'药事服务站工作制度'},
            { id:4, title:'执业药师风采'}
        ]
    })
    function toggleContent(index){
        activeIndex.value = index
    }
    return{
        index,
        activeIndex,
        ...toRefs(state),
        toggleContent
    }
  }
}
</script>
<style>
/* 内容区 */
.outer_content{
    padding: 38px 50px 24px 50px;
}
.inner_content{
    display: flex;
    justify-content: center;
}
/* 公司介绍 */
.details{
    flex: 1;
    height: 825px;
    box-shadow: 0 0 43px 3px #e5e5e5;
}
.intro{
    display: flex;
    height: 308px;
    background-color: white;
}
.intro_company{
    flex: 1;
    overflow-y: auto;
    padding: 30px 35px 49px 30px;
}
.intro_company::-webkit-scrollbar{
    display: none;
}
.company{
    display: flex;
}
.company_img{
    width: 126px;
    height: 126px;
    background-color: #99CCFF;
}
.company_info{
    margin-left: 30px;
}
.company_name{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 3;
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 700;
    color: #2f2f2f;
}
.address{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 3;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #646464;
}
.star img{
    height: 21px;
    margin-right: 8px;
}
.intro_details{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 14px;
    font-weight: 500;
    color: #323232;
    margin-top: 24px;
    
}

.line{
    width: 1px;
    height: 308px;
    background: #d7eaff;
}
/* 药师联系方式 */
.contact_details{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 225px;
    padding: 23px 0 14px 0;
}
.connect{
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    color: #323232;
}
.pharmacist_img{
    width: 30px;
    height: 34px;
}
.contact_details .name{
    font-size: 14px;
    color: #969696;
    font-weight: 400;
    color: #969696;
}
.phone{
    font-size: 14px;
    color: #969696;
    font-weight: 500;
    color: #2E2E2E;
}
.pharmacist_code img{
    width: 109px;
    height: 109px;
}
.follow{
    margin: 0;
    font-size: 14px;
    color: #969696;
    font-weight: 500;
    color: #323232;
}


/* 分类及详情*/
.outer_category{
    height: 517px;
    padding: 29px 30px 26px 27px;
    background-color: #D7EAFF;
    box-sizing: border-box;
}
/* 分类 */
.category{
    display: flex;
    align-items: flex-start;
    color: #32518A;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 29px;
}
.active_title:before{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 87px;
    height: 8px;
    background: #32518a;
}
.active_title{
    position: relative;
    font-weight: 700;    
    color: #32518A;
    padding-bottom: 16px;
    cursor: pointer;
}

.category_title{
    cursor: pointer;
    margin-right: 73px;
}

/* 详情 */
.outer_category_details{
    flex-wrap: wrap;
    align-items: center;
    overflow-y: auto;
    height: calc(100% - 70px);
}
.outer_category_details::-webkit-scrollbar{
    width: 8px; 
    opacity: 0.6;
}
.outer_category_details::-webkit-scrollbar-thumb{
    background: rgba(245, 249, 255,.6);
    border-radius: 4px;
}
.outer_category_details::-webkit-scrollbar-track{
    background-color: transparent;
    height: 234px;
}
</style>