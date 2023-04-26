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
    jumboImg:['slider_slide3_img1.png','slider_slide3_img2.png','slider_slide3_img3.png']
})