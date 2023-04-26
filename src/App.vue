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
      store
    }
  },
  methods:{

  }
}
</script>

<template>
<AppHeader :logo="store.headerLogo" :menu="store.headerMenu"/>
<AppMain />
<AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
