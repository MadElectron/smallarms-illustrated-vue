<template>
  <div id="app">
    <navigation />
    <router-view/>
    <footer class="page-footer dark fixed-bottom">
        <div class="footer-copyright">
            <p>All content grabbed from Small Arms Illustrated</p>
        </div>
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation,
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
/* 
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
  }  */
</style>
