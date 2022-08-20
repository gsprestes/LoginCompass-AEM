<template>
  <button :style="{'background': backgroundButton}" :class="classButton" v-on:click="clickButton">{{ textButton }}</button>
</template>

<script>

export default {
  name: 'ButtonComponent',
  props: {
    textButton: {
      type: String,
      default: 'Continuar'
    },
    classButton: {
      type: String
    },

    clickButton: {
      type: String,
      default: ''
    },
    backgroundButton: {
      type: String,
      default: 'linear-gradient(90deg, #FF2D04 0%, #C13216 100%);'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './ButtonComponent.scss';
</style>
