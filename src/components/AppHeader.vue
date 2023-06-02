<script>
    import Appstatistiche from '../components/Appstatistiche.vue'
    export default{
        name: "AppHeader",
        components:{
            Appstatistiche,
        },
        data (){
            return{
                vociMenu:[
                    "Home",
                    "Pages",
                    "Courses",
                    "Features",
                    "Blog",
                    "Shop",
                ],
            }
        }
    }
</script>

<template>
    <div class="sfondo">

        <!-- contenitore barra menu. -->
        <div class="container">
            <div class="navbar dFlex justyBetween">
                <!-- logo. -->
                <div >
                    <img class="logo" src="../assets/dark-logo.png" alt="">
                </div>
                <!-- menu. -->
                <div class="menu dFlex alignCenter">
                    <template  v-for="voce in vociMenu">
                        <p class="fontSize1-2">{{ voce }} <span><i class="fa-solid fa-caret-up"></i></span> </p>
                    </template>
                </div>
                <!-- icone. -->
                <div class="icone dFlex alignCenter">
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                </div>
            </div>    
        </div>

        <!-- parte principale header. -->
        <div class="container dFlex justyCenter">
            
            <div class="testoPrincipale">
                <p class="paddingBottom10 fontSize1-2">I'M  WINGMAN</p>
                <h1>Pace On Earth A Wonderful Wish But No Way</h1>

                <div class="paddingTop10 paddingBottom10">
                    <p class="fontSize1-2"><small>Succes isn't overnight. It's when everyday you get a little better than the day befor. It all adds up.</small></p>
                </div>
                <div>
                    <button class="botton">
                        Get Started For Free
                    </button>
                </div>
            </div>

            <div class="paddingTop50" >
                <img src="../assets/home-movation-hero-image.png" alt="">
            </div>
        </div>
    </div>
    <Appstatistiche />
    
</template>

<style scoped>


.sfondo{
    background-color: #F5F7FA;
    background-image: url(../assets/background-pattern-wavify.png);
}
.logo { width: 160px;}
p{ padding: 0px 10px 0px 5px;}
i{  font-size: 1.2rem;}
span{ padding: 0px 5px 0px 5px;}

.testoPrincipale{
    width: 30%;
    padding-top: 150px;
}

img{
    width: 80%;
}

</style>
