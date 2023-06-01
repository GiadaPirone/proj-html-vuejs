<script >
import AppHeader from './components/AppHeader.vue'
import AppAboutMe from './components/AppAboutMe.vue'
import AppOnlineCoursesCards from './components/AppOnlineCoursesCards.vue'
import AppBoockStore from './components/AppBoockStore.vue'
import AppIcone from './components/AppIcone.vue'
import AppRecensioni from './components/AppRecensioni.vue'
import AppBlog from './components/AppBlog.vue'



export default{
    components:{
        AppHeader,
        AppAboutMe,
        AppOnlineCoursesCards,
        AppBoockStore,
        AppIcone,
        AppRecensioni,
        AppBlog,
        
    },
    data (){
        return{
            icone: [
                "../assets/client-logo-05-primary.png",
                "../assets/client-logo-06-primary.png",
                "../assets/client-logo-07-primary.png",
                "../assets/client-logo-04-primary.png",
                "../assets/client-logo-03-primary.png",
                "../assets/client-logo-02-primary.png",
            ],

        }
    }
}
</script>

<template >
    <header>
        <AppHeader />
    </header>

    <main>
        <AppAboutMe />
        <AppOnlineCoursesCards />
        <AppBoockStore />
        <AppIcone :icone="icone" />
        <AppRecensioni />
        <AppBlog />
    </main>
</template>

<style scoped>


</style>
