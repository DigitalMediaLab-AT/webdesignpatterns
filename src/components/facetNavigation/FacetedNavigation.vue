<template>
  <div class="facet-bar">

    <!-- <button type="button" class="btn btn-primary deselect-btn" @click="deselectFacets()">Deselect</button> -->

    <div class="facet-sections">
      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">
            <div class="facet-title">
              <span class="title">{{facets.WHYList[0].name}}</span>
              <br/>
              <span class="description">{{facets.WHYList[0].description}}</span>
            </div>
          </h5>
        </div>

        <div class="card-body">
          <FacetCategory
            :category-items-list="facets.WHYList"
            :add-selected-facet="addSelectedFacet"
            :remove-facet="removeFacet"
          />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">
            <div class="facet-title">
              <span class="title">{{facets.WHATList[0].name}}</span>
              <br/>
              <span class="description">{{facets.WHATList[0].description}}</span>
            </div>
          </h5>
        </div>

        <div class="card-body">
          <FacetCategory
            :category-items-list="facets.WHATList"
            :add-selected-facet="addSelectedFacet"
            :remove-facet="removeFacet"
          />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">
            <div class="facet-title">
              <span class="title">{{facets.HOWList[0].name}}</span>
              <br/>
              <span class="description">{{facets.HOWList[0].description}}</span>
            </div>
          </h5>
        </div>

        <div class="card-body">
          <FacetCategory
            :category-items-list="facets.HOWList"
            :add-selected-facet="addSelectedFacet"
            :remove-facet="removeFacet"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../../basicVueMaterialImports";
import FacetCategory from "./FacetCategory";
import "../../style/mainStyles.scss";

export default {
  name: "FacetedNavigation",
  components: { FacetCategory },
  props: ["facets", "addSelectedFacet", "removeFacet"],
  methods: {
   
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
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
@use "../../style/mainStyles.scss" as ms;

.facet-sections {
  .card {
    margin-bottom: 0.5rem;
  }
}

.facet-title {
  padding: 0.5rem 0 0.5rem 1rem;
  
  .title {
    font-weight: bold;
    font-size: 1.1rem;
    color: ms.$title-color;
  }
  
  .description {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.3;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
    display: block;
    margin-top: 0.25rem;
    white-space: normal;
    word-break: break-word;
  }
}

.card-body {
  padding: 0.1rem !important;
}

.btn {
  width: 100%;
  text-align: left;
}

// .deselect-btn {
//   z-index: 4;
//   position: absolute;
//   top: 12px;
//   right: 30px;

//   &:hover {
//     box-shadow: #9f9f9f 0 10px 20px;
//   }
// }
</style>
