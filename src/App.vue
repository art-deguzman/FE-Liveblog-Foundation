<template>
  <HeaderContent />
  <rt-liveblog ref="rtLiveblog" />  
</template>


<script>
  import HeaderContent from './components/HeaderContent.vue'
  import RtLiveblog from './components/RtLiveblog.vue'
  export default {
    name: 'App',
    components : { HeaderContent, RtLiveblog },
    mounted() { 

      console.log(this.$options.components['RtLiveblog'].name)
    }
  }
</script>

