<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store';
export default{
  components:{
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      store,
      footerLogo:'logo_footer.png',
      footerArchives:['October 2014(2)','September 2014(2)','August 2014(2)','July 2014(2)','June 2014(2)','May 2014(1)',],
      footerFeatures:[
        {
          check:'style_4_alt.png',
          text:'Friendly and welcoming place'
        },
        {
          check:'style_4_alt.png',
          text:'Science and art classes'
        },
        {
          check:'style_4_alt.png',
          text:'Positive learning environment'
        },
        {
          check:'style_4_alt.png',
          text:'Educational field trips'
        },
        {
          check:'style_4_alt.png',
          text:'Writing and reading classes'
        },
        {
          check:'style_4_alt.png',
          text:'Science and art classes'
        },
      ],
      footerPosts:[
        {
          postImg:'blog_08-300x180.jpg',
          postName:'Drawing and Painting Lessons',
          postDateImg:'date_footer.png',
          postDate:'October 03,2014'
        },
        {
          postImg:'blog_09-300x180.jpg',
          postName:'Fall Parents Meeting Day',
          postDateImg:'date_footer.png',
          postDate:'October 03,2014'
        },
        {
          postImg:'blog_10-300x180.jpg',
          postName:'Birthday in Kindergarten',
          postDateImg:'date_footer.png',
          postDate:'September 20,2014'
        }
      ]
    }
  },
  methods:{

  }
}
</script>

<template>
<AppHeader :logo="store.headerLogo" :menu="store.headerMenu"/>
<AppMain />
<AppFooter :logo="footerLogo" :archives="footerArchives" :features="footerFeatures" :posts="footerPosts"/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
