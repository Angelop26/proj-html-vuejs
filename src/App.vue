<script>
import AppFooterVue from './components/AppFooter.vue';
import AppHeaderVue from './components/AppHeader.vue';
import AppMainVue from './components/AppMain.vue';
import {store} from './store';
export default{
  components:{
    AppHeaderVue,
    AppMainVue,
    AppFooterVue
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
<AppHeaderVue />
<AppMainVue />
<AppFooterVue />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
