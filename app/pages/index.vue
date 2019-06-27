<template>
  <div class="container">
    <svg-gradients />
    <quick-exchange />
  </div>
</template>

<script>
import QuickExchange from '~/components/quick-exchange/QuickExchange.vue'
import SvgGradients from '~/components/SvgGradients.vue'

export default {
  components: {
    QuickExchange,
    SvgGradients
  }
}
</script>
