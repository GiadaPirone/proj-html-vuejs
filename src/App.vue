<script >
import AppHeader from './components/AppHeader.vue'
import AppAboutMe from './components/AppAboutMe.vue'
import AppOnlineCoursesCards from './components/AppOnlineCoursesCards.vue'


export default{
    components:{
        AppHeader,
        AppAboutMe,
        AppOnlineCoursesCards,
    },
    data (){
        return{

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
    </main>
</template>

<style scoped>


</style>
