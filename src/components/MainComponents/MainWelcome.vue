<script>
import { MainGetImagePath } from '../../helper';
import { store } from '../../store';
    export default{
        name:'MainWelcome',
        data(){
            return{
                store,
                MainGetImagePath,
                WelcomeCard:[
                    {
                        img:'schoolbag_alt.png',
                        title:'Morbi Etos',
                        text:'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
                    },
                    {
                        img:'stroller_alt.png',
                        title:'Congue Gravida',
                        text:'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vita est',
                    },
                    {
                        img:'globe_alt.png',
                        title:'Maecenas Node',
                        text:'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
                    },
                    {
                        img:'bell_alt.png',
                        title:'Praesent Morbi',
                        text:'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vita est',
                    },
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="upper-part">
                <h2 class="upper-title">Welcome to Fable</h2>
                <p class="upper-secondTitle">Fable daycare,preschool, and kindergarten</p>
                <img class="upperImg" :src="MainGetImagePath(store.headerDivider)" alt="">
            </div>
            <div class="bottom-part">
                <ul>
                    <li v-for="(elem,index) in WelcomeCard" :key="index">
                        <div class="containerImg" :class="[index % 2 === 0? 'orange':'violet' ]">
                            <img :src="MainGetImagePath(elem.img)" alt="">
                        </div>
                        <h3>{{ elem.title }}</h3>
                        <p>{{ elem.text }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixins' as*;
.container{
    ul{
        @include flex(row,center,center);
        li{
            @include flex(column,center,center);
            .containerImg{
                padding: 50px;
                border-radius: 50%;
                margin-bottom: 1rem;
            }
            .orange{
                background-color: #fe6601;
            }
            .violet{
                background-color: #554e9e;
            }
            h3{
                color: #554e9e;
                margin-bottom: 1rem;
            }
            p{
                color: grey;
                padding: 1rem;
                text-align: center;
            }
        }
    }
}
</style>