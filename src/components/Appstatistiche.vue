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
    <div class="dFlex justyfyCenter container">
        
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

.justyfyCenter{
    justify-content: center;
}
.container{
    padding-top: 20px;
    max-width: 80%;
    margin-top: 50px;
    margin-bottom: 50px; /* da togliere*/
    margin-left: 350px;
    margin-right: 350px;
}
.dati{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 60px 0px 60px;
}

span{
    font-size: 1.7rem;
    color: #20ad96;
}

p{
    font-size: 1.5rem;
}
</style>