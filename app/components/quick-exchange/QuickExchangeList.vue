<template>
  <div class="quick-exchange-list" :class="{ _modal: modal, _get: mode === 'get'}" @click="modalOpen">
    <div class="quick-exchange-list__box">
      <div class="quick-exchange-list__thead">
        <template v-if="mode === 'get'">
          <div class="quick-exchange-list__cell">
            <span v-if="modal" class="quick-exchange-list__close" @click="modalClose">X</span>
            <h3 class="quick-exchange-list__hd">{{ hd }}</h3>
          </div>
          <div class="quick-exchange-list__cell">RATE</div>
          <div class="quick-exchange-list__cell">Reserve</div>
        </template>
        <template v-else>
          <span v-if="modal" class="quick-exchange-list__close" @click="modalClose">X</span>
          <h3 class="quick-exchange-list__hd">{{ hd }}</h3>
        </template>
      </div>
      <div
        v-for="currencie in items"
        :key="currencie.id"
        :class="{ _active: (currencie.id === currItem)}"
        class="quick-exchange-list__item"
        @click="$emit('on-set-item', currencie.id)"
      >
        <template v-if="mode === 'get'">
          <div class="quick-exchange-list__cell">
            <quick-exchange-currency :currencie="currencie" />
          </div>
          <div class="quick-exchange-list__cell">{{ $parent.getRate(currencie.id) }}</div>
          <div class="quick-exchange-list__cell">{{ currencie.reserve }}</div>
        </template>
        <template v-else>
          <quick-exchange-currency :currencie="currencie" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import QuickExchangeCurrency from '~/components/quick-exchange/QuickExchangeCurrency.vue'

export default {
  name: 'QuickExchangeList',
  components: {
    QuickExchangeCurrency
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    currItem: {
      type: String,
      default: function () {
        return null
      }
    },
    hd: {
      type: String,
      default: function () {
        return null
      }
    },
    mode: {
      type: String,
      default: function () {
        return null
      }
    }
  },
  data() {
    return {
      modal: false
    }
  },
  methods: {
    modalOpen() {
      if (!this.modal && window.innerWidth <= 800) {
        this.modal = true
      }
    },
    modalClose(e) {
      e.stopPropagation()
      this.modal = false
    }
  }
}
</script>
