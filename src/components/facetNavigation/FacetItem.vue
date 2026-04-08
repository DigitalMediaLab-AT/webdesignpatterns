<template>
   

  <!--In case it is executed on Menu (FacetNavigation.vue)-->
  <div v-if="item" 
    v-bind:class="{chosen: item.chosen, disabled: item.possibleNumberPatterns === 0,}" 
    v-on:click="toggleSelection()"
    :disabled="item.possibleNumberPatterns === 0"
    class="flex">
    <div class="block-item flexItem" 
    :class="{ detailelement: detailElement}">
      <span v-if="item.possibleNumberPatterns" :class="this.$props.color[0]" class="badge badge-dark possibleNumberPatterns">{{ item.possibleNumberPatterns }}</span>

      <div class="block-div" >
        <div class="block-img"
        :class="{ detailelement: detailElement }">
          <img :src="getImgSrc(item.imageName)" alt="block" />
        </div>

        <TooltipComponent placement="bottom-end" :blockname="item.name" 
          :color="color[0]" :description="description" :disabled="item.possibleNumberPatterns === 0"/>

      </div>
    </div>
  </div>
   <!--In case it is executed on Pattern (DetailElement.vue)-->
  <div v-else>
    <div class="block-item">
      <div class="block-div">
        <div class="block-img" 
        :class="{ detailelement: detailElement }"          >
          <img :src="getImgSrc(block.imageName)"  alt="block" />
        </div>
         <!-- {{color}} -->
        <TooltipComponent placement="bottom-end" 
           :blockname="block.name" :color="getColorPattern" :description="description"/>
      </div>
    </div>
    </div>
</template>

<script>
  
import TooltipComponent from "../../components/helpers/Tooltip.vue";


export default {
  components: {
    TooltipComponent
    },
  name: "FacetItem",
  props: ["item", "addSelectedFacet", "removeFacet", "color","block","description", "detailElement"],
  methods: {
    toggleSelection() {
      if(this.$props.item.possibleNumberPatterns !== 0) { // bei Blocks mit 0 Patterns keinen Klick zulassen
        this.$props.item.chosen = !this.$props.item.chosen;
        if (this.$props.item.chosen) { 
          this.$props.addSelectedFacet(this.$props.item); 
        } else {
          this.$props.removeFacet(this.$props.item);
        }
      }
    },
    getImgSrc(src){
      try{ 
        return require(`@/assets/resources/${src}.png`)
      }catch(_){
        console.error('Img at path '+src+' was not found');
        return require('@/assets/resources/patterns/dummy.png');
      }
    },
    showDescr() {
      return this.$props.block.description;
    }
  }, computed: {
    
      //Returns Color From Pattern for this Block
     getColorPattern() {
      return 'color-'+this.$props.block.facet ;
    },
  }
};
</script>

<style lang="scss" scoped>
@use "../../style/mainStyles.scss" as ms;

.block-item {
  padding-bottom: 0.35rem;
  width: 140px;
  min-height: 64px;
  line-height: 1.15;
  .block-div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 0.5rem;
  }
  .possibleNumberPatterns {
    margin-left: 16px;
    position:absolute;
  }
}

.detailelement {
  width:40px!important;
  margin:0;
    padding:0;
  > img {
    width:40px;
    height:40px;
    
  }
}
.disabled {
  p {
    color: rgb(100, 100, 100);
  }

  img {
    filter: opacity(49%) hue-rotate(0deg) blur(0px) grayscale(100%);
  }
}

.chosen {
  img {
    border: 2px solid black;
    filter: opacity(100%) hue-rotate(0deg) blur(0px) grayscale(0%);
  }
}
</style>
