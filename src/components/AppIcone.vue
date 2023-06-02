<script>
    export default{
        name:"AppIcone",
        props:{
            icone: Array,
        },

        data(){
            return{

            }
        },
        methods:{
            getIcona(imgIcona){
                return new URL (imgIcona, import.meta.url).href
            }
        }
    }
</script>

<template>
    <div class="container dFlex justyBetween alignCenter paddingBottom50 paddingTop20">
        <div v-for="icona in icone">
            <img :src="getIcona(icona)" alt="">
        </div>
    </div>


</template>

<style scoped>
    img {
        opacity: 0.4;
        filter: alpha(opacity=40); /* For IE8 and earlier */
    }
</style>