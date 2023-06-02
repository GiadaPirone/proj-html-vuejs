
<script>
    import {store} from '../store.js'
    export default{
        name: "AppBlog",

        data (){
            return{
                store,

            }
        },
        methods:{
            getImgPath(imgPath){
                return new URL (imgPath, import.meta.url).href;

            }
        }
    }
</script>

<template>
    <div class="container paddingTop50 paddingBottom50">
        <!-- titolo. -->
        <div class="paddingBottom50">
            <p>blog updated</p>
            <h2 class="fontSize2 paddingTop10">Interesting <span class="colorPrimary">articles updated</span> daily</h2>
        </div>

        <div class="dFlex justyBetween">
            <div v-for="articolo in store.articoli" >
                <img :src="getImgPath(articolo.img)" alt="">

                <div class="dFlex alignBaseline colorBlackRGBA">
                    <i class="fa-regular fa-calendar"></i><p>{{ articolo.data }}</p>
                </div>

                <div class="paddingBottom20 width70">
                    <p class="fontSize1-5"><strong>{{ articolo.titolo }}</strong></p>
                </div>
                <div class="color">
                    <p>{{ articolo.anteprima }}</p>
                </div>
            </div>
            
        </div>

        <div class="dFlex justyCenter">
            <a class="colorPrimary fontSizeXl paddingTop20" href="#">view all posts</a>
        </div>

    </div>
</template>

<style scoped>
    img{ width: 250px;}
    i{ padding-right: 5px;}
</style>