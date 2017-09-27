<template>
  <scroller class="wrapper">
    <div class="title_bar">
      <text  :class="[type===1?'title':'titles']"  @click='update(1)'>今天</text>
      <text  :class="[type===2?'title':'titles']"  @click='update(2)'>昨天</text>
      <text  :class="[type===3?'title':'titles']"  @click='update(3)'>本周</text>
      <text  :class="[type===4?'title':'titles']"  @click='update(4)'>本月</text>
    </div>
    <div class="all_bg" v-if='info'>
      <div class="bgs">
        <image src='http://orl2uvwcw.bkt.clouddn.com/bg1.png' class="bg"></image>
        <div class="order_k">
          <text class='send'>派件</text>
          <div class='order' v-if='info.waybill'>
            <div class="order_list">
              <text class="order_type">已签收</text>
              <text class="number">{{info.waybill.signed}}</text>
            </div>
            <div class="order_list">
              <image src='http://orl2uvwcw.bkt.clouddn.com/line.png' class="kk"></image>
            </div>
            <div class="order_list">
              <text class="order_type">待签收</text>
              <text class="number">{{info.waybill.waitSigned}}</text>
            </div>
            <div class="order_list">
              <image src='http://orl2uvwcw.bkt.clouddn.com/line.png' class="kk"></image>
            </div>
            <div class="order_list">
              <text class="order_type">异常签收</text>
              <text class="number">{{info.waybill.signException}}</text>
            </div>
            <div class="order_list">
              <image src='http://orl2uvwcw.bkt.clouddn.com/line.png' class="kk"></image>
            </div>
            <div class="order_list">
              <text class="order_type">自提</text>
              <text class="number">{{info.waybill.waitPickup}}</text>
            </div>
          </div>
        </div>
      </div>
      <div class="bgs">
        <image src='http://orl2uvwcw.bkt.clouddn.com/bg1.png' class="bg"></image>
        <div class="order_k">
          <text class='send'>上门寄件</text>
          <div class='order' v-if='info.doorstepSend'>
            <div class="order_list">
              <text class="order_type">抢单</text>
              <text class="number">{{info.doorstepSend.grabed}}</text>
            </div>
            <div class="order_list">
              <image src='http://orl2uvwcw.bkt.clouddn.com/line.png' class="kk"></image>
            </div>
            <div class="order_list">
              <text class="order_type">指定</text>
              <text class="number">{{info.doorstepSend.waitMail}}</text>
            </div>
            <div class="order_list">
              <image src='http://orl2uvwcw.bkt.clouddn.com/line.png' class="kk"></image>
            </div>
            <div class="order_list">
              <text class="order_type">取消</text>
              <text class="number">{{info.doorstepSend.cancelled}}</text>
            </div>
          </div>
        </div>
      </div>
      <div class="bgs">
        <image src='http://orl2uvwcw.bkt.clouddn.com/bg1.png' class="bg"></image>
        <div class="order_k">
          <text class='send'>驿站寄件</text>
          <div class='order' v-if='info.siteSend'>
            <div class="order_list">
              <text class="order_type">揽件</text>
              <text class="number">{{info.siteSend.grabed}}</text>
            </div>
            <div class="order_list">
              <image src='http://orl2uvwcw.bkt.clouddn.com/line.png' class="kk"></image>
            </div>
            <div class="order_list">
              <text class="order_type">取消</text>
              <text class="number">{{info.siteSend.cancelled}}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full" v-if='full'></div>
    <div class="loading" v-if='load'>
      <text class="box">正在为你加载</text>
    </div>
  </scroller>
</template>

<script>
var modal = weex.requireModule('modal')
var valueModel = weex.requireModule('weex_module')
const start = new Date().setHours(0,0,0)
const end = new Date().setHours(23,59,59)
import { getList } from '../api/http.js'
  export default {
    data: {
        type: 1,
        info: undefined,
        load: false,
        full: false,
        kOpenId: undefined
    },
    created(){
      var that= this;
      valueModel.getOpenId(function(v){
        that.kOpenId=v.openId;
     });
      modal.alert({
        message: that.kOpenId,
        duration: 3
      }, function (value) {
        console.log('alert callback', value)
      })
      let firstData = {
        kOpenId: this.kOpenId,
        startTime: start,
        endTime: end,
      }
     this.getCount(firstData)
    },
    methods: {
      update: function (e) {
        this.load = true
        this.full = true
         this.type = Number(e)
        switch (e){
          case 1:
          let dataFirst = {
            kOpenId: this.kOpenId,
            startTime: start,
            endTime: end
          }
         this.getCount(dataFirst)
          break;
          case 2:
          let data1 = {
            kOpenId: this.kOpenId,
            startTime: start-24*60*60*1000,
            endTime: end-24*60*60*1000
          }
          this.getCount(data1)
          break;
          case 3:
          let day = new Date().getDay()
          let data2 = {
            kOpenId: this.kOpenId,
            startTime: start-24*60*60*1000*day,
            endTime: end
          }
          this.getCount(data2)
          break;
          case 4:
          let day1 = new Date().getDate()
          let data3 = {
            kOpenId: this.kOpenId,
            startTime: start-24*60*60*1000*day1,
            endTime: end
          }
          this.getCount(data3)
          break;
        }
      },
      getCount(param){
        getList(param).then(res=>{
          if(res.status ===200){
            this.load = false
            this.full = false
            this.info = res.data
          }
        }).catch(err=>{
          this.load = false
          this.full = false
        })
      }
    }
  }
</script>
<style scoped>
.full{
  width: 750px;height: 10000px;position: absolute;left: 0;top: 0;background-color: rgba(0,0,0,0.5)
}
.loading{
  border-radius: 15px;
  justify-content: center;flex-direction: row;position: absolute;left: 260px;top: 400px;align-items: center;background-color: rgba(0,0,0,0.5)
}
.box{
color: #fff;padding-left: 30px; padding-right: 30px;padding-top: 30px;padding-bottom:30px
}
  .wrapper {background-image: linear-gradient(to bottom,#58c7fa,#3c87f6);padding-bottom: 30px;position: relative;}
  .all_bg{
    margin-top: 40px;
  }
  .kk{
  height: 102px;width: 1px;
  }
  .order_type{
    color: #666;text-align: center;font-size: 24px;
  }
  .order_k{
    position: relative;left: 0;top: -250px;
  }
  .order{
  flex-direction: row;justify-content: space-around;align-items: center;margin-left: 15px;margin-right: 15px;
  }
  .bg{height: 300px;width:auto;margin-left: 15px;margin-right: 15px;}
  .number{
    margin-top: 15px!important;font-size: 48px;
  }
  .send{
    text-align: center;font-size: 28px;margin-bottom: 30px
  }
  .title_bar{
    display: flex;flex-direction: row;justify-content: space-around;;margin-top: 50px;
  }
  .titles{
    font-size: 28px;color: #fff;text-align: center;width: 80px;border-bottom-width: 0;border-bottom-style: none;padding-bottom: 5px;
  }
  .title{
    font-size: 28px;color: #fff;text-align: center;width: 80px;
    border-bottom-width: 4px;border-bottom-style: solid;border-color: #fff;padding-bottom: 5px;
  }
  .bgs{
    position: relative;height: 350px;
  }
  .ab_re{
    position: relative;top: -250px;margin-left: 15px;margin-right: 15px;
  }
</style>
