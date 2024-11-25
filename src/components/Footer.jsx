import fb_icon from "../images/icons8-facebook-50.png";
import twitter_icon from "../images/icons8-twitter-50.png";
import gmail_icon from "../images/icons8-gmail-50.png";
import wechat_icon from "../images/icons8-wechat-50.png";
import qq_icon from "../images/icons8-qq-50.png";

export default function Footer(){
    return(
        <>
        <div className="pulse">
            <nav aria-label="primary"></nav>
            <a href="https://www.facebook.com/" target="_blank" title="Facebook"> 
                <img src={fb_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" title="Twitter"> 
                <img src={twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.gmail.com/" target="_blank" title="Gmail"> 
                <img src={gmail_icon} alt="gmail" />
            </a>
            <a href="https://www.wechat.com/" target="_blank" title="Wechat"> 
                <img src={wechat_icon} alt="wechat" />
            </a>
            <a href="https://www.qq.com/" target="_blank" title="QQ"> 
                <img src={qq_icon} alt="qq" />
            </a>
            <p><i>This website is neither endorsed nor affiliated by any means to any country, institution, or third party entity.</i></p>
        </div>
        </>
    )
}