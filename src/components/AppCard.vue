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
    <div class="container flexWrap dFlex justyCenter">

        <div v-for="card in store.onlineCourses" class="card">
            <img :src="getImgPath(card.img)" alt="" class="maxWidth60">
                <div class=" paddingLeft20">
                    <p class="maxWidth60 fontSizeXl colorPrimary">{{ card.prezzo }}</p>
                    <p class="maxWidth60">{{ card.descrizione }}</p>
    
                    <div class="dFlex alignBaseline colorBlackRGBA">
                        <i class="fa-solid fa-file-lines "></i><p class="paddingRight10">{{ card.lezioni}}</p>
                        <i class="fa-solid fa-user "></i> <p>{{ card.studenti }}</p>
                    </div>
                </div>
        </div>

</div>
</template>

<style scoped>
   
    i{ padding-right: 5px;}

</style>