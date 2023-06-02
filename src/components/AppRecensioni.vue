<script>
    import {store} from '../store.js'
    export default{
        name: "AppRecensioni",

        data(){
            return{
                store,
                slideCorrente: 0,
            }
        },
        methods:{
            getImgPath(imgPath){
                return new URL (imgPath, import.meta.url).href;

            },
            incrementaSlide(){
                this.slideCorrente == store.recensioni.length-1 ? this.slideCorrente = 0 : this.slideCorrente++
            },
            decrementaSlide(){
                this.slideCorrente == 0 ? this.slideCorrente = store.recensioni.length-1 : this.slideCorrente--
            }


            

        }
    }
</script>

<template>
    <div class="width100 dFlex positionRelative">
        <div class="cambioRecensione positionAbsolut dFlex flexDirectionCol alignCenter justyCenter">
            <i @click="decrementaSlide()" class="fa-solid fa-chevron-up"></i>
            <p class="paddingTop5 paddingBottom5">{{ this.slideCorrente+1}}/{{ store.recensioni.length }}</p>
            <i @click="incrementaSlide()" class="fa-solid fa-chevron-down"></i>
        </div>

        <!-- div recensione. -->
        <div v-show="i == slideCorrente" v-for="recensione, i in store.recensioni" class="recensione dFlex alignCenter flexDirectionCol justyAround  width50">
            <!-- titolo. -->
            <div>
                <p class="colorPrimary fontSize1-2">real stories</p>
            </div>
            <!-- testo recensione. -->
            <div>
                <p class="textCenter w500 fontSizeXl lineHeight2-5">{{ recensione.storia }}</p>
            </div>
            <!-- img recensione. -->
            <div class="textCenter">
                <img class="width50 borderRadius50 paddingTop" :src="getImgPath(recensione.img)" alt="">
                <p class="paddingTop20">{{ recensione.name }}</p>
                <p class="paddingTop20">{{ recensione.professione }}</p>
            </div>

        </div>

        <div class="immagine">
            <img src="../assets/home-movation-testimonial-image-768x562.jpg" alt="" class="width900">  
        </div>

    </div>
</template>


<style scoped>

    .w500{ width: 500px;}
   
    .recensione{
        background-image: url(../assets/background-pattern-wavify.png);
        background-color: #F3F3FA;
    }
    .cambioRecensione{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: white;

        top: 50%;
        left: 47.5%;
    }
   
       
    

    
</style>