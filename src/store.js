import {reactive} from 'vue';

export const store = reactive({
    headerLogo:'logo.png',
    headerMenu: [
        {
            img:'home-2.png',
            text:'Home'
        },
        {
            img:'document.png',
            text:'Pages'
        },
        {
            img:'printer.png',
            text:'Blog'
        },
        {
            img:'cart.png',
            text:'Shop'
        },
        {
            img:'lab.png',
            text:'Shortcodes'
        },
        {
            img:'chat.png',
            text:'Support'
        },
        {
            img:'envelope.png',
            text:'Contact'
        },
    ],
    jumboImg:['slider_slide3_img1.png','slider_slide3_img2.png','slider_slide3_img3.png'],
    headerDivider:'header_divider.png',
    goToTop:'go_to_top.png',
    accounts:['behance.png','dribbble.png','envato.png','facebook.png','twitter.png'],
    album:['gallery_01.jpg','gallery_02.jpg','gallery_03.jpg','gallery_04.jpg']
})