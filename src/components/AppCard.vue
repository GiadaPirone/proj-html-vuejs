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
                <div class="paddingLeft">
                    <p class="maxWidth fontSizeXl colorAzz">{{ card.prezzo }}</p>
                    <p class="maxWidth">{{ card.descrizione }}</p>
    
                    <div class="dFlex alignBaseline colorBlack">
                        <i class="fa-solid fa-file-lines "></i><p class="paddingRight">{{ card.lezioni}}</p>
                        <i class="fa-solid fa-user "></i> <p>{{ card.studenti }}</p>
                    </div>
                </div>
            
        </div>

</div>
</template>

<style scoped>

    .maxWidth{
        max-width: 280px;
    }
    .dFlex{
        display: flex;
    }
    .flexDirectionCl{
        flex-direction: column;
    }

    .alignBaseline{
        align-items: baseline;
    }

    .paddingLeft{
        padding-left: 20px;
    }
    .paddingRight{
        padding-right: 10px;
    }

    .colorBlack{
        color: rgba(0, 0, 0, 0.438);
    }

    .colorAzz{
        color: #20ad96;;
    }

    .fontSizeXl{
        font-size: x-large;
    }





    .conteinerCards{
        /* margin: 0 auto; */
        margin-left: 350px;
        margin-right: 350px;
        flex-wrap: wrap;
        width: 80%;
        /* margin-left: 350px;
        margin-right: 350px; */
    }
   
    img{
        width: 60%;
    }
    i{
        padding-right: 5px;
    }


</style>