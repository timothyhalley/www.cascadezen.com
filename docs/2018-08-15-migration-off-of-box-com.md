---
type: project
title: Migration off of BOX.com for GDPR
path: /migration-off-box.com
date: 2018-08-15
summary: Due to GDPR and security concerns with BOX, the mother company demanded our LoB to cease or face fines. Using the BOX API service, I was able to create a scalable process to move all company data successfully from box.com to Microsoft's O365 onedrive.com solution.
tags: ['GDPR', 'coding', 'security', 'API']
---

![background](../static/zenHeavyBox.svg)

> BOX.com - a storage cloud service had several significant concerns about compliance and security. To achieve GDPR mandate and compliance, many of the files in box contained sensitive information that needed to be properly secured. The SaaS solution was not able to conform to these requirements in time for GDPR mandate of March 17, 2018. Secondly, the BOX platform had several security vulnerabilities due to its use dated JDK (java develop kit).

### Project goals

- **Minimize disruption to active business groups** - Partner with business groups via direct communication channels about project directives. Establish a working model and direction.
- **Design develop and deliver working solution** - I was in Germany for business when our IT directors reachout to me to solve this issue for them. I had approximately 6 weeks when I returned to complete the initial phase of the project.
- **4+ terabytes of data** - The company amassed large volumes of data stored on this service. Some was the volumn of data was corporate individuals storing critical files for preservation, sharing and backup purposes. These use cases were important to migrate their data into a personalized sharepoint while preservering access on Microsoft SharePoint.
- **Scalable Programming Model** - To effectively meet the short timeline and not disrupt individuals (minimize transition time) I had to leverage a highly scable asyncronous process to migrate files. It was important to keep this window to just a few days (weekend migration period). Use of NODEJS was important to create the necessary 
- **Vue.js for frontend** - A lightweight and approachable front-end framework.
- **Auto-optimized code** - Get code-splitting and asset optimization out-of-the-box.
- **Static files generation** - Deploy securely to any CDN or static web host.

[Learn more about how Gridsome works](/docs/how-it-works)

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```


### Prerequisites
You should have basic knowledge about HTML, CSS, [Vue.js](https://vuejs.org) and how to use the [Terminal](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/). Knowing how [Vue Single File components](https://vuejs.org/v2/guide/single-file-components.html) & [GraphQL](https://www.graphql.com/) works is a plus, but not required. Gridsome is a great way to learn both.

Gridsome requires **Node.js** and recommends **Yarn**. [How to setup](/docs/prerequisites)

![background](./images/onlyOne.jpeg)

### 1. Install Gridsome CLI tool

Using yarn:
`yarn global add @gridsome/cli`

Using npm:
`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project </li>
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 3. Next steps

1. Create `.vue` components in the `/pages` directory to create page routes.
2. Use `gridsome build` to generate static files in a `/dist` folder


- [How it works](/docs/how-it-works)
- [How Pages work](/docs/pages)
- [How to deploy](/docs/deployment)
