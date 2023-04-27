<script>
import {store} from '../../store';
import { MainGetImagePath } from '../../helper';
export default{
    name:'MainJumboCarousel',
    data(){
        return{
            store,
            MainGetImagePath
        }
    },
}
</script>

<template>
<section>
    <div class="container">

        <div class="container-img">
            <img :src="MainGetImagePath(elem)" alt="" v-for="(elem,index) in store.jumboImg" :key="index">
        </div>
        <div class="jumbobuttons">
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

}
</style>