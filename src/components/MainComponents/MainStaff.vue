<script>
import { store } from '../../store';
import { MainGetImagePath } from '../../helper';
export default{
    name:'MainStaff',
    data(){
        return{
            store,
            MainGetImagePath
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="upper-part">
                <h2 class="upper-title">Meet our staff</h2>
                <p class="upper-secondTitle">With education and experience in early childhood care</p>
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
</style>