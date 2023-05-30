<script>
    export default{
        name:"AppAboutMe",

        data (){
            return{

            }
        }
    }
</script>

<template>
    <div class="container dFlex">

        <div class="sx">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>

        <div class="dx">
            <div class="paddingBottom5"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus nemo veritatis at doloremque aliqua</p>
            </div>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minus necessitatibus blanditiis aspernatur, earum laudantium velit id officia sapiente impedit dolore numquam beatae quia.</small></p>
        </div>
        
        
    </div>
</template>

<style scoped>

    .dFlex{
        display: flex;
    }
    .paddingBottom5{
        padding-bottom: 10px;
}
    .container{
        margin-left: 350px;
        margin-right: 350px;
        background-color: bisque;
        margin-bottom: 50px;  /* da togliere*/
    }
    .sx{
        width: calc(100% / 2 );
        font-size: 1.5rem;
        padding-right: 50px;
    }
    



</style>