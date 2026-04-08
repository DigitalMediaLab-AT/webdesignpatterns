<template>
  

    <div class="row">
      <div class="col-12">

        <h1>About</h1>
        <p>
          ...
        </p>
  
            <hr/>
      
        

        <h2>Description of building blocks</h2>

        <div class="row">
          <div class="col-12">
            <table class="table table-hover table-sm" id="analyze-table">
              <tbody>
                <tr v-for="block in blocks" :key="block.uid">
                  <th  :class="['color-' + block.facet]"> 
                    <div class="block-img">
                    
                      <img :src="getImgSrc(block.imageName)" alt="block" />
                    </div>
                 
                  </th>
                  <th scope="row"  >
                    <span style="{ color: white!important; }">{{ block.name }}</span>                  
                  </th>
                  <td scope="row">{{ block.description }}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

       

  
      </div>
    </div>
</template>

<script>
export default {
  name: "AboutPage",
  components: {
    },
  data() {
    return {
      blocks:  this.$blockService.getAllBlocks()
    };
  },
  computed: {
  
  }, 
  methods: {
    getImgSrc(src){
      try{ 
        return require(`@/assets/resources/${src}.png`)
      }catch(_){
        console.error('Img at path '+src+' was not found');
        return require('@/assets/resources/patterns/dummy.png');
      }
    },
  }
}

</script>

<style scoped lang="scss">
 

#app {
  font-family: Avenir, Calibri, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 20px;
}

.flexItem {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wrapper {
  margin-bottom: 20px;
}



</style>
