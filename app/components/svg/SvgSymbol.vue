<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon">
    <use v-bind:href="url" v-bind:xlink:href="url"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgSymbol',
  props: {
    url: {
      type: String,
      default: function () {
        return ''
      }
    }
  }
}
</script>
