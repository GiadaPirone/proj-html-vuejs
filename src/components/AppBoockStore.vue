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
    <div class="container dFlex justyCenter paddingBottom50">
        <!-- boock store online. -->
        <div class="book ">
           <p class="paddingTop20 paddingBottom20">Book store online</p>
           <h2 class="paddingBottom20 fontSize2">Be Alpha With <span class="colorPrimary">Wingman's Book</span> </h2>

            <ul v-for="dato in lista">
                <li class="lineHeight30 colorBlackRGBA"><i class="fa-solid fa-check paddingRight20"></i>{{ dato }}</li>
            </ul>

            <div class="dFlex paddingTop20">
                <button class="botton marginTop50">Get Started For Free</button>
            </div>
        </div>
        <!-- libri in vendita. -->
        <div class="dFlex">
            <div>
                <img src="../assets/product-book-11-400x400.jpg" alt="" class="marginRight50">
                <p class="textCenter"><strong>Alpha man Maxcoach</strong></p>
                <p class="textCenter colorPrimary ">$29.00</p>
            </div>
            <div>
                <img src="../assets/product-book-10-400x400.jpg" alt="" class="marginRight50">
                <p class="textCenter"><strong>Real man 4.0 by Maxcoach</strong></p>
                <p class="textCenter colorPrimary ">$39.00</p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
 @use '../styles/variables.scss' as*;

    i{ color: #20ad96;}
    
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    
    

</style>