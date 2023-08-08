<template>
    <div class="float-right">
        <span class="font-semibold">Sort by: </span>
        <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Latest
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Oldest
            </button>
        </div>
    </div>

    <div class="show-list-post clear-both mt-4 mb-4">
        <!-- <div class="blog-thumnbnail-wrapper flex" v-for="item in list" :key="item.id"> -->
        <div class="flex" v-for="item in list" :key="item.id">
            <div v-for="d in item.result">
                <p>{{ d.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'    
    import axios from "axios"
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
        async mounted() {
            let result = await axios.get("https://run.mocky.io/v3/673eb8d3-fdf4-4a1e-abac-a86362b5eb1f")
            console.warn(result.data)
            this.list = result.data
        }
    }
</script>

