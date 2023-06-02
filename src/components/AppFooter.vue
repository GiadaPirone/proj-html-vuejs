<script>
    import {store} from '../store.js'
    export default{
        name:" AppFooter",

        data (){
            return{
                store,

            }
        }
    }
</script>

<template>
    <div class="container dFlex justyBetween paddingTop50 paddingBottom50">
        <!-- container addresS. -->
        <div class="">
            <h4 class=" colorWhite fontSize1-5 paddingBottom20">Address</h4>
            <div>
                <p class="colorWhireRGBA">382 ne 191st St #87394 Miami, FL 33179-3899</p>
                <p class="colorWhireRGBA">+1(305) 547-9909 (9am-5pm EST, Monday_friday)</p>
                <p class="colorWhireRGBA">support@maxcoach.com</p>
            </div>
            <div class="paddingTop20">
                <span v-for="icona in store.icone" class="paddingRight20"><i :class="icona"></i></span>
            </div>
        </div>

        <!-- conteiner explore e information. -->
        
        <div class="dFlex marginRight1200">
            <div class="dFlex flexDirectionCol paddingRight50">
                <h4 class="colorWhite paddingBottom20">Explore</h4>
                <template v-for="elemento in store.explore" >
                    <a href="#" class="colorWhireRGBA">{{ elemento }}</a>
                </template>
            </div>

            <div class="dFlex flexDirectionCol paddingLeft50">
                <h4 class="colorWhite paddingBottom20">Information</h4>
                <template v-for="info in store.informazioni" >
                    <a href="#" class="colorWhireRGBA">{{ info }}</a>
                </template>
            </div>
        </div>

    </div>

    <div class="dFlex justyCenter paddingBottom50">
        <p class="colorWhireRGBA"> © Maxcoach, All Rights Reserved </p>
    </div>
</template>

<style scoped>
    
    /* *{ color: white;} */
    i{ font-size: 1.5rem;
        color: white;
    }


</style>