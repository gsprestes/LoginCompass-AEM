<template>
  <p :class="className">{{ textMsg }}</p>
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
