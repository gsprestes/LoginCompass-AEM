<template>
  <div id="titles">
      <h1 :style="{'font-family': titleFont}" class="classTitle1" v-if="type === 'h1'"> {{ titleMsg }}</h1>
      <h2 :style="{'font-family': titleFont}" class="classTitle2" v-else-if="type === 'h2'"> {{ titleMsg }} </h2>
      <h3 :style="{'font-family': titleFont}" class="classTitle3" v-else-if="type === 'h3'"> {{ titleMsg }} </h3>
      <h4 :style="{'font-family': titleFont}" class="classTitle4" v-else-if="type === 'h4'"> {{ titleMsg }} </h4>
      <h5 :style="{'font-family': titleFont}" class="classTitle5" v-else-if="type === 'h5'"> {{ titleMsg }} </h5>
      <h6 :style="{'font-family': titleFont}" class="classTitle6" v-else-if="type === 'h6'"> {{ titleMsg }} </h6>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    type: {
      type: String,
      require: true
    },
    nameClass: {
      type: String
    },
    titleMsg: {
      type: String,
      default: 'null'
    },
    titleFont: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import './TitleComponent.scss';
</style>
