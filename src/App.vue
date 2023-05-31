<script >
import AppHeader from './components/AppHeader.vue'
import AppAboutMe from './components/AppAboutMe.vue'
import AppOnlineCoursesCards from './components/AppOnlineCoursesCards.vue'
import AppBoockStore from './components/AppBoockStore.vue'


export default{
    components:{
        AppHeader,
        AppAboutMe,
        AppOnlineCoursesCards,
        AppBoockStore,
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
        <AppBoockStore />
    </main>
</template>

<style scoped>


</style>
