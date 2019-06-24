<template>
  <div class="quick-exchange">
    <div class="quick-exchange__cell">
      <div class="quick-exchange-give">
        <h3>You give</h3>
        <div v-for="currencie in currencies" :key="currencie.name">
          <template v-if="currencie.withdraw.enabled">
            {{ currencie.name }} <br>
            {{ currencie.withdraw.enabled }} <br>
            -----------
          </template>
        </div>
      </div>
    </div>
    <div class="quick-exchange__cell">
      <div class="quick-exchange-get">
        <h3>You get</h3>
        <div v-for="currencie in currencies" :key="currencie.name">
          <template v-if="!currencie.withdraw.enabled">
            {{ currencie.name }} <br>
            {{ currencie.withdraw.enabled }} <br>
            -----------
          </template>
        </div>
      </div>
    </div>
    <div class="quick-exchange__cell">
      <div class="quick-exchange-get">
        <h3>Exchange</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickExchange',
  computed: {
    currencies() { return this.$store.state.currencies.list }
  },
  created() {
    this.loading = true
    this.$store.dispatch('currencies/fetchCurrencies')
      .then((currencies) => {
        this.loading = false
      })
  }
}
</script>

<style lang="scss">
  .quick-exchange {
    display: flex;
    width: 100%;
    &__cell {
      flex: 1;
      border: 1px solid #ccc;
    }
  }
</style>
