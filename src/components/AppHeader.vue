<script>
export default{
    name:'AppHeader',
    props:{
        logo: String,
        menu: Array
    },
    methods:{
        getImagePath(img){
            return new URL(`../assets/img/${img}`, import.meta.url).href
        }
    }
}
</script>

<template>
    <header>
        <div class="logo">
            <img :src="getImagePath(logo)" alt="">
        </div>
        <ul>
            <li v-for="(elem,index) in menu" :key="index">
                <img :src="getImagePath(elem.img)" alt="">
                <h5> {{elem.text}} </h5>
            </li>
        </ul>
    </header>
    
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
header{
    @include flex(row,center,center);
    height: 100px;
    .logo{
        margin-right: 5rem;
        height: 100%;
        img{
            height: 100%;
            width: 100%;
        }
    }
    ul{
        @include flex(row,center,end);
        height: 100%;
        li{
            @include flex(column,center,center);
            padding: 20px;
            color: #554e9e;
            &:first-child{
              color: white;
              background-color: #fe6601;  
            }
            h5{
                padding-top: 15px;
            }
        }
    }
}

</style>