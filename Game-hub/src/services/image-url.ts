export const getCroppedImageUrl=(url:string)=>{
    const word="media/"
    const index=url.indexOf(word)+word.length
    return url.slice(0,index)+"crop/600/400/"+url.slice(index)

}