<script>
import { MainGetImagePath } from '../../helper';
import { store } from '../../store';
export default {
    name: 'MainClasses.vue',
    data() {
        return {
            MainGetImagePath,
            store,
            classes: [
                {
                    title: 'Little Lambs',
                    name: 'class name',
                    year: '12-24',
                    size: '9',
                    img: 'class_01-690x506.jpg',
                },
                {
                    title: 'Bouncy bears',
                    name: 'class name',
                    year: '2-3',
                    size: '12',
                    img: 'class_02-690x506.jpg',
                },
                {
                    title: 'Tenderhearts',
                    name: 'class name',
                    year: '3-4',
                    size: '15',
                    img: 'class_03-690x506.jpg',
                },
                {
                    title: 'Shining Stars',
                    name: 'class name',
                    year: '4-5',
                    size: '20',
                    img: 'class_04-690x506.jpg',
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
                <h2 class="upper-title">Our Classes</h2>
                <p class="upper-secondTitle">Our preschool program has four dedicated classes</p>
                <img class="upperImg" :src="MainGetImagePath(store.headerDivider)" alt="">
            </div>
            <div class="paragraphs">
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia praesentium laborum illum veritatis
                    commodi nihil, deleniti, quod laudantium aliquam velit corrupti eius eveniet vitae, et labore impedit?
                    Rerum, eligendi dolorum!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque sapiente saepe reiciendis iste
                    recusandae illo fugit ipsam ex excepturi, dicta laborum at enim sit quasi nulla magni deserunt ratione.
                </p>
            </div>
            <div class="row">
                <div v-for="(clas, index) in classes" :key="index" class="col">
                    <div class="card">
                        <div class="text">
                            <div class="upper-text">
                                <h2>{{ clas.title }}</h2>
                                <p>{{ clas.name }}</p>
                            </div>
                            <div class="years">
                                <p>
                                    {{ clas.year }}
                                    <br>
                                    Month-olds
                                </p>
                                <p>
                                    {{ clas.size }}
                                    <br>
                                    Class size
                                </p>
                            </div>
                        </div>
                        <div class="img-container">
                            <img :src="MainGetImagePath(clas.img)" alt="">
                            <a href="#">
                                READ MORE
                                <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixins' as *;

.paragraphs {
    @include flex(row, space-between, center);
    margin-bottom: 2rem;

    h3,
    p {
        width: calc(100% / 2 - 1rem);
        margin-right: 1rem;
    }

    h3 {
        color: #554e9e;
    }

    p {
        color: grey;
    }
}

.row {
    @include flex(row, space-between, center);
    flex-wrap: wrap;

    .col {
        width: calc(100% / 2 - 2rem);
        margin-right: 2rem;
        color: white;
        margin-bottom: 2rem;

        .card {
            @include flex(row, center, stretch);

            .text {
                width: 50%;
                background-color: #554e9e;
                padding: 1rem;
                @include flex(column, space-between, flex-start);

                .years {
                    @include flex(row, center, center);
                    align-self: center;
                    text-align: center;

                    p {
                        padding: 5px 15px;
                        font-size: .8rem;
                    }

                    p:first-child {
                        border-right: 1px solid white;
                    }
                }
            }

            .img-container {
                width: 50%;
                position: relative;
                img {
                    height: 100%;
                }

                a {
                    color: white;
                    padding: 5px 10px;
                    background-color: #fe6601;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    i {
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}</style>