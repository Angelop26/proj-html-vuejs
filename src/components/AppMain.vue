<script>
import MainJumboCarousel from './MainComponents/MainJumboCarousel.vue';
import MainCta from './MainComponents/MainCta.vue';
import MainWelcome from './MainComponents/MainWelcome.vue';
import MainOverview from './MainComponents/MainOverview.vue';
import MainData from './MainComponents/MainData.vue';
import mainClasses from './MainComponents/mainClasses.vue';
import MainGoals from './MainComponents/MainGoals.vue';
import MainAlbum from './MainComponents/MainAlbum.vue';
import MainStaff from './MainComponents/MainStaff.vue';
import mainComments from './MainComponents/mainComments.vue';
export default{
    name:'AppMain',
    components:{
        MainJumboCarousel,
        MainCta,
        MainWelcome,
        MainOverview,
        MainData,
        mainClasses,
        MainGoals,
        MainAlbum,
        MainStaff,
        mainComments
    }
}
</script>

<template>
<MainJumboCarousel />
<MainCta :text="`How to Enroll Your Child to a Class?`" :ButtonText="`LEARN MORE`"/>
<MainWelcome />
<MainOverview />
<MainData />
<mainClasses />
<MainGoals />
<MainAlbum />
<MainCta :text="`See Our Kindergarten Photo Gallery! `" :ButtonText="`VIEW GALLERY`"/>
<MainStaff />
<mainComments />
</template>

<style lang="scss" scoped>

</style>