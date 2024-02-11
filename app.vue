<script setup lang="ts">

import frameConfig from "./frame.config.json"

const {
  data
} = useFetch("/api/test")




useHead({
  title: 'Nuxt Frame Template',
  meta: data ? [
    { name: "title", content: "myFrame" }
  ] : [],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})



</script>
<template>
  <div>
  </div>
</template>
