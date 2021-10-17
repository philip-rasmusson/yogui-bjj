

export const ImgContainer = (props: {img: any, imgAlt: string}) => {
    return (
        <>
           <img src={props.img} alt={props.imgAlt} className="img-container"/> 
        </>
    )
}
