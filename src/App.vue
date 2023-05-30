<script >
import AppHeader from './components/AppHeader.vue'
import AppAboutMe from './components/AppAboutMe.vue'

export default{
    components:{
        AppHeader,
        AppAboutMe,
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
    </main>
</template>

<style scoped>


</style>
