<template>
  <NoLayout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.post" :key="edge.node.id">{{ edge.node.title }}</li>
    </ul>
  </NoLayout>
</template>

<page-query>
query {
  post:allDocumentation {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>