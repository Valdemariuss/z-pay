<template>
  <form v-if="data.give && data.get" class="quick-exchange-form" @submit.prevent="submit()">
    <div class="quick-exchange-form__rate"><span>1 {{ data.give | uppercase }}</span> ≈ <span>{{ data.rate }} {{ data.get | uppercase }}</span></div>
    <div class="quick-exchange-form__item">
      <label class="quick-exchange-form__label">You give</label>
      <div class="title-input">
        <input
          v-model.number="give"
          class="title-input__inp"
          type="number"
          required
          @input="setGet"
        >
        <span class="title-input__title">{{ data.give | uppercase }}</span>
      </div>
    </div>
    <div class="quick-exchange-form__sep">
      <svg-icon class="svg-icon quick-exchange-form__sep-icon" :name="'icons/arrow-double-down'" />
    </div>
    <div class="quick-exchange-form__item">
      <label class="quick-exchange-form__label">You receive</label>
      <dir class="title-input">
        <input
          v-model.number="get"
          class="title-input__inp"
          type="number"
          required
          @input="setGive"
        >
        <span class="title-input__title">{{ data.get | uppercase }}</span>
      </dir>
    </div>
    </div>
    <button class="quick-exchange-form__submit" type="submit">Proceed to exchange</button>
  </form>
</template>

<script>
export default {
  name: 'QuickExchangeForm',
  props: {
    data: {
      type: Object,
      default: function () {
        return { }
      }
    }
  },
  data() {
    return {
      give: 0,
      get: 0
    }
  },
  updated() {
    this.setGet()
  },
  methods: {
    submit() {
    },
    getRate() {
      let rate = this.$props.data.rate.replace(',', '')
      return parseFloat(rate)
    },
    setGive() {
      const val = parseFloat(this.get)
      let res = 0
      if (val) {
        const rate = this.getRate()
        if (rate && rate > 0) {
          res = val / rate
        }
      }
      this.give = res
    },
    setGet() {
      const val = parseFloat(this.give)
      let res = 0
      if (val) {
        const rate = this.getRate()
        if (rate && rate > 0) {
          res = val * rate
        }
      }
      this.get = res
    }
  }
}
</script>
