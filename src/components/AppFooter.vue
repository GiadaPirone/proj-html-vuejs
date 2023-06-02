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
    <div class="container">

        <div class="paddingTop">
            <h4>Address</h4>
            <div>
                <p class="color">382 ne 191st St #87394 Miami, FL 33179-3899</p>
                <p class="color">+1(305) 547-9909 (9am-5pm EST, Monday_friday)</p>
                <p class="color">support@maxcoach.com</p>
            </div>
            <div>
                <span v-for="icona in store.icone"><i :class="icona"></i></span>

            </div>
        </div>

    </div>
</template>

<style scoped>
    .paddingTop{
        padding-top: 50px;
    }

    .color{
        color: rgba(255, 255, 255, 0.5);
    }
    .container{
        margin-left: 350px;
        margin-right: 350px;

        color: white;
    }

    h4{
        font-size: 1.5rem;
    }
    span{
        padding-right: 20px;
    }
    i{
       
    }


</style>