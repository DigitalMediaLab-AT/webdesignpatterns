<template>
  <div class="row">
    <div class="blocks col-sm-5">
      <FacetedSelection :facets="facets" :remove-facet="removeFacet" />
      <FacetedNavigation :facets="facets" :add-selected-facet="addSelectedFacet" :remove-facet="removeFacet" />
    </div>
    <div class="col-sm-7">    
      <DetailContainer :patterns="patterns" />      
    </div>
  </div>

</template>


<script>
import DetailContainer from "../components/detailView/DetailContainer";
import _ from "lodash";
import FacetedNavigation from "../components/facetNavigation/FacetedNavigation";
import FacetedSelection from "../components/facetNavigation/FacetedSelection";

export default {
  name: "BaseView",
  components: { FacetedNavigation, FacetedSelection, DetailContainer  },
  data() {
    let facetsConf = {
      selected: [],
      HOWList: [
        {
          name: "HOW",
          color: "color-HOW",
          description: " does the design pattern function in practice? (interaction behavior and operational mechanisms)"
        },
        this.$blockService.convertListForNavigation(
          this.$blockService.getAllFacetOfGroup("HOW")
        ),
      ],
      WHYList: [
        {
          name: "WHY",
          color: "color-WHY",
          description: "is this design pattern useful for the end user? (user benefits)"
        },
        this.$blockService.convertListForNavigation(
          this.$blockService.getAllFacetOfGroup("WHY")
        ),
      ],
      WHATList: [
        {
          name: "WHAT",
          color: "color-WHAT",
          description: "is the type of pattern? (functionality)"
        },
        this.$blockService.convertListForNavigation(
          this.$blockService.getAllFacetOfGroup("WHAT")
        ),
      ],
    };
    return {
      facets: facetsConf,
      patterns: this.$patternService.getFilteredPatterns(
        facetsConf.selected
      ),
    };
  },
  methods: {
    addSelectedFacet(facet) {
      this.facets.selected.push(facet);
      this.patterns = this.$patternService.getFilteredPatterns(
        this.facets.selected
      );
      this.calculatePossibleNumbers();
    },
    removeFacet(facet) {
      _.remove(this.facets.selected, (fa) => fa.uid === facet.uid);
      this.patterns = this.$patternService.getFilteredPatterns(
        this.facets.selected
      );
      this.calculatePossibleNumbers();
    },
    calculatePossibleNumbers() {
      this.facets.HOWList[1].forEach((element) => {
        let previewSelected = this.facets.selected.concat([element]);
        element.possibleNumberPatterns =
          this.$patternService.getFilteredPatterns2(
            previewSelected, this.facets.selected
          ).length;
      });

      this.facets.WHATList[1].forEach((element) => {
        let previewSelected = this.facets.selected.concat([element]);
        element.possibleNumberPatterns =
          this.$patternService.getFilteredPatterns2(
            previewSelected, this.facets.selected
          ).length;
      });

      this.facets.WHYList[1].forEach((element) => {
        let previewSelected = this.facets.selected.concat([element]);
        element.possibleNumberPatterns =
          this.$patternService.getFilteredPatterns2(
            previewSelected, this.facets.selected
          ).length;
      });
    },
  },
  beforeMount() {
    this.calculatePossibleNumbers();
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
