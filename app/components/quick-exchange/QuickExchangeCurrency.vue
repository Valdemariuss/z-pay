<template>
  <div v-if="currencie.name" class="quick-exchange-currency">
    <svg-icon v-if="currencie.imgName" class="svg-icon quick-exchange-currency__icon" :name="'currencies/' + currencie.imgName" />
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
