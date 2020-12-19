<template>
  <div class="container">
    <h3>{{ section }}</h3>
    <template v-for="(subsectionData, subsectionName) in data">
      <h4 :key="`title_${subsectionName}`">{{subsectionName}}</h4>
      <table :key="subsectionName">
        <tbody>
            <tr v-for="(d, index) in subsectionData" :key="`${subsectionName}${index}`">
              <td>
                <p v-for="(item, itemIndex) in d.items" :key="`item${itemIndex}`">{{item}}</p>
              </td>
              <td><a :href="d.pic" target="_blank">Image</a></td>
            </tr>
        </tbody>
      </table>
    </template>
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

  h4 {
    padding-top: 1.5rem;
  }

  table {
    width: 100%;
    table-layout: fixed;
  }

  td:last-child {
    width: 10%;
  }
</style>
