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
    <div class="container dFlex justyBetween alignCenter paddingBottom padding-top">
        <div v-for="icona in icone">
            <img :src="getIcona(icona)" alt="">
        </div>
    </div>


</template>

<style scoped>
    .dFlex{
        display: flex;
    }

    .justyBetween{
        justify-content: space-between;
    }

    .alignCenter{
        align-items: center;
    }

    .paddingBottom{
        padding-bottom: 50px;
    }
    .padding-top{
        padding-top: 25px;
    }
    .container{
        margin-left: 350px;
        margin-right: 350px;
    }

    img {
        opacity: 0.4;
        filter: alpha(opacity=40); /* For IE8 and earlier */
    }
</style>