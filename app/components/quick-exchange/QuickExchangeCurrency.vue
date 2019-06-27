<template>
  <div v-if="currencie.name" class="quick-exchange-currency">
    <svg-icon v-if="currencie.imgName" class="quick-exchange-currency__img _symbol" :name="'currencies/' + currencie.imgName" />
    <img v-if="currencie.imgName" class="quick-exchange-currency__img" :src="'/img/crypto/'+ currencie.imgName +'.svg'" alt="">
    <span class="quick-exchange-currency__name">{{ currencie.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'QuickExchangeCurrency',
  props: {
    currencie: {
      type: Object,
      default: function () {
        return { }
      }
    }
  }
}
</script>
