<template>
      <nav
      class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar"
    >
      <div class="container-fluid">
        <a
          class="navbar-brand text-uppercase logo"
          href="#"
          style="font-family: Roboto Condensed, sans-serif"
          ><strong>Small arms illustrated</strong></a
        >
        <div
          class="collapse navbar-collapse"
          id="navcol-1"
          style="font-family: Roboto, sans-serif"
        >
          <ul class="nav navbar-nav ml-auto">
            <li v-for="route in routes" :key="route.name" class="nav-item" role="presentation">
              <a class="nav-link" :class="isActive(route) && 'active'" :href="route.path"
                ><strong>{{route.label}}</strong><br
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    isActive( route ) {
      return route.name === this.$router.currentRoute.name;
    }
  }
}
</script>

<style>
  .nav-link {
    text-transform: uppercase; 
  }
</style>