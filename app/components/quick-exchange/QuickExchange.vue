<template>
  <div class="quick-exchange">
    <div class="quick-exchange__cell">
      <quick-exchange-list :items="giveItems" :curr-item="currGive" :hd="'You give'" @on-set-item="setGive" />
    </div>
    <div class="quick-exchange__cell">
      <quick-exchange-list :items="getItems" :curr-item="currGet" :hd="'You get'" :mode="'get'" @on-set-item="setGet" />
    </div>
    <div class="quick-exchange__cell">
      <div class="quick-exchange-exchange">
        <div class="quick-exchange-list__thead">
          <h3 class="quick-exchange-list__hd">Exchange</h3>
        </div>
        <quick-exchange-form :data="formData" />
      </div>
    </div>
  </div>
</template>

<script>
import QuickExchangeList from '~/components/quick-exchange/QuickExchangeList.vue'
import QuickExchangeForm from '~/components/quick-exchange/QuickExchangeForm.vue'

export default {
  name: 'QuickExchange',
  components: {
    QuickExchangeList,
    QuickExchangeForm
  },
  data() {
    return {
      startGiveItems: [],
      startGetItems: [],
      rates: {},
      currGive: null,
      currGet: null
    }
  },
  computed: {
    giveItems() { return this.startGiveItems.filter(item => item.id !== this.currGet) },
    getItems() { return this.startGetItems.filter(item => item.id !== this.currGive) },
    formData() {
      return {
        give: this.currGive,
        get: this.currGet,
        rate: this.getRate(this.currGet)
      }
    }
  },
  beforeCreate() {
    this.loading = true
    this.$store.dispatch('QuickExchange/fetchCurrencies')
      .then(() => {
        this.loading = false
        this.init()
      })
    this.$store.dispatch('QuickExchange/fetchRates')
      .then(() => {
        this.rates = this.$store.state.QuickExchange.rates
      })
  },
  methods: {
    setGive(id) { this.currGive = id },
    setGet(id) { this.currGet = id },
    init() {
      const list = this.$store.state.QuickExchange.currencies
      this.startGiveItems = list.filter(item => item.isGive)
      this.startGetItems = list.filter(item => item.isGet)
      this.currGive = this.giveItems[0].id;
      this.currGet = this.getItems[0].id;
    },
    getRate(id) {
      let res = ''
      if (this.currGive && id) {
        try {
          res = this.rates[this.currGive][id];
        } catch (err) { }
      }
      return res;
    }
  }
}
</script>
