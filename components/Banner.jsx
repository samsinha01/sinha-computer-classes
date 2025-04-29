const Banner = ({img})=>{
    return(
        <>
            <figure className="h-fit">
                <img src={img} alt="banner img" className="w-full h-full"/>
            </figure>
        </>
    )
}

export default Banner;