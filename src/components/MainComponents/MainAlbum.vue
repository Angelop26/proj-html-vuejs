<script>
import { MainGetImagePath } from '../../helper';
import { store } from '../../store';
export default{
    name:'MainAlbum',
    data(){
        return{
            store,
            MainGetImagePath
        }
    }
}
</script>

<template>
    <section>
        <img :src="MainGetImagePath(elem)" alt="" v-for="(elem,index) in store.album" :key="index">
    </section>
</template>

<style lang="scss" scoped>
section{
    display: flex;
    img{
        width: calc(100% / 4);
    }
}
</style>