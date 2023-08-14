<template>
    <div class="show-list-post clear-both mt-4 mb-4">
          <div class="blog-thumbnail-wrapper flex mb-5" v-for="item in list.data">
            <div class="timestamp-detail flex-none w-30 w-1/6 p-4">
                <p><strong>{{ getHumanDate(item.created_at) }}</strong></p>
                <p><small>{{ getHours(item.created_at) }}</small></p>
                <button class="mt-4 border-r8 p-4 bg-slate-100" type="button">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                    </svg>
                </button>
            </div>
            <div class="blog-thumbnail rounded-md w-5/6 p-4" :data-label="item.label">
                <h4>{{ item.media.name }}</h4>
                <p>{{  item.title }}</p>
                <figure>
                    <img :src="item.media.url" class="w-full" :alt="item.media.name">
                    <figcaption>{{ item.title }}</figcaption>
                </figure>
                <p><small>{{ item.media.name }}</small></p>
                  <span class="pinned-post" :data-pinned="item.pinned"><a href="#"><i class="fa fa-thumb-tack"></i> Pinned</a></span>
                  <span class="other-label">Breaking</span>
                <share-icons /> 

                <div class="content-blocks clear-both" v-for="cb in item.contentBlocks" :key="cb.id">
                  <div class="content-blocks-list"
                    :data-id="cb.id"
                    :data-type="cb.type"
                    :data-created-date="cb.created_at"
                    :data-updated-date="cb.updated_at"
                  >
                  <div class="clear-both p-4">
                    <h5>{{ cb.content.name }}</h5>
                    
                    <div class="content-detail mb-4" v-if="cb.type == 'image'">
                      <a :href="cb.content.url"><img :src="cb.content.url" :alt="cb.content.name"></a>
                    </div>
                    
                    <div class="content-details mb-4" v-if="cb.type == 'poll'">
                      <h5>{{ cb.content.title }}</h5>
                      <ul>
                        <li v-for="answer in cb.content.answers">
                          <input type="radio" :id="answer.id" name="content-poll">
                          <label :for="answer.id">{{ answer.answer }}</label>
                        </li>
                      </ul>
                    </div>

                    <div class="content-details mb-4" v-if="cb.type == 'editor'">
                      {{ cb.content }}
                      <div v-if="editor">
                        <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                          bold
                        </button>
                        <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                          italic
                        </button>
                        <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                          strike
                        </button>
                        <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
                          code
                        </button>
                      </div>
                      <editor-content :editor="editor" />




                    </div>

                    <div class="content-details mb-4" v-if="cb.type == 'embed'">
                      {{ cb.content }}
                    </div>

                    <div class="content-details mb-4" v-if="cb.type == 'linked-embed'">
                      <ul>
                        <li class="block">Website: </li>
                        <li class="block">Picture: </li>
                        <li class="block">Title: </li>
                        <li class="block">Description: </li>
                        <li class="block">Link: </li>
                      </ul>
                    </div>

                  </div>

                  </div>
                </div>               
            </div>
        </div>
        
        <!-- <div class="container flex mx-auto p-6">
          <div class="pagination-info basis-2/4">
            <p>Showing <strong>{{ list.meta.current_page }}</strong> to <strong>{{ list.meta.to }}</strong> of <strong>{{ list.meta.total }}</strong> results</p>
          </div>
          <div class="pagination-links basis-2/4">
            <a :href="list.links.first" title="First">&laquo;</a>
            <a href="list.meta.links['0'].url" :title="list.meta.links['0'].label">Previous</a>
            <a href="#" >1</a>
            <a href="#" class="active">2</a>
            <a href="#" >3</a>
            <a href="list.meta.links['2'].url" :title="list.meta.links['2'].label">Next</a>
            <a :href="list.links.last" title="Last">&raquo;</a>
          </div>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import ShareIcons from './ShareIcons.vue'


import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
export default {
  name: 'IteratePost',
  el: 'body',
  components: { ShareIcons, EditorContent },
  data(){
      return { 
          list: [],
          editor: null 
      }
  },
  props: {
    data: Object
  },
  methods: {
    getHumanDate: function (date) {
        return(moment(date, 'YYYYMMDD').from())
    },
    getHours: function (date) {
        return (moment().format('h:mm a'))
    }
  },  
  async mounted() {
      let result = await axios.get("https://run.mocky.io/v3/673eb8d3-fdf4-4a1e-abac-a86362b5eb1f")
      // console.warn(result.data)
      this.list = result.data


      let wysiwigData = this.list.data

      // console.log(wysiwigData)

      let w = []
      
      for (let key in wysiwigData){
        let wd = wysiwigData[key].contentBlocks
        for(let k in wd){
          return wd[k].content   
        }
      }

      console.log(wd[k].content)

      this.editor = new Editor({
        extensions: [
          StarterKit
        ],
        // content: w
        content: `
          Editor Box here...
        `
      })
  },
  beforeUnmount(){
    this.editor.destroy()
  }
  /*
  mounted: function(){
        // Globals
      let isFetching = false;
      let currentPage = 1;
      let currentCol = 1;

      const gridColumnCount = 4;
      const imgContainer = document.getElementById("images-container");
      const loader = document.getElementById("loader");

      // Functions
      const fetchImages = async () => {
        loader.classList.add("show");
        isFetching = true;
        const response = await fetch(
          `https://picsum.photos/v2/list?limit=12&page=${currentPage}`
        );
        const images = await response.json();
        updateDom(images);
        currentPage++;
        isFetching = false;
        loader.classList.remove("show");
      };

      const genRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      };

      const updateDom = (images) => {
        images.forEach((img) => {
          const imageContainer = document.createElement("div");
          imageContainer.classList.add("image-wrapper");
          imageContainer.classList.add("loading");

          imageContainer.innerHTML = `
              <img 
                  alt="a random image by picsum.photos" 
                  src="${img.download_url}"
                  style="max-height:${genRandomInt(
                    200,
                    350
                  )}px;height: 100%;display: block;"
                  class="loading"
              />`;

          if (currentCol === 5) {
            currentCol = 1;
          }

          imgContainer
            .querySelector(`.col:nth-child(${currentCol})`)
            .appendChild(imageContainer);

          currentCol++;
          
          setTimeout(() => {
            imageContainer.classList.remove('loading');
          }, 500);
        });
      };

      // // Event Listeners & triggers

      // document.addEventListener("DOMContentLoaded", async () => {
      //   await fetchImages();
      // });

      window.addEventListener("scroll", async () => {
        // Do not run if currently fetching
        if (isFetching) return;

        // Scrolled to bottom
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          await fetchImages();
        }
      });
  }*/
}

</script>

<style lang="scss">
  .pagination-links {
    a {
      text-decoration: none;
      padding: 0 0.6rem; 
      cursor: pointer;  
      display: inline-block;
    }
    a.active {
      color: white;
      background-color: var(--rt-text-blue-dark-color);
    }
  }
  .content-blocks-list {
    & > div {
      padding-bottom : 20px;        
     }
    h5 {
      font-weight: bold;
      margin-bottom: 0.8rem;
    }
    input[type=radio] {
      margin-right: 0.4rem;
    }
    .block-heading {
      text-transform: uppercase;
    }
  }
</style>