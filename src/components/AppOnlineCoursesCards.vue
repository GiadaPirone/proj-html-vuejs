<script>
    export default{
        name: "AppOnlineCoursesCards",

        data (){
            return{

            }
        }
    }
</script>

<template>
    <!-- titolo sezione. -->
    <div class="dFlex flexDirectionCl">
        <p>begin your journey at maxcoach</p>
        <h2>Latest Online Courses</h2>
    </div>

    <!-- inizio cards. -->
    <div class="conteinerCards dFlex">
        

    </div>
</template>

<style scoped>

    .dFlex{
        display: flex;
    }
    .flexDirectionCl{
        flex-direction: column;
    }

    h2{
        font-size: 2rem;
        padding-top: 10px;
        padding-bottom: 50px;
    }

    .conteinerCards{
        background-color: bisque;
    }
</style>