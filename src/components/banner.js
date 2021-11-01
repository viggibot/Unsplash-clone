import "../index.css"
import bannerImg from "./banner.jpg"

const Banner = () => {

    return(
        <div className="Banner" style={{backgroundImage: 'url('+bannerImg+')'}}>
            <div className="banner-text">
                <div className="banner-center-text">
                    <h1>Unsplash</h1>
                    <h3>The internet source of freely-usable images</h3>
                    <h3>Powered by creators everywhere.</h3>
                    <input type="text" placeholder="Search free high-resolution photos"/>
                    <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
                </div>
                <div className="banner-bottom-text">
                    <div className="bottom-text-align">
                        <p>Photo of the Day by Daniel Menakhovshy</p>
                        <p>Read more about the Unsplash license</p>
                        <p>Photo of the Day by Daniel Menakhovshy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;