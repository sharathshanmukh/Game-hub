import noImage from "../assets/no-image-placeholder-6f3882e0.webp"
export const getCroppedImageUrl=(url:string)=>{
    if (!url) return noImage;
    const word="media/"
    const index=url.indexOf(word)+word.length
    return url.slice(0,index)+"crop/600/400/"+url.slice(index)

}