<script>
import { MainGetImagePath,showNext,showPrev } from '../../helper';
export default {
    name: 'MainOverview',
    data() {
        return {
            MainGetImagePath,
            showPrev,
            showNext,
            overviewCard: [
                {
                    img: 'clock_alt.png',
                    title: 'Full Day Sessions',
                    text: 'Pulvinar est metro ligula blandit macenas return gravida curpum. Maecenas node estibulum.',
                },
                {
                    img: 'diagram_alt.png',
                    title: 'Varied Classes',
                    text: 'Pulvinar est metro ligula blandit macenas return gravida curpum. Maecenas node estibulum.',
                },
            ],
            indexImage: 0,
            slides: [
                'gallery_07-690x506.jpg',
                'gallery_01-690x506.jpg',
                'gallery_08-690x506.jpg',
            ],
        }
    },

}
</script>

<template>
    <section>
        <div class="container">
            <div class="col">
                <a href="#" class="activeBtn">overview</a>
                <a href="#">our mission</a>

                <h2>Our philosophy is learning through play as we offer a stimulating environment for children.</h2>
                <div class="card" v-for="(elem, index) in overviewCard" :key="index">
                    <div class="container-img">
                        <img :src="MainGetImagePath(elem.img)" alt="">
                    </div>
                    <div class="text-container">
                        <h3>{{ elem.title }}</h3>
                        <p>{{ elem.text }}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="slider-wrapper">

                    <div class="item">
                        <img :src="MainGetImagePath(slides[indexImage])" alt="" />
                        <img src="../../assets/img/slider_previous.png" class="prev" @click="showPrev()" />
                        <img src="../../assets/img/slider_next.png" class="next" @click="showNext()" />
                    </div>

                    <div class="thumbs">
                        <div class="thumb" v-for="(slide, index) in slides" :key="index" :class="[indexImage === index ? 'active':'']">
                            <img :src="MainGetImagePath(slide)" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixins' as*;

section {
    background-color: #e8e6e7;

    .container {
        width: 60%;
        margin: 0 auto;
        @include flex(row, center, flex-start);
        padding-top: 2rem;
        padding-bottom: 2rem;
        h2{
            margin-bottom: 2rem;
            padding-top: 5rem;
            color: #554e9e;
            font-size: 2rem; 
        }
        .col {
            a{
                padding: 1rem 2rem;
                color: grey;
                &.activeBtn{
                    background-color: #fe6601;
                    color: white;
                }
            }
            width: 50%;
            &:first-child{
                padding-right: 1rem;
            }
            h3 {
                color: #554e9e;
                font-size: 2rem; 
            }

            .card {
                @include flex(row, center, center);
                margin-bottom: 2rem;

                .container-img {
                    padding: 20px;
                    border-radius: 50%;
                    margin-bottom: 1rem;
                    background-color: #fe6601;
                    margin-right: 1rem;
                }

                h3 {
                    font-size: 1.5rem;
                    color: #554e9e;
                    margin-bottom: 1.3rem;
                }

                p {
                    color: grey;
                }

            }
        }

        .slider-wrapper {
            .item {
                height: 300px;
                position: relative;
                margin-bottom: 1rem;

                img:first-child {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .prev{
                    position: absolute;
                    top: 50%;
                    left: 0;
                    background-color: #fe6601
                }
                .next{
                    position: absolute;
                    top: 50%;
                    right: 0;
                    background-color: #fe6601
                }
            }

            .thumbs {
                @include flex(row,space-between,center);

                .thumb {
                    width: 80%;
                    padding-bottom: 1rem;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    &.active{
                        border-bottom: 2px solid #fe6601;
                    }
                }
            }
        }
    }
}
</style>