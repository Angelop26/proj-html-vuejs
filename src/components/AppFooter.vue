<script>
import { store } from '../store';
import { MainGetImagePath } from '../helper';
export default {
    name: 'AppFooter',
    props: {
        logo: String,
        archives: Array,
        features: Array,
        posts: Array
    },
    data() {
        return {
            store,
            MainGetImagePath
        }
    }
}
</script>

<template>
    <footer>
        <div class="footer-upper-part">

            <div class="container">
                <div class="row">
                    <div class="col about-us">
                        <h3>ABOUT US</h3>
                        <hr>
                        <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi vehicula
                            morbi</p>
                        <img :src="MainGetImagePath(logo)" alt="">
                    </div>
                    <div class="col archives">
                        <h3>ARCHIVES</h3>
                        <hr>
                        <ul>
                            <li v-for="(elem, index) in archives" :key="index">
                                {{ elem }}
                            </li>
                        </ul>
                    </div>
                    <div class="col features">
                        <h3>OUR FEATURES</h3>
                        <hr>
                        <p class="text">Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul
                            mattis ac vene:</p>
                        <ul>
                            <li v-for="(elem, index) in features" :key="index">
                                <img :src="MainGetImagePath(elem.check)" alt="">
                                <p>{{ elem.text }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col posts">
                        <h3>RECENT POSTS</h3>
                        <hr>
                        <div class="post" v-for="(elem, index) in posts" :key="index">
                            <div class="post-image">
                                <img :src="MainGetImagePath(elem.postImg)" alt="">
                            </div>
                            <div class="post-text">
                                <h5>{{ elem.postName }}</h5>
                                <div class="date">
                                    <img :src="MainGetImagePath(elem.postDateImg)" alt="">
                                    <p>{{ elem.postDate }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom-part">
            <a href="">
                <img :src="MainGetImagePath(store.goToTop)" alt="" class="gototop">
            </a>
            <div class="small-container">
                <ul>
                    <li v-for="(elem,index) in store.accounts" :key="index">
                        <img :src="MainGetImagePath(elem)" alt="">
                    </li>
                </ul>
                <p>©Fable-Children KindergartenWordPress Theme by QuanticaLabs</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;

.footer-upper-part {
    background-image: url('../assets/img/pattern.png');

    .container {
        padding-bottom: 4rem;
        padding-top: 2rem;
    }

    .row {
        display: flex;

        .col {
            width: calc(100% / 4 - 1rem);
            margin-right: 2rem;
            color: #aca8cf;

            h3 {
                padding-bottom: .8rem;
            }

            hr {
                width: 30%;
                background-color: #aca8cf;
                height: 4px;
                margin-bottom: 1.5rem;
            }

            &.about-us img {
                width: 75%;
                margin-top: 1rem;
            }

            &.archives {
                li {
                    border: 1px solid #aca8cf;
                    padding: 10px 20px;
                    margin-bottom: .5rem;
                }
            }

            &.features {
                .text {
                    margin-bottom: 2rem;
                }

                li {
                    display: flex;
                    margin-bottom: 1rem;

                    img {
                        margin-right: 1rem;
                    }
                }
            }

            & .post {
                display: flex;
                margin-bottom: 1.5rem;

                .post-image {
                    margin-right: 1rem;
                    width: 40%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .post-text {
                    width: 60%;
                    @include flex(column, space-between, flex-start);

                    h5 {
                        margin-bottom: 1rem;
                    }

                    .date {
                        @include flex(row, flex-start, center);

                        img {
                            margin-right: 1rem;
                        }

                    }
                }
            }
        }
    }
}
.footer-bottom-part{
    position: relative ;
    padding-bottom: .3rem;
    a{

        position: absolute;
        bottom: 0;
        right: 2rem;
        .gototop{
            background-color: gray;
        }
    }
    .small-container{
        width: 40%;
        margin: 2rem auto;
        ul{
            margin-bottom: 2rem;
            @include flex(row,center,center);
            li{
                background-color: #fe6601;
                margin-right: .4rem;
            }
        }
        p{
            color: gray;
            text-align: center;
        }
    }
}
</style>