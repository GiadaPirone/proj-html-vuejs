<script>
    import {store} from '../store.js'

    export default{
        name: "AppCard",

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
    <div class="conteinerCards dFlex">

        <div v-for="card in store.onlineCourses" class="card">
            <img :src="getImgPath(card.img)" alt="">
            <div class="testo">
                <p>{{ card.prezzo }}</p>
                <p>{{ card.descrizione }}</p>
            </div>

             <div class="dFlex">
                <i class="fa-solid fa-file-lines"></i><p>{{ card.lezioni}}</p>
                <i class="fa-solid fa-user"></i> <p>{{ card.studenti }}</p>
            </div>
        </div>

</div>
</template>

<style scoped>
    .dFlex{
        display: flex;
    }
    .flexDirectionCl{
        flex-direction: column;
    }

    .conteinerCards{
        /* background-color: bisque; */
        flex-wrap: wrap;
        width: 80%;
        /* margin-left: 350px;
        margin-right: 350px; */
    }
   
    img{
        width: 60%;
    }


</style>