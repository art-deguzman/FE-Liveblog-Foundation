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
                <p><small>{{ item.media.name }}</small></p>
                <span class="pinned-post"><a href="#"><i class="fa fa-thumb-tack"></i> Pinned</a></span>
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
                list: []
            }
        },
        methods: {
            getHumanDate: function (date) {
                return(moment(date, 'YYYYMMDD').from())
            },
            getHours: function (date) {
                return (moment().format('h:mm a'))
            }
        },
        name: 'LiveBlog',
        components: {ShareIcons},
        async mounted() {
            let result = await axios.get("https://run.mocky.io/v3/bd847ea3-090e-4c3a-b0b0-90bdfecd62e1")
            console.warn(result.data)
            this.list = result.data
        }
    }
</script>

<style lang="scss">
.timestamp-detail {
    p {
        color: var(--rt-text-blue-dark-color);
    }
}
.blog-thumbnail {
    background-color: var(--rt-light-blue-color);
    border-top: 5px solid var(--rt-text-blue-dark-color);
    position: relative;
    z-index:0;
    position: relative;
    h4 { 
        color: var(--rt-text-blue-color);
        font-weight: 700;
        font-size: 1.2rem;
        margin-top: 16px;
        margin-bottom: 12px;
    }
    p {
        color: var(--rt-text-blue-color);
    }
    figure {
        margin-top: 12px;
        margin-bottom: 12px;
        position: relative;
        z-index: 0;
        min-height: 100px;
        max-height: 270px;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
            height: auto;
            transform: translate(0%, -24%);
            background-size: cover;
            object-fit: cover;
        }
    }
    .pinned-post {
        position: absolute;
        top: 0;
        right: 0;
        a {
            display: block;
            background-color: var(--rt-text-blue-dark-color);
            color: white;
            text-transform: uppercase;
            padding: 2px 10px 6px;
            font-size: 0.8rem;
        }
        
    }
    
}

</style>