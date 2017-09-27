<template>
    <div id="sports">
        <searchInput></searchInput>
        <div class="swiper-container-sports">
            <div class="my-pagination"><ul class="my-pagination-ul"></ul></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                </div>
                <div class="swiper-slide">

                </div>
                <div class="swiper-slide">

                </div> 
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import searchInput from '../public/search.vue'
    export default {
        name: "sports",
        data() {
            return {

            }
        },
        components: {
            searchInput
        },
        mounted: function() { 
            let mySwiper = new Swiper('.swiper-container-sports', {
                pagination: '.my-pagination-ul',
                paginationClickable: true,
                paginationBulletRender: function(index, className) {
                    switch (index) {
                    case 0:
                        name = '热门'; 
                        break;
                    case 1:
                        name = '关注'; 
                        break;
                    case 2:
                        name = '直播'; 
                        break;
                    default:
                        name = '';
                    }
                    return '<li class="' + className + '">' + name + '</li>';
                }
            })
        }
    }
</script>