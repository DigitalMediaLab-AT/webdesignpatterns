<template>

  <div>
    <div class="card">
      
      <div class="card-header" :id="'collapse_' + pattern.uid" >
          <button type="button" class="btn btn-link header-box" :aria-controls="pattern.uid" 
              v-on:click="toggleItem(pattern)"
              data-toggle="collapse" 
              :data-target="'#' + pattern.uid" 
              aria-expanded="true">
              

              <span class="title" 
                :class="{ active: isActive(pattern) }">
                <img         
                  :src="getImgSrc( pattern.imageName)"
                  :alt="pattern.title"
                  :title="pattern.title"
                  class="vorschau-img"
                  />

                {{ pattern.title }}
              </span>
              <i 
                  :class="[isActive(pattern) ? 'bi-chevron-up': 'bi-chevron-down' ]"
                  class="bi"></i>
          </button>
      </div>

      <div :id="pattern.uid" class="collapse" :aria-labelledby="'collapse_' + pattern.uid">
        <div class="card-body">

          <!--USE WHEN-->
          <div v-if="pattern.details && pattern.details['Use when']">
            <div class="title-small">Use when</div>
            {{ pattern.details["Use when"] }}
          </div>

          <!--PROBLEM-->
          <div v-if="pattern.details && pattern.details['Problem']">
            <hr />
            <div class="title-small">Problem</div>
            {{ pattern.details["Problem"] }}
          </div>

          <!--SOLUTION-->
          <div v-if="pattern.details && pattern.details['Solution']">
            <hr />
            <div class="title-small">Solution</div>
            {{ pattern.details["Solution"] }}
          </div>

          <!--LARGE IMAGE-->
          <div v-if="pattern.imageName" class="pattern-image-container">
            <hr />
            <img
              :src="getImgSrc(pattern.imageName)"
              :alt="pattern.title"
              :title="pattern.title"
              class="pattern-large-img"
            />
          </div>

          <!--BLOCKS-->
          <div v-if="pattern.blocks && pattern.blocks.length > 0">
            <hr />
            <div class="title-small">Blocks</div>
            <div class="row">
              <ul class="why-group">
                <li>
                  <span v-for="blockUid in pattern.blocks" :key="blockUid">
                    <span v-if="getBlockByUid(blockUid)" class="block-list">
                      <span v-if="getBlockByUid(blockUid).facet==`WHY`">
                        <FacetItem 
                            :block="getBlockByUid(blockUid)"
                            :description="getBlockByUid(blockUid).description"
                            detailElement=true
                            /> 
                      </span>
                    </span>
                  </span>
                </li>
              </ul>

              <ul class="what-group">
                <li>
                  <span v-for="blockUid in pattern.blocks" :key="blockUid">
                    <span v-if="getBlockByUid(blockUid)" class="block-list">
                      <span v-if="getBlockByUid(blockUid).facet==`WHAT`">
                        <FacetItem 
                            :block="getBlockByUid(blockUid)"
                            :description="getBlockByUid(blockUid).description"
                            detailElement=true
                            /> 
                      </span>
                    </span>
                  </span>
                </li>
              </ul>

              <ul class="how-group">
                <li>
                  <span v-for="blockUid in pattern.blocks" :key="blockUid">
                    <span v-if="getBlockByUid(blockUid)" class="block-list">
                      <span v-if="getBlockByUid(blockUid).facet==`HOW`">
                        <FacetItem 
                            :block="getBlockByUid(blockUid)"
                            :description="getBlockByUid(blockUid).description"
                            detailElement=true
                            /> 
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!--RESOURCES-->
          <div v-if="pattern.resources && pattern.resources.length > 0">
            <hr />
            <div class="title-small">Resources</div>
            <ul>
              <li v-for="resource in pattern.resources" :key="resource.title">
                <a :href="resource.url" target="_blank">{{ resource.title }}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<script>
import FacetItem from "./../facetNavigation/FacetItem";

export default {
  data: () => ({
        toggled: [],
        currentblock: null
    }),
    
  name: "DetailElement",
  components: { FacetItem },
  props: ["pattern", "description", "userstudy"],
 
  methods: {
    getBlocksPerItems(item){
      let blockArray = [];
      item.blocks.forEach((block) => {
        blockArray.push(this.$patternService.getBlockByUid(block))
      });
      return blockArray;
    },
    getBlockByUid(uid) {
      let block = this.$patternService.getBlockByUid(uid);
      this.currentblock=block;
      return block;
    },
    isActive (item) {
        return this.toggled.indexOf(item) >= 0
    },
    toggleItem (item) {
      const index = this.toggled.indexOf(item);
      console.log(index);
      if (index >= 0) {
        this.toggled.splice(index, 1)
        return
      }
      this.toggled.push(item);
    },
    getImgSrc(src){
      try{ 
        return require(`@/assets/resources/patterns/${src}`)
      }catch(_){
        console.error('Img at path '+src+' was not found');
        
        return require('@/assets/resources/patterns/dummy.png');
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@use "../../style/mainStyles.scss" as ms;

.vorschau-img {
  width: 50px; 
  height: 50px; 
  object-fit: cover;
  margin-right:14px;
}
.pattern-large-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin: 10px 0;
}
.pattern-image-container {
  text-align: center;
}
.block-list {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
}
.why-group, .what-group, .how-group {
  li {
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
}
.pattern-block {
  width:85px;
}
.my-card-pattern {
  border:none;
 }
 button.btn.btn-link.header-box {
    text-align: inherit;
}
.header-box
  {
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    i {
      transition: .3s transform ease-in-out;
      align-self: center;
    }
  }
.meta-box {
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.img-element img {
  max-width: 100%;
  max-height: 100%;
}

.ressource  {
  margin-right:3px;
  > a > i {
    color:#fff;
    width: 20px;
  }
}
.active { //active accordeon tab
  color:ms.$active!important;
  color: WHITE;
  border-radius: 100%;
    

  * i {
    color:#fff !important;;
  }
}
.literature {
  font-size:10px;
}
.block-list {
  float: left;
  margin:0;
  padding:0;
}
.why-group::before {
  content: "WHY";
}
.what-group::before {
  content: "WHAT";
}
.how-group::before {
  content: "HOW";
}

ul {
  list-style: none;
}
</style>
