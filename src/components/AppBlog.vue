
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
    <div class="container">
        <!-- titolo. -->
        <div>
            <p>blog updated</p>
            <h2>Interesting <span>articles updated</span> daily</h2>
        </div>

        <div class="dFlex justyBetween">
            <div v-for="articolo in store.articoli" >
                <img :src="getImgPath(articolo.img)" alt="">

                <div class="dFlex alignBaseline color">
                    <i class="fa-regular fa-calendar"></i><p>{{ articolo.data }}</p>
                </div>

                <div>
                    <p>{{ articolo.titolo }}</p>
                </div>
                <div class="color">
                    <p>{{ articolo.anteprima }}</p>
                </div>
            </div>
            
        </div>

    </div>
</template>

<style scoped>
    .dFlex{
        display: flex;
    }
    .justyBetween{
        justify-content: space-between;
    }

    .alignBaseline{
        align-items: baseline;
    }
    .color{
        color: rgba(0, 0, 0, 0.5);
    }




    .container{
        margin-left: 350px;
        margin-right: 350px;

        margin-top: 50px;
        margin-bottom: 50px;
    }
    img{
        width: 250px;
    }

    span{
        color: #20ad96;;
    }
    h2{
        font-size: 2rem;
    }
    i{
        padding-right: 5px;
    }


</style>