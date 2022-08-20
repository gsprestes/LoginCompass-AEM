<template>
  <p :style="{'font-family': fontFamily}" :class="className">{{ textMsg }}</p>
</template>

<script>
export default {
    name: "TextComponent",
    props: {
        textMsg: {
            type: String,
            default: ""
        },
        className: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import './TextComponent.scss';
</style>
