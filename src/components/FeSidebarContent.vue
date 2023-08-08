<template>
    <div class="content-1 p-4 mt-4 mb-4 rounded-lg">
        <p class="font-bold mb-4 text-green text-base">Pagina titel hier <span class="text-red">Live<sup>&#9679;</sup></span></p>
    </div>
    <div class="content-2 p-4 mt-4 mb-4 rounded-lg">
        <p class="font-bold mb-4 text-green text-lg">Laatste voetbal transfernieuws</p>
        <ul>
            <li class="content-feed">
                <p><small>30 minuten geleden</small></p>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus</p>
            </li>
            <li class="content-feed">
                <p><small>2 uur geleden</small></p>
                <p>Donec ullamcorper nulla non metus auctor fringilla</p>
            </li>
            <li class="content-feed">
                <p><small>8 uur geleden</small></p>
                <p>Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo</p>
            </li>
        </ul>
        <div class="widget-end">
            <hr class="widget-end">
            <p>Toon alles</p>
        </div>
    </div>
    <div class="content-3 mt-4 mb-4">
        <a href="#" target="_blank"><img src="./../assets/images/img-sidebar.png" class="w-full" alt="Sidebar content"></a>
    </div>
    <div class="content-4 p-4 mt-4 mb-4 rounded-lg">
        <p class="font-bold mb-4 text-green text-lg">Laatste voetbal transfernieuws</p>
        <ul>
            <li class="content-feed">
                <p><small>30 minuten geleden</small></p>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus</p>
            </li>
            <li class="content-feed">
                <p><small>2 uur geleden</small></p>
                <p>Donec ullamcorper nulla non metus auctor fringilla</p>
            </li>
            <li class="content-feed">
                <p><small>8 uur geleden</small></p>
                <p>Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo</p>
            </li>
        </ul>
        <div class="widget-end">
            <hr class="widget-end">
            <p>Toon alles</p>
        </div>
    </div>
    <div class="content-5 mt-4 mb-4">
        <a href="#" target="_blank"><img src="./../assets/images/ads-sidebar.png" class="w-full" alt="Ads Sidebar"></a>
    </div>
</template>



<script>
export default {
    name: "SidebarContent"
}
</script>



<style lang="scss">
    .content-1,
    .content-2,
    .content-4 {
        background-color: var(--rt-light-silver);
    }

    .content-feed {
        border-top: 1px solid var(--rt-light-gray);
        padding: 0.2rem 0 0.8rem;
        &:first-child {
            border-top-width: 0;
        }
    }

    .widget-end {
        position: relative;
        hr {
            background-color: var(--rt-light-gray2);
            height: 2px
        }
        p {
            background-color: var(--rt-light-silver);
            width: auto;
            position: absolute;
            top: -13px;
            left: 30%;
            right: 30%;
            text-align: center;
            font-weight: bold;
            color: var(--rt-text-blue2-color);
        }
    }
</style>