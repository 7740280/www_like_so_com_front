<template>
  <div>
    <swiper id="swiperBox" :options="swiperOption">
      <swiper-slide class="page1">
        <div class="mask"></div>
        <nav class="nav-top">
          <ul class="animated bounce">
            <mu-button color="primary">我的博客</mu-button>
            <mu-button color="warning">留言小本</mu-button>
            <mu-button color="success">友情站点</mu-button>
          </ul>
        </nav>
        <mu-date-picker landscape :date.sync="date"></mu-date-picker>
      </swiper-slide>
      <swiper-slide style="background-color: skyblue;">222</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "Index",
    data: function () {
      return {
        date: undefined,
        swiperOption: {
          notNextTick: true,
          direction: 'vertical',
          setWrapperSize: true,
          autoHeight: true,
          slidesPerView: 1,
          mousewheel: true,
          mousewheelControl: true,
          height: window.innerHeight,
          resistanceRatio: 0,
          observeParents: true,
          pagination: '.swiper-pagination',
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
    }
  }
</script>


<style scoped lang="scss">
  .page1 {
    background: url("../assets/images/bg1.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;

    .mask {
      height: 100%;
      width: 100%;
      background-color: #888;
      opacity: .1;
      position: absolute;
      z-index: 1;
    }

    .nav-top {
      list-style: none;
      width: 400px;
      position: absolute;
      z-index: 2;
      text-align: center;
      left: 50%;
      top: 40%;
      transform: translate(-50%);
      transform: translate(-50%);

      .show {

      }

      li {
        margin-right: 5px;
        height: 100px;
        background-color: #2196f3;
        line-height: 100px;
        border-radius: 20px;
        float: left;

        a {
          color: #ffffff;
          font-size: 50px;
        }
      }
    }

    .mu-picker-landspace {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 2;
    }
  }
</style>
