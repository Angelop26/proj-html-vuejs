<script>
export default{
    name: 'MainData',
    data(){
        return{
            datas:[
                {
                    num:'507',
                    title:'Our pupils',
                    text:'pulvinar forte maestro node terminal est elipsis prism',
                },
                {
                    num:'235',
                    title:'Teaching Hours',
                    text:'pulvinar forte maestro node terminal est elipsis prism',
                },
                {
                    num:'100%',
                    title:'Satisfied Parents',
                    text:'pulvinar forte maestro node terminal est elipsis prism',
                },
                {
                    num:'1050',
                    title:'Meals Per Year',
                    text:'pulvinar forte maestro node terminal est elipsis prism',
                },
            ]
        }
    }
}
</script>

<template>
<section>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(elem,index) in datas" :key="index">
                <p> {{ elem.num }}</p>
                <h3>{{ elem.title }}</h3>
                <p>{{ elem.text }}</p>
            </div>
        </div>
        <div class="jumbobuttons">
            <div class="button"></div>
            <div class="button"></div>
            <div class="button"></div>
            <div class="button"></div>
            <div class="button"></div>
            <div class="button"></div>
        </div>
    </div>
</section>   
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixins' as *;
section{
    background-image: url('../../assets/img/parallax_01.jpg');
    background-position: center;
    .container{
        width: 60%;
        margin: 0 auto;
        padding-top: 2rem;
        .row{
            @include flex(row,center,center);
            .col{
                width: 25%;
                padding: 1rem;
                text-align: center;
                color: white;
                p:first-child{
                    border: 1px solid white;
                    border-radius: 50%;
                    padding: 2rem;
                    margin-bottom: 1.5rem;
                    font-size: 3rem;
                }
                h3{
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                }
    
            }
        }
        .button{
            border-color: white;
        }
    }
}
</style>