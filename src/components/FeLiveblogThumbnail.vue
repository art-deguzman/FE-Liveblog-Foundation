<template>
    <div class="float-right sort-container">
        <span class="font-semibold">Sort by: </span>
        <div class="inline-flex shadow-sm" role="group">
            <button type="button" class="selected px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Latest
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Oldest
            </button>
        </div>
    </div>

    <div class="show-live-blog-item clear-both mt-4 mb-4">
        <div class="blog-thumnbnail-wrapper flex" v-for="item in list" :key="item.id">
            <input type="hidden"
                class="invisible hidden"
                :data-id="item.id"
                :data-created-date="getTimeDate(item.created_at)"
                :data-updated-date="getTimeDate(item.updated_at)"                
            />
            <div class="timestamp-detail flex-none w-30 w-1/6 p-4">
                <p><strong>{{ getHumanDate(item.published_at) }}</strong></p>
                <p><small>{{ getHours(item.published_at) }}</small></p>
                <button class="mt-4 border-r8 p-4 bg-slate-100" type="button"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
              </svg></button>
            </div>
            <div class="blog-thumbnail rounded-md w-5/6 p-4">
                <h4>{{ item.media.name }}</h4>
                <p>{{  item.title }}</p>
                <figure>
                    <img :src="item.media.url" :alt="item.media.name" class="w-full">
                    <figcaption>{{ item.title }}</figcaption>
                </figure>
                <div class="summary-content" v-for="d in item.summary" :key="d.id">
                    <p><small>{{ d.title }}</small></p>
                    <span class="pinned-post" :data-pinned="d.pinned"><a href="#"><i class="fa fa-thumb-tack"></i> Pinned</a></span>
                </div>
                <ShareIcons />
            </div>            
        </div>        
    </div>
</template>

<script>
    import moment from 'moment'    
    import axios from "axios"
    import ShareIcons from './ShareIcons.vue'

    export default {
        data(){
            return { 
                list: [],
            }
        },
        methods: {
            getHumanDate: function (date) {
                return(moment(date, 'YYYYMMDD').from())
            },
            getHours: function (date) {
                return (moment().format('h:mm a'))
            },
            getTimeDate: function(date){
                return (moment().format('YYYY-MM-DD hh:mm:ss a'))
            }            
        },
        name: 'LiveBlog',
        components: { ShareIcons },
        async mounted() {
            let result = await axios.get("https://run.mocky.io/v3/bd847ea3-090e-4c3a-b0b0-90bdfecd62e1")
            // console.warn(result.data)
            this.list = result.data
        }
    }
</script>