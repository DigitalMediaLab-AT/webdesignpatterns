<template>
  <div class="block-list-container">
    <div class="block-list" v-for="item in categoryItemsList[1]" 
      :key="item.description">
      <FacetItem class="try" 
        :item="item" 
        :description="item.description"
        :color="[categoryItemsList[0].color]" 
        :add-selected-facet="addSelectedFacet"
        :remove-facet="removeFacet" />
    </div>
  </div>
</template>

<script>
import FacetItem from "./FacetItem";

export default {
  name: "FacetCategory",
  components: { FacetItem },
  props: ["categoryItemsList", "addSelectedFacet", "removeFacet"],
};
</script>

<style lang="scss">
@use "../../style/mainStyles.scss" as ms;

.block-list {
  float: left;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.block-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
