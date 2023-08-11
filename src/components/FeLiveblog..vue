<template>
    <p class="font-bold mb-4 text-green text-xl">Pagina titel hier <span class="text-red">Live<sup>&#9679;</sup></span></p>
    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibilum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
    <div class="show-live-blog rounded-lg pt-4 pb-4 mt-4 mb-4">
        <h3 class="text-xl font-bold text-darkblue pl-4 pr-4">Tranfer Centre LIVE!</h3>
        <ul>
            <li v-for="item in list" :key="item.id"
                :data-id="item.id"
                :data-status="item.status"   
                :data-start-date="getTimeDate(item.start_date)"
                :data-end-date="getTimeDate(item.end_date)"
                :data-published-date="getTimeDate(item.published_at)"
                :data-show-summary="item.show_summary"
                :data-created-date="getTimeDate(item.created_at)"
                :data-updated-date="getTimeDate(item.updated_at)"
            >
                <a :href="item.media.url" 
                    :data-media-id="item.media.id"
                    :data-media-name="item.media.name"
                    class="block font-normal"
                >
                    <p v-for="sum in item.summary" :key="sum.id">
                        <span :data-id="sum.id"
                            :data-published-date="sum.published_at"
                            :data-pinned="sum.pinned"
                            :data-created-date="sum.created_at"
                            :data-updated-date="sum.updated_at"
                        >{{ sum.title }}</span>
                    </p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    import moment from 'moment'
    export default {
        data(){
            return {
                list: []
            }
        },
        name: 'LiveBlog',
        methods: {
            getTimeDate: function(date){
                return (moment().format('YYYY-MM-DD hh:mm:ss a'))
            }
        },
        async mounted() {
            let result = await axios.get("https://run.mocky.io/v3/bd847ea3-090e-4c3a-b0b0-90bdfecd62e1")
            // console.warn(result.data);
            this.list = result.data
        }
    }
</script>