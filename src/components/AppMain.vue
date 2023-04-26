<script>
import MainJumboCarousel from './MainComponents/MainJumboCarousel.vue';
import MainCta from './MainComponents/MainCta.vue';
export default{
    name:'AppMain',
    components:{
        MainJumboCarousel,
        MainCta
    }
}
</script>

<template>
<MainJumboCarousel />
<MainCta :text="`How to Enroll Your Child to a Class?`" :ButtonText="`LEARN MORE`"/>
</template>

<style lang="scss" scoped>

</style>