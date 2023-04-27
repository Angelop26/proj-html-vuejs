<script>
import MainJumboCarousel from './MainComponents/MainJumboCarousel.vue';
import MainCta from './MainComponents/MainCta.vue';
import MainWelcome from './MainComponents/MainWelcome.vue';
import MainOverview from './MainComponents/MainOverview.vue';
export default{
    name:'AppMain',
    components:{
        MainJumboCarousel,
        MainCta,
        MainWelcome,
        MainOverview
    }
}
</script>

<template>
<MainJumboCarousel />
<MainCta :text="`How to Enroll Your Child to a Class?`" :ButtonText="`LEARN MORE`"/>
<MainWelcome />
<MainOverview />
</template>

<style lang="scss" scoped>

</style>