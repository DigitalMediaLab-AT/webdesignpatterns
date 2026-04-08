<template>



  <div class="container-fluid" id="base">
    
      <div id="header" class="text-center">
        <div class="header-title">
          <h1>Web Design Patterns</h1>
          <p class="subtitle">An Exploration Tool to find and analyse Web Design Patterns</p>
        </div>
        <nav id="nav-menu" class="nav justify-content-center">
          <a class="nav-link" href="#/">Browse</a>
          <a class="nav-link" href="#/analyze">Analyze</a>
          <a class="nav-link" href="#/about">About</a>
        </nav>
      </div>

    <div class="main">
       <component :is="currentView" />
    </div>
   </div>

   <div id="footer" class="d-flex align-items-center justify-content-center">
      <!-- Copyright -->
      <div class="text-center p-3" style="color:white;">
        © 2023 IVES Project Team
      </div>
      <!-- Copyright -->

      <div class="row">
        <div class="col"><a href="#/terms"> Terms & Conditions</a></div>
      </div>
   </div>

   
</template>



<script>
import BaseView from './components/BaseView.vue'
import AnalyzePage from './components/AnalyzePage.vue'
import HeatmapVueSystem from './components/HeatmapVue.vue'

import AboutPage from './components/AboutPage.vue'
import NotFound from './components/NotFound.vue'
import SearchView from './components/helpers/SearchView.vue'
import TermsAndConditions from './components/TermsAndConditions.vue'

const routes = {
  '/': BaseView,
  '/analyze': AnalyzePage,
  '/heatmapsystem': HeatmapVueSystem,
  '/about': AboutPage,
  '/terms' : TermsAndConditions
}

export default {
  name: 'App',
  components: {
    BaseView, AnalyzePage, AboutPage, NotFound, TermsAndConditions, SearchView, HeatmapVueSystem
  },
   data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    document.title = "IVES Project";
    window.addEventListener('hashchange', () => { this.currentPath = window.location.hash })
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

</style>

<style lang="scss" src="./style/mainStyles.scss"></style>
<style lang="scss" src="./assets/resources/font/fonts.scss"></style><!--font lokal einbinden-->

<style>
.container-fluid {
  max-width: 1275px;
}
html {
  overflow: auto;
}
* {
  font-family: 'Outfit', sans-serif; 
}
#logo img {
   display: none;
}
#header {
  height: auto;
  padding: 1.2rem 0 0.5rem;
  margin-bottom: 1rem;
}
#header .header-title {
  margin-bottom: 0.6rem;
}
#header h1 {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
}
#header .subtitle {
  margin: 0.35rem auto 0;
  font-size: 1rem;
  color: #5f6d7a;
}
#nav-menu {
  margin-top: 0.75rem;
}
#nav-menu .nav-link {
  padding: 0.45rem 0.85rem;
  margin: 0 0.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
#footer {
  margin-top:2vh;
  height: 9rem;
  background-color: black;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
 
}
#footer .row div {
  color:white;
}
#base {
  display: flex;
  min-height: 84vh;
  flex-direction: column;
  justify-content: start;
}
nav a:active, nav a:focus, nav a:hover {
    border-bottom: 2px solid black;
}
nav a:focus, nav a.router-link-active, nav a.router-link-exact-active {
    cursor: pointer;
    color: black!important;
}

#nav-menu {
  font-weight:600;
}
#nav-menu a:hover,
#nav-menu a:active
 {
border-bottom: 2px solid #20c997;
}
#nav-menu a:focus {
  border-bottom: 2px solid #20c997;

}
#nav-menu a:focus,
 nav a.router-link-active,
 nav a.router-link-exact-active {
   cursor: pointer;
   color: #20c997!important;

 }

#nav-menu a {
  color: black;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}



#nav-menu .dot {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

#nav-menu a:nth-child(1):hover ~ .dot {
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

#nav-menu a:nth-child(2):hover ~ .dot {
  -webkit-transform: translateX(110px);
  transform: translateX(110px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

</style>


