<script>
import { MainGetImagePath } from '../../helper';
export default{
    name:'MainComments',
    data(){
        return{
            MainGetImagePath,
            quote:'quote_alt.png'
        }
    }
}
</script>

<template>
<section>
    <div class="container">
        <div class="comment">
            <div class="img-container">
                <img :src="MainGetImagePath(quote)" alt="">
            </div>
            <p class="comment-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa id error dolore perferendis quod dicta quos sunt, delectus beatae deleniti rem voluptates quisquam? Aliquid, assumenda id illum itaque ipsa perspiciatis?
            </p>
            <hr>
            <h6>
                Joe R.Hamblen
            </h6>

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
section{
    background-image: url(../../assets/img/parallax_02.jpg);
    background-position: center;
    background-size: cover;
    .comment{
        text-align: center;
        color: white;
        padding-top: 3rem;
        .img-container{
            padding: 1rem;
            border: 1px solid white;
            border-radius: 50%;
            width: fit-content;
            margin: 2rem auto;

        }
        p{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        hr{
            width: 10%;
            margin: 1rem auto;
            background-color: white;
            height: 4px;
        }
        h6{
            font-size: 1.5rem;
        }
    }
    .button{
        border-color: white;
    }
}
</style>