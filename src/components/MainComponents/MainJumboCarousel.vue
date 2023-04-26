<script>
import {store} from '../../store';
export default{
    name:'MainJumboCarousel',
    data(){
        return{
            store
        }
    },
    methods:{
        getImagePath(img){
            return new URL(`../../assets/img/${img}`, import.meta.url).href
        }
    }
}
</script>

<template>
<section>
    <div class="container">

        <div class="container-img">
            <img :src="getImagePath(elem)" alt="" v-for="(elem,index) in store.jumboImg" :key="index">
        </div>
        <div class="buttons">
            <div class="button"></div>
            <div class="button"></div>
            <div class="button"></div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixins' as *;
.container{
    background-image: url('../../assets/img/slider_slide3_background.png');
    background-repeat: repeat;
    .container-img{
        @include flex(row,space-around,end);
        img{
            padding-top: 2rem;
        }
    }
    .buttons{
        padding: 1rem;
        @include flex(row,center,center);
        .button{
            width: 75px;
            height: 25px;
            border: 2px solid #fe6601;
            margin-right: 10px;
            margin-top: 1.2rem;
            &:hover{
                margin-top: 0;
            }
        }
    }
}
</style>