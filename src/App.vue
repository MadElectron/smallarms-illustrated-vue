<template>
  <div id="app">
    <navigation @search="handleSearch" />

    <div id="wrapper">
      <router-view :data="data" />
    </div>
    <footer class="page-footer dark fixed-bottom">
        <div class="footer-copyright">
            <p>All content grabbed from Small Arms Illustrated</p>
        </div>
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import DATA from './data.json';
import _ from 'lodash';

export default {
  components: {
    Navigation,
  },
  data() {
     return {
       data: DATA[ this.$route.meta.title ]
     }
  },
  methods: {
    handleSearch(e) {
      const query = e.target.value;

      this.data = _.fromPairs(
        _.toPairs( DATA[ this.$route.meta.title ] )
          .map(([country, cData]) => [country, cData.filter(cd => cd.items.join(',').toLowerCase().includes(query))])
          .filter(([, cData]) => cData.length)
        );
    }
  }
}
</script>
<style>
  @import "/assets/bootstrap/css/bootstrap.min.css";
  @import "https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i";
  @import "https://fonts.googleapis.com/css?family=Roboto";
  @import "https://fonts.googleapis.com/css2?family=Roboto+Condensed";
  @import "/assets/fonts/simple-line-icons.min.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css";
  @import "/assets/css/smoothproducts.css";

  #wrapper {
    padding-top: 90px;
    padding-bottom: 150px;
  }
</style>
