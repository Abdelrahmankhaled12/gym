import video from "../../assets/video.mp4"
import "./style.scss"

const Background = () => {
    return (
        <div className="background">
            <video loop autoPlay muted id="video">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Background