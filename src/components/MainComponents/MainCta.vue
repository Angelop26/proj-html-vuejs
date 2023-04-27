<script>
export default{
    name:'MainCta',
    props:{
        text: String,
        ButtonText: String
    }
}
</script>

<template>
    <section>
        <div class="container">
            <h2>{{ text }}</h2>
            <a href="#">
                {{ ButtonText }}
                <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixins' as *;
section{
    text-align: center;
    background-image: url('../../assets/img/pattern.png');
    color: white;
    padding: 2rem 0;
    .container{
        @include flex(row,space-around,center);
        h2{
            font-size: 2rem;
        }
        a{
            color: white;
            border: 3px solid white;
            padding: 10px 20px;
            i{
                margin-left: 5px;
            }
        }
    }
}
</style>