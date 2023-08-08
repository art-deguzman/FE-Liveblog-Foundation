<template>
    <p class="font-bold mb-4 text-green text-xl">Pagina titel hier <span class="text-red">Live<sup>&#9679;</sup></span></p>
    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibilum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
    <div class="show-live-blog rounded-lg pt-4 pb-4 mt-4 mb-4">
        <h3 class="text-xl font-bold text-darkblue pl-4 pr-4">Tranfer Centre LIVE!</h3>
        <ul>
            <li v-for="item in list" :key="item.id">
                <a :href="item.media.url" class="block font-normal">
                    <p v-for="sum in item.summary">{{ sum.title }}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return {
                list: []
            }
        },
        name: 'LiveBlog',
        async mounted() {
            let result = await axios.get("https://run.mocky.io/v3/bd847ea3-090e-4c3a-b0b0-90bdfecd62e1")
            // console.warn(result.data)
            this.list = result.data
        }
    }
</script>