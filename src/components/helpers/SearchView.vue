<template>
  <div class="search-bar-div">
    
            <!-- <input type="text" class="form-control" placeholder="Pattern name" aria-label="Pattern name" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Search</button>
            </div> -->
            
    <input type="text"  placeholder="Search patterns .." v-on:focus="showList()"
        />
        <!-- v-click-outside="hideList" -->
    <div v-if="listShown" class="search-list">
      <span
             v-for="pattern in patternList"
             :key="pattern.uid"
        >

        <div class="search-list-item-container">
          {{ pattern.name }}
        </div>
      </span>
      <!-- <div v-if="filteredList.length === 0">
        There are no patterns with '{{ search }}' in their names.
      </div> -->
    
      <!-- <div class="search-list-item-container" style="z-index:1; background-color:red;">
    
        {{ pattern.name }}
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "SearchBar",
  data() {
    return {
      patternList: this.$patternService.getPatternsForSearch(),
      search: "",
      listShown: false,
    };
  },
  methods: {
    showList() {
      this.listShown = true;
    },
    hideList() {
      this.listShown = false;
    },
   
  }, 
  computed: {
    filteredList() {
      return this.patternList.filter((pattern) => {
        return pattern.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
// Vue.directive("click-outside", {
//   bind(el, binding, vnode) {
//     var vm = vnode.context;
//     var callback = binding.value;

//     el.clickOutsideEvent = function (event) {
//       if (!(el === event.target || el.contains(event.target))) {
//         return callback.call(vm, event);
//       }
//     };
//     document.body.addEventListener("click", el.clickOutsideEvent);
//   },
//   unbind(el) {
//     document.body.removeEventListener("click", el.clickOutsideEvent);
//   },
// });
</script>

<style lang="scss">
// @use "../../mainStyles" as ms;

.search {
  &-bar {
    &-label {
      color: green;
    }

    &-div {
      width: 120px;
      display: flex;
      margin-top: 10px;
    }
  }

  &-input {
    font-size: large !important;
  }

  &-list {
    position: absolute;
    top: 4rem;
    max-height: 25rem;
    height: fit-content;
    background: white;
    padding: 0.5rem;
    z-index: 3;
    // width: $width;
    // margin-right: $margin-right;
    overflow-y: scroll;
    background: rgba(250, 250, 250, 0.95);
    border-left: gray solid 2px;

    &-item {
      padding: 0.5rem 0.4rem;

      &-container {
        font-size: large;
        color: black !important;

        &:hover {
          background-color: #333;
          color:white!important;
          cursor:pointer;
        }

        &-image {
          width: 4rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
