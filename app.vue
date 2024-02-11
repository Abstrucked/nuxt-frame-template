<script setup lang="ts">

import frameConfig from "./frame.config.json"

useHead({
  title: 'Nuxt Frame Template',
  meta: [
    { name: 'description', content: 'My amazing site.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'og:title', content: `${frameConfig.title}`},
    { name: 'og:description', content: `${frameConfig.description}`},
    { name: 'og:image', content: `${frameConfig.image}`},
    { name: 'og:url', content: `${frameConfig.url}`},
    { name: 'og:type', content: 'website'},
    { name: 'og:site_name', content: `${frameConfig.title}`}
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

const {
  data
} = useFetch("/api/test")

</script>
<template>
  <div>
    {{ data.body }}
  </div>
</template>
