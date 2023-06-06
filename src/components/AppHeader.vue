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
                    {
                        voce: "home", 
                        show: false,
                    },
                    {
                        voce: "pages",
                        show:false,
                    },
                    {
                        voce: "courses",
                        show:false,
                    },
                    {
                        voce: "Features",
                        show:false,
                    },
                    {
                        voce: "Blog",
                        show:false,
                    },
                    {
                        voce: "Shop",
                        show:false,
                    },
                ],

                opzioniMenu: [
                    "Start Here",
                    "Succes Story",
                    "About Me",
                    "contact me"
                ],
                show: false,
            }
        },
        methods:{
            toggleUl(){
                this.show = !this.show;
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
                <div  class="menu dFlex alignCenter">
                    <div class="voceMenu "  v-for="e in vociMenu">
                        <p @click="e.show = !e.show" class="fontSize1-2">{{ e.voce }} <span><i class="fa-solid fa-chevron-down"></i></span> </p>
                        <ul v-if="e.show">
                            <li v-for="opzione in opzioniMenu">{{ opzione }}</li>
                        </ul>
                    </div>
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

<style lang="scss" scoped>


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

.voceMenu{
    position: relative;

    &:hover{
        box-shadow: 0 0 3px 0 lightgray;
        cursor: pointer;
    }
    ul{
        position: absolute;
        list-style: none;
        padding: 0;
        padding-top: 10px;
        background-color: white;
    }
}


</style>
