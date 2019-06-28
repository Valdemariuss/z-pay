<template>
  <div class="quick-exchange-list" :class="{ _modal: modal, _get: mode === 'get'}" @click="modalOpen">
    <div class="quick-exchange-list__box">
      <div class="quick-exchange-list__thead">
        <div class="quick-exchange-list__cell">
          <span v-if="modal" class="quick-exchange-list__close" @click="modalClose">X</span>
          <h3 class="quick-exchange-list__hd">{{ hd }}</h3>
        </div>
        <template v-if="mode === 'get'">
          <div class="quick-exchange-list__cell">RATE</div>
          <div class="quick-exchange-list__cell">RESERVE</div>
        </template>
      </div>
      <div
        v-for="currencie in items"
        :key="currencie.id"
        :class="{ _active: (currencie.id === currItem)}"
        class="quick-exchange-list__item"
        @click="$emit('on-set-item', currencie.id)"
      >
        <div class="quick-exchange-list__cell">
          <quick-exchange-currency :currencie="currencie" />
        </div>
        <template v-if="mode === 'get'">
          <div class="quick-exchange-list__cell"><b>{{ $parent.getRate(currencie.id) }}</b></div>
          <div class="quick-exchange-list__cell">{{ currencie.reserve }}</div>
        </template>
      </div>
    </div>
    <template v-if="mode === 'get'">
      <div class="quick-exchange-list-mob-curr">
        <div class="quick-exchange-list-mob-curr__item">
          <span>Rate</span>{{ $parent.getRate(currItem) }}
        </div>
        <div class="quick-exchange-list-mob-curr__item">
          <span>Reserve</span>{{ $parent.getReserve() }}
        </div>
      </div>
    </template>
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
