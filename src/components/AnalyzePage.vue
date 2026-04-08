<template>
  <div class="row">
     <div class="col-12">
       <h1>Analyze</h1>
       <p>
        To answer the question of whether semantic relationships become visible, systems must first be classified by, creating so-called design patterns. The table shows the practical application of the construction kit by decomposing visual recommendation systems.
       </p>
       <br/>
       <div  class="table-responsive">
       <table class="table table-hover table-sm" id="analyze-table">
         <thead class="thead-dark">
           <tr >
             <th scope="col"></th>
             <th v-for="(pattern) in patterns" :key="pattern.uid" :class="pattern.uid">
                 <!-- {{pattern.title}} -->
                 {{ pattern.nr }}
             </th>
           </tr>
         </thead>
         <tbody> 
           <tr v-for="block in blocks" :key="block.uid">
             <th scope="row" style="background-color:white">
               <span class="img-block"><img :src="getImgSrc(block.imageName)" alt="block" /></span>
             
               {{ block.name }}
             </th>

             <BodyHelper
               v-for="pattern in patterns"
               :key="pattern.uid"
               :block="block"
               :pattern="pattern"
             />

          
           </tr> 
         </tbody>
       </table>

      </div>

       <h3>Legend</h3>

       <section class="legend">
          <div  v-for="(pattern) in patterns" :key="pattern.uid" :class="pattern.uid">   
             {{ pattern.nr }} {{ pattern.title }}
          </div>
       </section>
     </div>
   </div>
</template>

<script>
import BodyHelper from "../components/helpers/BodyHelper";

export default {
name: "AnalyzePage",
data() {

    return {
      html: undefined,
      blocks:  this.$blockService.getAllBlocks(),
      patterns:  this.$patternService.getAllPatterns(),
    };
    },
    components: {  BodyHelper },
    methods: {

 getImgSrc(src){
   try{ 
     return require(`@/assets/resources/${src}.png`)
   }catch(_){
     console.error('Img at path '+src+' was not found');
     return require('@/assets/resources/patterns/dummy.png');
   }
 },
 
  isBlockIncluedInPattern(block, positionnumber) {
   let pattern = null;
   let p = this.patterns.at(positionnumber).pattern;
   if(p)
     pattern = p.pattern;
   
   if(pattern!=null) {
     pattern.forEach((p) => {
       p.blocks.forEach((currentblock) => {
         if(currentblock===block.uid) {
           return "activecol";
         }
       });
     });
   }
   return "";
   },
}
,
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
  white-space:nowrap; /**kein zeilenumbruch */
  
}
td:first-child, th:first-child {
  text-align: left;
  vertical-align: left;
}
.table td, .table th {
     padding: 0.1rem;
}
</style>
