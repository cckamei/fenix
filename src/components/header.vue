<template>
  <div class="header">
    <div v-if="isDefined('back')" class="back" @click="backHandler"><img src="@/assets/common/button_back.png" alt=""></div>
    <div class="title ellipsis">
      <slot></slot>
    </div>
    <div class="handler">
      <slot name="headright"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      back: {
        type: Boolean
      },
      gocancel: {
        type: Boolean
      },
      godetail: {
        type: Boolean
      },
      mypage: {
        type: Boolean
      }
    },
    methods: {
      isDefined(val) {
        return this[val] !== undefined;
      },
      isFunction(val) {
        return this[val] === 'function';
      },
      backHandler() {
        if(this.gocancel) {
          this.$router.push({ name: 'cancelList' });
        } else if(this.godetail) {
          this.$router.push({ name: 'orderdetail' });
        } else if(this.mypage) {
          this.$router.push({ name: 'mypage' });
        } else {
          this.$router.go(-1);
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .header {
    position: absolute;
    height: 96px;
    line-height: 96px;
    top: 0;
    width: 100%;
    box-shadow: 0 7px 50px 10px rgba(170, 170, 170, 0.5);
    background-color: #fff;
    z-index: 2;
    .back {
      width: 96px;
      height: 96px;
      position: absolute;
      left: 0;
      top: 0;
      padding: 18px;
      img {
        height: 100%;
        display: block;
      }
    }
    .title {
      padding-left: 96px;
      font-size: 32px;
      color: #999;
      text-align: center;
      padding-right: 96px;
    }
    .handler {
      min-width: 96px;
      height: 96px;
      position: absolute;
      right: 0;
      top: 0;
      font-size: 28px;
      line-height: 96px;
      text-align: center;
      padding-right: 40px;
      color: #999;
    }
  }
</style>
