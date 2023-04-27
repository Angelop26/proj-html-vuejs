function MainGetImagePath(image){
    return new URL(`./assets/img/${image}`, import.meta.url).href
}
function showNext(){
    if(this.indexImage < this.slides.length - 1){
        this.indexImage++
    } else{
        this.indexImage = 0
    }
}
function showPrev(){
    if(this.indexImage > 0){
        this.indexImage--
    }else{
        this.indexImage = this.slides.length - 1
    }
}
export{MainGetImagePath,showPrev,showNext}