 
<template>
  
  <td class="align-middle">
    <span v-if="isPatternInBlock()">x</span>
    <!-- <span v-else>o</span> -->

  </td>
</template>
  
<script>


export default {
  name: 'BodyHelper',
  components: {   },
  props: ['pattern', 'block'],
  
  methods: {
    isPatternInBlock(){
      return this.pattern.blocks.includes(this.block.uid);
    }
  },
  created () {
  },
}
</script>
 
<style lang="scss" scoped>

</style>
  