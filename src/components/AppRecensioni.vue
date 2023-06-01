<script>
    export default{
        name: "AppRecensioni",

        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="container dFlex">

        <!-- div recensione. -->
        <div class="recensione dFlex alignItemCenter flexDirectionCol justyCenter">
            <!-- titolo. -->
            <div>
                <p class="colorAzz">real stories</p>
            </div>
            <!-- testo recensione. -->
            <div>
                <p class="textCenter w500 fontXl lineHeight">I am free to learn at my own pace, follow my own schedule and choos the subject i want to learn from the syllabus. Great study portal for people like me.</p>
            </div>
            <!-- img recensione. -->
            <div class="textCenter">
                <img class="avatar paddingTop" src="../assets/testimonial-avata-02.jpg" alt="">
                <p class="paddingTop">Mina Hollace</p>
                <p class="paddingTop">/Freelancer</p>
            </div>

        </div>

        <div class="immagine">
            <img src="../assets/home-movation-testimonial-image-768x562.jpg" alt="">
            
        </div>

    </div>
</template>


<style scoped>

    .dFlex{
        display: flex;
    }
    .justyCenter{
        justify-content: center;
    }

    .alignItemCenter{
        align-items: center;
    }

    .flexDirectionCol{
        flex-direction: column;
    }

    .textCenter{
        text-align: center;
    }

    .w500{
        width: 500px;
    }

    .colorAzz{
        color: #20ad96;
    }

    .fontXl{
        font-size: x-large;
    }

    .lineHeight{
        line-height: 2.5rem;
    }

    .paddingTop{
        padding-top: 20px;
    }




    .container{
        width: 100%;
    }
    .recensione{
        width: calc(100% / 2); 
        
        background-image: url(../assets/background-pattern-wavify.png);
        background-color: #F3F3FA;
    }

    .immagine img{
        width: 900px;
    }
    .avatar{
        width: 50%;
        border-radius: 50%;
    }
       
    

    
</style>