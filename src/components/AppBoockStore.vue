<script>
    export default{
        name: "AppBoockStore",

        data(){
            return{
                lista:[
                    "Help you understand yourself better ",
                    "Revealing mature tips",
                    "give the right advice",
                    "Fascinating examples of alpha man",
                ]

            }
        },
    }
</script>

<template>
    <div class="container dFlex">
        <!-- boock store online. -->
        <div class="book ">
           <p class="paddingTop paddingBottom">Book store online</p>
           <h2 class="paddingBottom">Be Alpha With <span>Wingman's Book</span> </h2>

            <ul v-for="dato in lista">
                <li class="lineHeight"><i class="fa-solid fa-check paddingDx"></i>{{ dato }}</li>
            </ul>

            <div class="dFlex">
                <button>Get Started For Free</button>
            </div>
        </div>
        <!-- libri in vendita. -->
        <div class="dFlex">
            <div>
                <img src="../assets/product-book-11-400x400.jpg" alt="">
                <p class="textCenter"><strong>Alpha man Maxcoach</strong></p>
                <p class="textCenter colorAzz">$29.00</p>
            </div>
            <div>
                <img src="../assets/product-book-10-400x400.jpg" alt="">
                <p class="textCenter"><strong>Real man 4.0 by Maxcoach</strong></p>
                <p class="textCenter colorAzz">$39.00</p>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .colorAzz{
        color: #20ad96;
    }
    .textCenter{
        text-align: center;
    }
    .lineHeight{
        line-height: 30px;
    }

    .paddingTop{
        padding-top: 20px;
    }
    .paddingBottom{
        padding-bottom: 20px;
    }
    .paddingDx {
        padding-right: 15px;
    }
    .dFlex{
    display: flex;
    }
    .container{
        margin-left: 350px;
        margin-right: 350px;
        padding-bottom: 50px;/* da togliere*/
    }
    h2{
        font-size: 2rem;
    }

    li{
        color: rgba(0, 0, 0, 0.384);
    }

    i{
        color: #20ad96;
    }
    span{
        color: #20ad96;
    }

    .anteprimaBooks{
        background-color: beige;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    button {
    height: 40px;
    border-radius: 5px ;
    background-color: #20ad96;
    color: #fff;
    margin-top: 20px;
    }

    img{
        margin-right: 20px;
    }

</style>