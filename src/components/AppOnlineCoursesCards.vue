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
    <div class="container dFlex flexDirectionCol alignCenter">
        <p>begin your journey at maxcoach</p>
        <h2 class="fontSize2 paddingTop10 paddingBottom50">Latest Online Courses</h2>
    </div>

    <AppCard />
    
    <!-- bottone. -->
    <div class="dFlex justyCenter">
        <button class="botton marginTop50 marginBottom50"> <a href="">View All courses</a> </button>
    </div>
    
</template>

<style scoped>
    
</style>