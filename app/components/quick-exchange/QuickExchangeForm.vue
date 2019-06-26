<template>
  <form v-if="data.give && data.get" class="quick-exchange-form" @submit.prevent="submit()">
    <div class="quick-exchange-form__rate">1 {{ data.give | uppercase }} = {{ data.rate }} {{ data.get | uppercase }}</div>
    <div class="quick-exchange-form__item">
      <label class="quick-exchange-form__label">You give</label>
      <div class="quick-exchange-form__input">
        <input v-model.number="give" type="number" required>
        <span>{{ data.give | uppercase }}</span>
      </div>
      <div class="quick-exchange-form__sep">
        <img :src="'/img/svg/quick_exchange_form_sep.svg'" alt="">
      </div>
      <div class="quick-exchange-form__input">
        <input v-model.number="get" type="number" required>
        <span>{{ data.get | uppercase }}</span>
      </div>
    </div>
    <button class="quick-exchange-form__input" type="submit">Proceed to exchange</button>
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
  methods: {
    submit() {
    }
  }
}
</script>
