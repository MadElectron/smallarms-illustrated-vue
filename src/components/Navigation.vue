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
        <form class="form-inline d-sm-inline-block navbar-search">
              <div class="input-group">
                <input id="site-search" class="form-control" type="search" placeholder="Search..." @keyup="handleChange">
              </div>
            </form>
        <div
          class="collapse navbar-collapse"
          id="navcol-1"
          style="font-family: Roboto, sans-serif"
        >
          <ul class="nav navbar-nav ml-auto">
            <li v-for="route in routes" :key="route.name" class="nav-item" role="presentation">
              <a class="nav-link" :class="isActive(route) && 'active'" :href="route.path"
                ><strong>{{route.meta.title}}</strong><br
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
      return this.$router.options.routes.filter(route => route.meta);
    },
  },
  methods: {
    isActive( route ) {
      return route.name === this.$router.currentRoute.name;
    },
    handleChange(e) {
      this.$emit('search', e)
    }
  }
}
</script>

<style>
  .nav-link {
    text-transform: uppercase; 
  }

  .input-group {
    min-width: 300px;
  }

  .input-group > .form-control {
    border-radius: 1000px;
    border-color:#ECEFF1;
    font-family: 'Roboto Condensed';
  }
</style>