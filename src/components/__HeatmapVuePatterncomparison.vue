<template>
  <div class="row">

    <div class="col-12">

      <h1>Pattern</h1>

  

      <HeatmapVue/>
    </div>
  </div>

  <div class="row">
    <div class="col-12 download-section">
      
      <p>
        To answer the question of whether semantic relationships become visible, systems must first be classified by,
        creating so-called design patterns. The table shows the practical application of the construction kit by
        decomposing visual recommendation systems.
      </p>
      
      <p>Here you can download the relations between the blocks as a JSON File:</p>

      <button type="button" v-on:click="createjson()">Download</button>

      <!-- <button @click="downloadFile()">DownLoad</button> -->

</div>
</div>
</template>

<script>

export default {
name: "HeatmapVue",
data() {
      return {
        overview: [],
        nodes: [],
        links: [],
        blocks:  this.$blockService.getAllBlocks(),
        patterns:  this.$patternService.getAllPatterns(),
      };
    },
    components: {   },
    methods: {
      createjson: function () {
          let countvalue=0;
          let blocks = JSON.parse(JSON.stringify(this.blocks));
          let blocks2 = JSON.parse(JSON.stringify(blocks));
          
          blocks.forEach((block) => {
            countvalue=0;
            //write blocks
              this.nodes.push({id: block.name, group: block.facet});
            
            blocks2.shift();

            blocks2.forEach((block2) => {
              //write links between blocks
              countvalue = this.countBlockCorrelation(block, block2);
              if (countvalue!=0) //nullzeile nicht andrucken
                this.links.push({source: block.name, target: block2.name, value: countvalue});
            });
          });
          // console.log("finished writing JSON");
          this.saveFile();
      },
      saveFile: function() {
        this.overview={nodes:[], links:[]};
        this.overview.nodes=this.nodes;
        this.overview.links=this.links;

        const data = JSON.stringify(this.overview) ;
        window.localStorage.setItem('nodes', data);

        //write JSON To console
        // console.log(JSON.parse(window.localStorage.getItem('nodes')))

        // download functionality
        const blob = new Blob([data], {type: 'text/plain'})
        const e = document.createEvent('MouseEvents'),
        a = document.createElement('a');
        a.download = "ives_data.json";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
      },
      
      countBlockCorrelation: function(block, nextblock) {
        let countcorrelation = 0;

        this.patterns.forEach(singlePattern => {
          singlePattern.pattern.forEach(pattern => {
            pattern.blocks.forEach(blockInPattern => {
             //  if(blockInPattern=="B_7Diversity") { //comment in to generate the links for just one block
                if(blockInPattern==block.uid){
                  //first block is found in a pattern
          
                    //now check if second block is also included in this pattern
                    pattern.blocks.forEach(blockInPattern => {
                      if(blockInPattern==nextblock.uid) {
                        countcorrelation++;
                      }
                    });
                }
              //}
            });
          });
        });
        return countcorrelation;
      },
  },
}

</script>

<style scoped lang="scss">
.img-block {
  width:120%;
  > img {
    height:40px;
  }
}
.table thead th {
  width:5%;
  font-size:10px;
}
th {
  font-size:10px;
}
td, th {
  text-align: center;
  vertical-align: middle;
}
td:first-child, th:first-child {
  text-align: left;
  vertical-align: left;
}
.table td, .table th {
     padding: 0.1rem;
}
.download-section {
  
  margin-bottom:4rem;
}
</style>
