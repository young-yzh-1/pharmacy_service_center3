<template>
    <!-- 头部   -->
    <div class="pharmacy_service_header">
        <!-- 时间日期 -->
        <div class="time_area">
            <div class="time">{{ nowTime }}</div>
            <div class="date">
                <div class="lunar">{{ getLunarYear }}  {{ getLunarDay }}</div>
                <div class="solar">{{ nowDate}} {{ nowWeek }}</div>
            </div>
        </div>
        <!-- logo标签区域 -->
        <img src="@/assets/images/Home/logo.png" alt="">
        <!-- 药师服务项 -->
        <div class="project">
            <div class="number">
                <div class="fir_number">2</div>
                <div class="sec_number">7</div>
            </div>
            <div class="project_name">药事服务 (项)</div>
        </div>
    </div>
</template>
<script>
import {reactive,toRefs,onMounted} from 'vue'
const moment = require('moment');

const {Lunar} = require('lunar-javascript')
export default {
    name: 'pharmacyHeader',
    setup(){
        const d = Lunar.fromDate(new Date());
        const date = reactive({
            getLunarYear:'',
            getLunarDay:'',
            nowDate: moment().format('YYYY/MM/DD'),
            nowTime: moment().format('HH:mm'),
            nowWeek: moment().format('dddd')
        })
        onMounted(() => {
            date.getLunarYear = d.getYearInGanZhi()+'年'
            date.getLunarDay = d.getMonthInChinese() + '月' + d.getDayInChinese()
        })
        return{
            d,
            ...toRefs(date),
        }
    }
};

</script>
<style>
/* 头部 */
.pharmacy_service_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 142px;
    padding: 0 50px;
    background-color: #fff;
    box-shadow: 0px 6px 20px 0px rgba(0,121,253,0.10); 
    overflow: hidden;
}

/* 时间日期 */
.time_area{
    flex: 1;
    display: flex;
    align-items: center;
}
.time{
    font-size: 60px;
    font-family: 'tttt';
    font-weight: 800;
    text-align: left;
    color: #007afd;
}
.lunar, .solar{
    margin-left: 14px;
    color: #969696;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
}
/* logo标签 */
.pharmacy_service_logo {
    display: flex;
    align-items: center;
}
.pharmacy_service_header img{
    flex: 0;
    margin-top: 16px;
}

/* 药事服务项 */
.project{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 86px;
}
.number{
    display: flex;
    align-items: center;
    font-size: 55px;
    font-family: Helvetica, 'Helvetica-Condensed-Black-Se';
    font-weight: 600;
}
.fir_number{
    width: 41px;
    height: 62px;
    line-height: 62px;
    text-align: center;
    color: #007AFD;
    background-color: #D7EAFF;
    margin: 0 5px;
}
.sec_number{
    width: 41px;
    height: 62px;
    line-height: 62px;
    text-align: center;
    color: #007AFD;
    background-color: #D7EAFF;
}
.project_name{
    font-size: 14px;
    font-weight: 400;
    padding-top: 5px;
    color: #969696;
}


</style>