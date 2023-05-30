<script>
    export default{
        name:"AppAboutMe",

        data (){
            return{

            }
        }
    }
</script>

<template>
    <!-- about me. -->
    <div class="container dFlex">
        <div class="sx">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>

        <div class="dx">
            <div class="paddingBottom5"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus nemo veritatis at doloremque aliqua</p>
            </div>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus necessitatibus blanditiis aspernatur, earum laudantium velit id officia sapiente impedit dolore numquam beatae quia.</small></p>
        </div>        
    </div>

    <!-- img con testo affiancato. -->
    <div class="container dFlex">
        <div class="immagine">
            <img class="imgMotivation" src="../assets/home-movation-video-poster-670x450.jpg" alt="">
            <img class="imgYoutube" src="../assets/icon-youtube-play.png" alt="">
        </div>

        <div class="testo dFlex flexDirectionCl">
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam molestias error tempore maiores debitis veritatis culpa fuga tenetur quo cupiditate expedita aliquam dolorem.</p>
            </div>
            <div>
                <img src="../assets/home-movation-shape-01.png" alt="">
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
    .paddingBottom5{
        padding-bottom: 10px;
}
    .container{
        margin-left: 350px;
        margin-right: 350px;
        background-color: bisque;
        margin-bottom: 50px;  /* da togliere*/
    }
    .sx{
        width: calc(100% / 2 );
        font-size: 1.5rem;
        padding-right: 50px;
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

    .testo{
        padding: 20px;
    }
    



</style>