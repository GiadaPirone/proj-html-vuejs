<script>
    import {store} from '../store.js'
    export default{
        name: "Appstatistiche",
        data (){
            return{
                store,
            }
        }
    }
</script>



<template>
    <div class="dFlex justyCenter container paddingTop50 paddingBottom50">
        
        <div v-for="statistica in store.statistiche" class=" dFlex flexDirectionCol alignCenter paddingRight50 paddingLeft50 " >
            <!-- <img src="../assets/background-pattern-grid-line-06.png" alt=""> -->
            <span class="colorPrimary fontSize1-7">{{ statistica.dato }}</span>
            <p class="fontSize1-5">{{ statistica.testo }}</p>
        </div>
    </div>
</template>



<style scoped>

</style>