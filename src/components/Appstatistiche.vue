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
    <div class="dFlex container">
        
        <div v-for="statistica in store.statistiche" class="dati" >
            <!-- <img src="../assets/background-pattern-grid-line-06.png" alt=""> -->
            <span>{{ statistica.dato }}</span>
            <p>{{ statistica.testo }}</p>
        </div>
    </div>
</template>



<style scoped>


.dFlex{
    display: flex;
}
.container{
    padding-top: 20px;
    max-width: 80%;
    margin-top: 50px;
    margin-bottom: 50px; /* da togliere*/
}
.dati{
    display: flex;
    flex-direction: column;
    align-items: center;
}

span{
    font-size: 1.5rem;
    color: #20ad96;
}
</style>