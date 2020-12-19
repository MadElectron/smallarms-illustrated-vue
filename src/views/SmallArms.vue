<template>
  <div class="container">
    <h3>{{ section }}</h3>
    <table>
      <tbody>
        <template v-for="(countryData, countryName) in data">
          <tr v-for="(d, index) in countryData" :key="`${countryName}${index}`">
            <td v-if="!index" :rowspan="countryData.length">{{countryName}}</td>
            <td>
              <p v-for="(item, itemIndex) in d.items" :key="`item${itemIndex}`">{{item}}</p>
            </td>
            <td><a :href="d.pic" target="_blank">Image</a></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "SmallArms",
  props: {
    data: Object
  },
  computed: {
    section() {
      return this.$route.meta.title;
    },

  },
}
</script>

<style>
  td {
    padding: 1em 2ch;
    border: 1px solid #ECEFF1;
    vertical-align: top;
  }

  td p {
    margin-bottom: 0.5rem;
  }
</style>
