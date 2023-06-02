<script>
    import {store} from '../store.js'
    export default{
        name:"AppAboutMe",

        data (){
            return{
                store,
            }
        }
    }
</script>

<template>
    <!-- about me. -->
    <div class="container paddingBottom50 dFlex">
        <div class="sx fontSize1-5 paddingRight50">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>

        <div class="dx">
            <div class="paddingBottom10"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus nemo veritatis at doloremque aliqua</p>
            </div>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus necessitatibus blanditiis aspernatur, earum laudantium velit id officia sapiente impedit dolore numquam beatae quia.</small></p>
        </div>        
    </div>

    <!-- img con testo affiancato. -->
    <div class="container paddingBottom50 dFlex">
        <div class="immagine">
            <img class="borserRadius5" src="../assets/home-movation-video-poster-670x450.jpg" alt="">
            <img class="imgYoutube" src="../assets/icon-youtube-play.png" alt="">
        </div>

        <div class=" dFlex flexDirectionCol justyCenter">
            <div>
                <p class="fontSize2">"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.".</p>
                <img class="paddingTop50" src="../assets/home-movation-shape-01.png" alt="">
                <h3>Kaixa Stark</h3>
                <p>wingman</p>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim perspiciatis dolorum.</p>
                </div>
            </div>
            
            
        </div>

    </div>
</template>

<style scoped>
    
    .sx{
        width: calc(100% / 2 );
    }

    .immagine{
        width: calc(100% / 1);
        position: relative;
    }
    .imgYoutube{
        position: absolute;
        bottom: 205px;
        left: 280px;
    }

</style>