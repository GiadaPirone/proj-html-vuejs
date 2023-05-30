<script>
    export default{
        name: "AppHeader",

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
        <div class="conteinerHeader">
            <div class="navbar dFlex">
                <!-- logo. -->
                <div >
                    <img class="logo" src="../assets/dark-logo.png" alt="">
                </div>
                <!-- menu. -->
                <div class="menu dFlex alignItemsCenter">
                    <template  v-for="voce in vociMenu">
                        <p>{{ voce }} <span><i class="fa-solid fa-caret-up"></i></span> </p>
                    </template>
                </div>
                <!-- icone. -->
                <div class="icone dFlex alignItemsCenter">
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
    
                </div>
            </div>    
        </div>

        <!-- parte principale header. -->
        <div class="conteiner dFlex">
            
            <div class="testoPrincipale">
                <p class="paddingBottom5">I'M  WINGMAN</p>
                <h1>Pace On Earth A Wonderful Wish But No Way</h1>

                <div class="paddingTop5 paddingBottom5">
                    <p><small>Succes isn't overnight. It's when everyday you get a little better than the day befor. It all adds up.</small></p>
                </div>
                <div>
                    <button>
                        Get Started For Free
                    </button>
                </div>
            </div>

            <div >
                <img src="../assets/home-movation-hero-image.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>

.dFlex{
    display: flex;
}
.alignItemsCenter {
    align-items: center;
}

.paddingTop5{
    padding-top: 10px;
}
.paddingBottom5{
    padding-bottom: 10px;
}

.sfondo{
    min-height: 300px; /* da togliere*/
    background-color: #F5F7FA;
    background-image: url(../assets/background-pattern-wavify.png);
}
.conteinerHeader{
    padding-top: 20px;
    max-width: 80%;
    /* background-color: #F5F7FA; */
}
.logo {
    width: 160px;
}

p{
    font-size: 1.2rem;
    padding: 0px 10px 0px 5px;
}

i{
    font-size: 1.2rem;
}
span{
    padding: 0px 5px 0px 5px;
}


.conteiner{
    margin-left: 350px;
    margin-right: 350px;
    margin-top: 50px;
    min-height: 300px; /* da togliere*/
    /* background-color: antiquewhite; */
}
.testoPrincipale{
    width: 30%;
    padding-top: 100px;
}

button {
    height: 40px;
    border-radius: 5px ;
    background-color: #20ad96;
    color: #fff;
}

img{
    width: 80%;
}

</style>
