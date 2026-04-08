<template>
  

    <div class="row">
      <div class="col-12">

        <h1>About</h1>
        <p>
          The project IVES (Interactive visualizations for recommender systems) investigates interactive visualizations for
          recommender systems that increase user trust and improve the user experience. The goal is the development
          of an interface construction kit and a design pattern
          collection for visual recommender systems.
        </p>
        <p> When designing the interface of a recommender system, interactive
          visualizations can be used to support challenges such as transparency
          and controllability, and thus increasing the user’s trust. In
          this paper, we propose a construction kit for visual recommender
          systems that can be used to construct new solutions or deconstruct
          existing approaches to identify and analyze key aspects.</p>
            <hr/>
      
        <h2>Application Scenarios</h2>
        <p>
          The construction kit can be used to (a) support the design of a new
          visual RecSys or (b) to deconstruct existing solutions that address
          RecSys issues to analyze how the building blocks were combined.
          Figure 2 shows a schematic representation of the visual RecSys
          SmallWorlds [10], in which movies can be explored and weighted
          through drag-and-drop interactions. At least one building block of
          each dimension can be assigned to the interface, and thus describes
          how different RecSys issues can be solved: (1) SmallWorlds uses Entertainment
          and Social Network data and utilizes relational context
          information. (2) To explore different results (RecSys challenge: Explorability),
          the user can explore a Node-link Diagram in the Result
          View via Zoom interaction. Position and Size can be used to compare
          the results. The user can Highlight paths in the visualization
          with a red Hue to see relations by Selecting a specific node. (3) The
          interface also supports the challenge Controllability by allowing
          the user to Weight Features by dragging a node in the form of a
          Thumbnail to the left or right. In this case the interface can also be
          assigned to a Control View.
        </p>
        <p>
          <a target="_blank" href="https://dl.acm.org/doi/abs/10.1145/3531073.3534484" alt="ACM Paper" title="ACM Paper">See Paper at ACM Digital Library</a>
        
        </p>
        <hr/>

      
        <h2>Kit for visual recommender systems</h2>
      
        <img src="@/assets/resources/ConstructionKitNew.png"  alt="Construction Kit" class="kit-img"/>

    
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

        <h2>References</h2>
              
          <ul>		
            <li>	 [1] Jordan Barria-Pineda and Peter Brusilovsky. 2019. Explaining Educational Recommendations through a Concept-Level Knowledge Visualization. In Proceedings of the 24th International Conference on Intelligent User Interfaces: Companion (Marina del Ray, California) (IUI ’19). Association for Computing Machinery, New York, NY, USA, 103–104. https://doi.org/10.1145/3308557.3308690   	</li>
            <li>	  [2] Dmitry Bogdanov, Martín Haro, Ferdinand Fuhrmann, Anna Xambó, Emilia  Gómez, and Perfecto Herrera. 2013. Semantic audio content-based music recommendation  and visualization based on user preference examples. Information  Processing & Management 49, 1 (2013), 13–33. https://doi.org/10.1016/j.ipm.2012.  06.004  	</li>
            <li>	  [3] Veronika Bogina, Julia Sheidin, Tsvi Kuflik, and Shlomo Berkovsky. 2020. Visualizing  Program Genres’ Temporal-Based Similarity in Linear TV Recommendations.  Association for Computing Machinery, New York, NY, USA. https:  //doi.org/10.1145/3399715.3399813  	</li>
            <li>	  [4] Lawrence Bunnell, Kweku-Muata Osei-Bryson, and Victoria Y. Yoon. 2020. RecSys  Issues Ontology: A Knowledge Classification of Issues for Recommender Systems  Researchers. Information Systems Frontiers 22, 6 (2020), 1377–1418. https://doi.  org/10.1007/s10796-019-09935-9  	</li>
            <li>	  [5] He Chen, Parra Denis, and Verbert Katrien. 2016. Interactive recommender  systems: A survey of the state of the art and future research challenges and  opportunities. Expert Systems with Applications 56 (2016), 9–27. https://doi.org/  10.1016/j.eswa.2016.02.013  	</li>
            <li>	  [6] Anind K. Dey. 2001. Understanding and Using Context. Personal and Ubiquitous  Computing 5, 1 (2001), 4–7. https://doi.org/10.1007/s007790170019  	</li>
            <li>	  [7] Gerhard Fischer and Andreas C. Lemke. 1988. Construction Kits and Design  Environments: Steps Toward Human Problem-Domain Communication. SIGCHI  Bull. 20, 1 (July 1988).  	</li>
            <li>	  [8] Gerhard Friedrich and Markus Zanker. 2011. A Taxonomy for Generating  Explanations in Recommender Systems. AI Magazine 32 (09 2011), 90–98.  https://doi.org/10.1609/aimag.v32i3.2365  	</li>
            <li>	  [9] Emden Gansner, Yifan Hu, Stephen Kobourov, and Chris Volinsky. 2009. Putting  Recommendations on the Map: Visualizing Clusters and Relations. In Proceedings  of the Third ACM Conference on Recommender Systems (New York, New York,  USA) (RecSys ’09). Association for Computing Machinery, New York, NY, USA,  345–348. https://doi.org/10.1145/1639714.1639784  	</li>
            <li>	  [10] Brynjar Gretarsson, John O’Donovan, Svetlin Bostandjiev, Christopher Hall,  and Tobias Höllerer. 2010. Smallworlds: visualizing social recommendations. In  Computer graphics forum, Vol. 29. Wiley Online Library, 833–842.  	</li>
            <li>	  [11] Marius Hogräfer, Magnus Heitzler, and Hans-Jörg Schulz. 2020. The State of the  Art in Map-Like Visualization. Computer Graphics Forum 39 (2020).  	</li>
            <li>	  [12] Yucheng Jin, Karsten Seipp, Erik Duval, and Katrien Verbert. 2016. Go With the  Flow: Effects of Transparency and User Control on Targeted Advertising Using  Flow Charts. In Proceedings of the International Working Conference on Advanced  Visual Interfaces (Bari, Italy) (AVI ’16). Association for Computing Machinery,  New York, NY, USA, 68–75. https://doi.org/10.1145/2909132.2909269  	</li>
            <li>	  [13] Mandy Keck and Rainer Groh. 2019. A Construction Kit for Visual Exploration  Interfaces. 79–83. https://doi.org/10.2312/EVS.20191174  	</li>
            <li>	  [14] Johannes Kunkel, Benedikt Loepp, and Jürgen Ziegler. 2017. A 3D Item Space  Visualization for Presenting and Manipulating User Preferences in Collaborative  Filtering (IUI ’17). Association for Computing Machinery, New York, NY, USA,  3–15. https://doi.org/10.1145/3025171.3025189  	</li>
            <li>	  [15] Eric Languénou, Pascale Kuntz, and Nicolas Greffard. 2015. Music archipelago, a  facet-like music library comparison tool. In 2015 IEEE 9th International Conference  on Research Challenges in Information Science (RCIS). 534–535. https://doi.org/10.  1109/RCIS.2015.7128925  	</li>
            <li>	  [16] Martijn Millecamp, Nyi Nyi Htun, Cristina Conati, and Katrien Verbert. 2019.  To Explain or Not to Explain: The Effects of Personal Characteristics When  Explaining Music Recommendations. In Proceedings of the 24th International  Conference on Intelligent User Interfaces (Marina del Ray, California) (IUI ’19).  Association for Computing Machinery, New York, NY, USA, 397–407. https:  //doi.org/10.1145/3301275.3302313  	</li>
            <li>	  [17] Tamara Munzner. 2014. Visualization Analysis and Design. A K Peters. http:  //www.cs.ubc.ca/%7Etmm/vadbook/  	</li>
            <li>	  [18] John O’Donovan, Barry Smyth, Brynjar Gretarsson, Svetlin Bostandjiev, and  Tobias Höllerer. 2008. PeerChooser: Visual Interactive Recommendation. In  Proceedings of the SIGCHI Conference on Human Factors in Computing Systems  (Florence, Italy) (CHI ’08). Association for Computing Machinery, New York, NY,  USA, 1085–1088. https://doi.org/10.1145/1357054.1357222  	</li>
            <li>	  [19] Deokgun Park, Steven M. Drucker, Roland Fernandez, and Niklas Elmqvist. 2018.  Atom: A Grammar for Unit Visualizations. IEEE Transactions on Visualization  and Computer Graphics 24, 12 (2018), 3032–3043. https://doi.org/10.1109/TVCG.  2017.2785807  	</li>
            <li>	  [20] Giuseppe Sansonetti. 2019. Point of Interest Recommendation Based on Social  and Linked Open Data. Personal Ubiquitous Comput. 23, 2 (apr 2019), 199–214.  https://doi.org/10.1007/s00779-019-01218-z  	</li>
            <li>	  [21] Ben Shneiderman. 2008. Extreme Visualization: Squeezing a Billion Records into  a Million Pixels. In Proceedings of the 2008 ACM SIGMOD International Conference  on Management of Data (Vancouver, Canada) (SIGMOD ’08). Association for  Computing Machinery, New York, NY, USA, 3–12. https://doi.org/10.1145/  1376616.1376618  	</li>
            <li>	  [22] Gjorgji Strezoski, Lucas Fijen, Jonathan Mitnik, Dániel László, Pieter de Marez  Oyens, Yoni Schirris, and Marcel Worring. 2020. TindART: A Personal Visual  Arts Recommender. Association for Computing Machinery, New York, NY, USA,  4524–4526. https://doi.org/10.1145/3394171.3414445  	</li>
            <li>	  [23] Katrien Verbert, Denis Parra, Peter Brusilovsky, and Erik Duval. 2013. Visualizing  Recommendations to Support Exploration, Transparency and Controllability. In  Proceedings of the 2013 International Conference on Intelligent User Interfaces (Santa  Monica, California, USA) (IUI ’13). Association for Computing Machinery, New  York, NY, USA, 351–362. https://doi.org/10.1145/2449396.2449442  	</li>
            <li>	  [24] Norha M. Villegas, Cristian Sánchez, Javier Díaz-Cely, and Gabriel Tamura. 2018.  Characterizing context-aware recommender systems: A systematic literature  review. Knowledge-Based Systems 140 (2018), 173–200. https://doi.org/10.1016/j.  knosys.2017.11.003  	</li>
            <li>	  [25] DavidWong, Siamak Faridani, Ephrat Bitton, Björn Hartmann, and Ken Goldberg.  2011. The Diversity Donut: Enabling Participant Control over the Diversity  of Recommended Responses. In CHI ’11 Extended Abstracts on Human Factors  in Computing Systems (Vancouver, BC, Canada) (CHI EA ’11). Association for  Computing Machinery, New York, NY, USA, 1471–1476. https://doi.org/10.1145/  1979742.1979793  	</li>
            <li>	  [26] Stefan Dimitri Ziaras and Wolfgang Wörndl. 2019. Strategy-Specific Preference  Elicitation for Group Recommender. In Proceedings of Mensch Und Computer 2019  (Hamburg, Germany) (MuC’19). Association for Computing Machinery, New  York, NY, USA, 531–535. https://doi.org/10.1145/3340764.3344452  	</li>
          </ul>		

  
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
