<template>
    <div class="share-social-media">
        <ul class="list-inline">
            <li><a href="#" target="_blank"><i class="fa fa-facebook-square fa-fw"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-twitter fa-fw"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-instagram fa-fw"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-linkedin fa-fw"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-whatsapp fa-fw"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-link fa-flip-horizontal fa-fw"></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ShareIcons'
}

</script>

<style lang="scss">
.share-social-media {
    float: right;
    ul {
        li {
            display: inline;
            a {
                display: inline-block;
                color: var(--rt-text-blue-dark-color);
                padding: 0 0.3rem;
                font-size: 1.1rem;
            }
        }
    }
}
</style>