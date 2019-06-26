<template>
  <div class="quick-exchange">
    <div class="quick-exchange__cell">
      <div class="quick-exchange-give" :class="{ _modal: giveModal}" @click="modalOpen('giveModal')">
        <div class="quick-exchange-give__box">
          <div class="quick-exchange__thead">
            <span v-if="giveModal" class="quick-exchange__close" @click="modalClose">X</span>
            <h3 class="quick-exchange__hd">You give</h3>
          </div>
          <div
            v-for="currencie in giveItems"
            :key="currencie.id"
            :class="{ _active: (currencie.id === currGive)}"
            class="quick-exchange-give__item"
            @click="setGive(currencie.id)"
          >
            <quick-exchange-currency :currencie="currencie" />
          </div>
        </div>
      </div>
    </div>
    <div class="quick-exchange__cell">
      <div class="quick-exchange-get" :class="{ _modal: getModal}" @click="modalOpen('getModal')">
        <div class="quick-exchange-get__box">
          <div class="quick-exchange__thead">
            <div class="quick-exchange-get__cell">
              <span v-if="getModal" class="quick-exchange__close" @click="modalClose">X</span>
              <h3 class="quick-exchange__hd">You get</h3>
            </div>
            <div class="quick-exchange-get__cell">RATE</div>
            <div class="quick-exchange-get__cell">Reserve</div>
          </div>
          <div
            v-for="currencie in getItems"
            :key="currencie.id"
            :class="{ _active: (currencie.id === currGet)}"
            class="quick-exchange-get__item"
            @click="setGet(currencie.id)"
          >
            <div class="quick-exchange-get__cell">
              <quick-exchange-currency :currencie="currencie" />
            </div>
            <div class="quick-exchange-get__cell">{{ getRate(currencie.id) }}</div>
            <div class="quick-exchange-get__cell">{{ currencie.reserve }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="quick-exchange__cell">
      <div class="quick-exchange-exchange">
        <div class="quick-exchange__thead">
          <h3 class="quick-exchange__hd">Exchange</h3>
        </div>
        <quick-exchange-form :data="formData" />
      </div>
    </div>
  </div>
</template>

<script>
import QuickExchangeCurrency from '~/components/quick-exchange/QuickExchangeCurrency.vue'
import QuickExchangeForm from '~/components/quick-exchange/QuickExchangeForm.vue'

export default {
  name: 'QuickExchange',
  components: {
    QuickExchangeCurrency,
    QuickExchangeForm
  },
  data() {
    return {
      startGiveItems: [],
      startGetItems: [],
      rates: {},
      currGive: 'btc',
      currGet: 'eth',
      giveModal: false,
      getModal: false
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
        const list = this.$store.state.QuickExchange.currencies
        this.loading = false
        this.startGiveItems = list.filter(item => item.isGive)
        this.startGetItems = list.filter(item => item.isGet)
      })
    this.$store.dispatch('QuickExchange/fetchRates')
      .then(() => {
        this.rates = this.$store.state.QuickExchange.rates
      })
  },
  methods: {
    setGive(id) { this.currGive = id },
    setGet(id) { this.currGet = id },
    getRate(id) {
      let res = ''
      if (this.currGive && id) {
        try {
          res = this.rates[this.currGive][id];
        } catch (err) { }
      }
      return res;
    },
    modalOpen(key) {
      const flag = this[key]
      console.warn('flag - ' + flag)
      if (flag) { return }
      const wWidth = window.innerWidth
      if (wWidth <= 800) {
        this[key] = true
        console.warn('open - ' + key)
      }
    },
    modalClose(e) {
      e.stopPropagation()
      this.giveModal = false
      this.getModal = false
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/quick-exchange.scss'
</style>
