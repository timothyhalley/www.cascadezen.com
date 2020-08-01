<template>
  <div>
    <Layout>
      <h1 v-html="$page.global.message" />
      <div class="container-inner mx-auto py-16">
        <h2 class="text-4xl font-bold mb-16">Test Area for exploring</h2>
        <g-image src="../../static/developer.svg" alt="Test" />
      </div>
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2>{{ edge.node.title }}</h2>
      </div>
      <SolarSystem />
    </Layout>
  </div>
</template>

<script>
import SolarSystem from "~/components/SolarSystem.vue";
export default {
  components: {
    SolarSystem,
  },
  metaInfo: {
    title: "TestPage",
  },
};
</script>

<page-query>
query {
  posts: allDocumentation {
    edges {
      node {
        id
        title
      }
    }
  }
  global: metadata {
    message
  }
}

</page-query>