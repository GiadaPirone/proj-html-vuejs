<script>
    import {store} from '../store.js'
    export default{
        name: "AppOnlineCoursesCards",

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
    <!-- titolo sezione. -->
    <div class="dFlex flexDirectionCl">
        <p>begin your journey at maxcoach</p>
        <h2>Latest Online Courses</h2>
    </div>

    <!-- inizio cards. -->
    <div class="conteinerCards dFlex">

        <div v-for="card in store.onlineCourses">
            <img :src="getImgPath(card.img)" alt="">
            <p>{{ card.prezzo }}</p>
            <p>{{ card.descrizione }}</p>

            <div class="dFlex">
                <i class="fa-solid fa-file-lines"></i><p>{{ card.lezioni}}</p>
                <i class="fa-solid fa-user"></i> <p>{{ card.studenti }}</p>
            </div>
        </div>

    </div>

    <!-- bottone. -->
    <div class="dFlex">
        <button> <a href="">View All courses</a> </button>
    </div>
</template>

<style scoped>

    .dFlex{
        display: flex;
    }
    .flexDirectionCl{
        flex-direction: column;
    }

    h2{
        font-size: 2rem;
        padding-top: 10px;
        padding-bottom: 50px;
    }

    .conteinerCards{
        background-color: bisque;
        flex-wrap: wrap;
    }
    button {
    height: 40px;
    border-radius: 5px ;
    background-color: #20ad96;
    color: #fff;
    
}
    
</style>