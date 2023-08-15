<template>
    <div class="show-live-blog-item clear-both mt-4 mb-4">
        <div class="blog-thumnbnail-wrapper flex" v-for="item in list" :key="item.id">
            <div class="timestamp-detail flex-none w-30 w-1/6 p-4">
                <p><strong>{{ getHumanDate(item.created_at) }}</strong></p>
                <p><small>{{ getHours(item.created_at) }}</small></p>
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
                <span class="other-label">Breaking</span>
                <ShareIcons />
            </div>            
        </div>        
    </div>
</template>


<script>
    import axios from 'axios'
    import moment from 'moment'
    import ShareIcons from './ShareIcons.vue'

    export default {
        name: 'PostDetail',
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
            let result = await axios.get("https://run.mocky.io/v3/dac3411b-abff-4905-9ca3-e74584bea27c")
            // console.warn(result.data)
            this.list = result.data
        }
    }


</script>