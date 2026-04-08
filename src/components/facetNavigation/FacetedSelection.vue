<template>


    <div id="selected-block-list" class="row">
     
      <!--selected batches-->
      <span class="col col-lg-9">
        <span v-for="item in facets.selected" :key="item.description"  
          :class="getFormatedColorFromItem(item)" class="my-badge badge badge-dark" @click="deselectFacets()"> 
          {{item.name}}
          <i class="bi bi-x" style="color:white; "></i>
        </span>
      </span>

      <!--deselect btn-->
      <!-- <div class="col col-lg-3">
        <button type="button" class="btn btn-primary" @click="deselectFacets()">All</button>
      </div> -->
    </div>

</template>

<script>

import "../../style/mainStyles.scss";

export default {
  name: "FacetedSelection",
  components: {  },
  props: ["facets", "removeFacet"],
  methods: {
    toggleSelection() {
      this.$props.item.chosen = !this.$props.item.chosen;
      if (this.$props.item.chosen) {
        this.$props.addSelectedFacet(this.$props.item);
      } else {
        this.$props.removeFacet(this.$props.item);
      }
    },
    deselectFacets: function () {
      this.$props.facets.HOWList[1].forEach((element) => {
        element.chosen = false;
        this.$props.removeFacet(element);
      });
      this.$props.facets.WHYList[1].forEach((element) => {
        element.chosen = false;
        this.$props.removeFacet(element);
      });
      this.$props.facets.WHATList[1].forEach((element) => {
        element.chosen = false;
        this.$props.removeFacet(element);
      });
    },
    getFormatedColorFromItem(item) {
      return 'color-'+item.facet;
    }
  },
 
};
</script>

<style lang="scss" scoped>
@use "../../style/mainStyles.scss" as ms;

#selected-block-list {
  margin-bottom:12px;
  min-height:44px;
  // padding-bottom:25px;

}
.my-badge 
{
  margin-right:2px;
  margin-bottom:2px;

}


.deselect-btn {

  // z-index: 4;
  // position: absolute;
  // top: 12px;
  // right: 30px;

  &:hover {
    // box-shadow: #9f9f9f 0 10px 20px;
  }
}

</style>
