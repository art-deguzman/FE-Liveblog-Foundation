<template>
    <div class="container mx-auto">  
      <div class="flex mb-4">
        <div class="w-2/3 p-4">
          <div id="live-blog">
            <fe-liveblog />
          </div>
          <div id="blog-thumbnail-view">
            <fe-liveblog-thumbnail />
          </div>  
          <hr class="clear-both mt-10 mb-10">
  
          <div id="list-post">
            <fe-list-post />
          </div>

          <hr class="clear-both mt-10 mb-10">

          <div class="post-detail">
            <fe-post-detail />
          </div>

        </div>
        <div class="w-1/3">
          <fe-sidebar-content />
        </div>
      </div>
    </div>  
  </template>
  
  
  
  <script>
    import FeLiveblog from './FeLiveblog..vue'
    import FeLiveblogThumbnail from './FeLiveblogThumbnail.vue'
    import FeListPost from './FeListPost.vue'
    import FeSidebarContent from './FeSidebarContent.vue'
    import FePostDetail from './FePostDetail.vue'
    export default {
      name: 'RtLiveblog',
      components : { FeLiveblog, FeLiveblogThumbnail, FeListPost, FeSidebarContent, FePostDetail }
    }
  </script>
  
  