import p1 from "../assets/images/1.jpeg";
import p2 from "../assets/images/2.jpeg";
import p3 from "../assets/images/3.jpeg";
import p4 from "../assets/images/4.jpeg";
import p5 from "../assets/images/5.jpeg";
import p6 from "../assets/images/6.jpeg";
import p7 from "../assets/images/7.jpeg";
import p8 from "../assets/images/8.jpeg";

const imgArray = [p1, p2, p3, p4, p5, p6, p7, p8];


export default function Creative() {

    const imgPosts = imgArray.map(img =>
        <div className="post p-1" >
            <img src={img} />
        </div>
    );

    console.log(imgPosts);
    return (
        <div className="h-screen flex flex-wrap">
            {imgPosts}
        </div>
    );

}