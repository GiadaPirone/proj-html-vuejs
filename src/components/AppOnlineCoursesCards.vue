<script>
    import {store} from '../store.js'
    import AppCard from '../components/AppCard.vue'
    
    export default{
        name: "AppOnlineCoursesCards",
        components:{
            AppCard,

        },

        data (){
            return{
                store,

            }
        },
        
    }
</script>

<template>
    <!-- titolo sezione. -->
    <div class="dFlex flexDirectionCl alignCenter">
        <p>begin your journey at maxcoach</p>
        <h2>Latest Online Courses</h2>
    </div>

    <AppCard />
    
    <!-- bottone. -->
    <div class="dFlex justyCenter">
        <button> <a href="">View All courses</a> </button>
    </div>
    
</template>

<style scoped>

    .dFlex{
        display: flex;
    }
    .flexDirectionCl{
        flex-direction: column;
    }

    .justyCenter{
        justify-content: center;
    }

    .alignCenter{
        align-items: center;
    }

    h2{
        font-size: 2rem;
        padding-top: 10px;
        padding-bottom: 50px;
    }

    button {
    height: 40px;
    border-radius: 5px ;
    background-color: #20ad96;
    color: #fff;
    margin-top: 50px;
    margin-bottom: 50px;
}
    
</style>