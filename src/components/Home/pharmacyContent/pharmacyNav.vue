<template>
<!-- 服务 -->
    <div class="service">
        <div class="service_top">
            <div class="guide" @click="toGuide">
                <div class="name">药事指导</div>
                <img src="@/assets/images/Home/guide.gif" alt="" />
                <div class="button" id="go_button">
                    <div class="button_text">立即前往</div>
                </div>
            </div>
            <div class="medicine">
                <div class="medicine_search">
                    <img src="@/assets/images/Home/medicine_search.gif" alt="" />
                    <div class="search_text">药品查询</div>
                </div>
                <div class="china_medicine">
                    <img src="@/assets/images/Home/china_medicine.gif" alt="" />
                    <div class="search_text">中医药服务</div>
                </div>
            </div>
        </div>
        <div class="service_bottom">
            <div class="service_bottom_box">
                <img src="@/assets/images/Home/declare.gif" alt="" />
                <div class="service_name">科普宣传</div>
            </div>
            <div class="service_bottom_box">
                <img src="@/assets/images/Home/life.gif" alt="" />
                <div class="service_name">生活服务</div>
            </div>
            <div class="service_bottom_box">
                <img src="@/assets/images/Home/reserve.gif" alt="" />
                <div class="service_name">一键预约</div>
            </div>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
    name: 'pharmacyNav',
    setup(){
        const $router = useRouter()
        function toGuide(){
            $router.push('/pharmacyGuideHome')
        }
        return{
            toGuide
        }
    }
};
</script>
<style>
/* 服务 */
.service{
    width: 679px;
    font-size: 30px;
    font-weight: 700;
    text-align: left;
    color: #006150;
    margin-left: 40px;
}
.service_top{
    display: flex;
    margin-bottom: 39px;
}
/* 药事指导 */
.guide{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    width: 320px;
    height: 480px;
    background-color: white;
    box-shadow: 0px 0px 43px 3px #e5e5e5; 
}
.guide .name{
    margin-top: 50px;
    margin-bottom: 30px;
}
.guide img{
    width: 300px;
}
.button{
    width: 194px;
    height: 50px;
    position: relative;
    margin: 0;
    text-align: center;
    background-color: #FFC33C;
    border-radius: 25px;
    box-shadow: 0px 1px 30px 0px rgba(255,195,60,0.50); 
}
.button_text{
    position: absolute;
    left: 25%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 30px;
}
/* 药品查询和中医药服务 */
.medicine{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-left: 39px;
}
/* 药品查询 */
.medicine_search{
    width: 320px;
    height: 222px;
    cursor: pointer;
    background-color: white;
    box-shadow: 0px 0px 43px 3px #e5e5e5; 
    position: relative;
}
.search_text{
    position: absolute;
    right: 22px;
    top: 50%;
    transform: translateY(-50%);
}
/* 中医药服务 */
.china_medicine{
    position: relative;
    width: 320px;
    height: 222px;
    background-color: white;
    cursor: pointer;
    box-shadow: 0px 0px 43px 3px #e5e5e5; 
}
/* 下方三个服务 */
.service_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center; 
}
.service_bottom img{
    width: 100%;
}
.service_bottom_box{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    width: 200px;
    height: 306px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 0px 43px 3px #e5e5e5; 
}
.service_name{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 54px;
}
</style>