<template>
  <div>
    <div class="card">
      <h2>Solar System Planets Moons and Astroids</h2>
      {{ message }}
      <ul>
        <li v-for="edge in $static.planetoid.edges" :key="edge.node.id">{{ edge.node.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      message: "Try change me!",
    };
  },
  methods: {
    onClick() {
      this.message = "Here you go :)";
    },
  },
};
</script>

<static-query>
 query {
    planetoid: allPlanets (filter: { planet: { eq: true }}) {
      edges {
        node {
          id
          name
          planet
          radius
        }
      }
      totalCount
    }
  }
</static-query>

<style>
.card {
  padding: 20px;
  background: whitesmoke;
  border: 2px dashed #fecd43;
}
</style>