import p1 from "../assets/images/1.jpeg";
import p2 from "../assets/images/2.jpeg";
import p3 from "../assets/images/3.jpeg";
import p4 from "../assets/images/4.jpeg";
import p5 from "../assets/images/5.jpeg";
import p6 from "../assets/images/6.jpeg";
import p7 from "../assets/images/7.jpeg";
import p8 from "../assets/images/8.jpeg";
import p9 from "../assets/images/9.jpeg";
import p10 from "../assets/images/10.jpeg";
import p11 from "../assets/images/11.jpeg";
import p12 from "../assets/images/12.jpeg";
import p13 from "../assets/images/13.jpeg";
import p14 from "../assets/images/14.jpeg";
import p15 from "../assets/images/15.jpeg";
import p16 from "../assets/images/16.jpeg";
import p17 from "../assets/images/17.jpeg";
import p18 from "../assets/images/18.jpeg";
import p19 from "../assets/images/19.jpeg";

// Importing each individual images for now, will update with DB once 
// I fully learn & understand Node.JS / Express

const imgArray = [
    {
        id: 1,
        src: p1,
        text: "Princess Park, North Vancouver",
    },
    {
        id: 2,
        src: p2,
        text: "Colosseum, Rome",

    }, {
        id: 3,
        src: p3,
        text: "Cornerside, Milan",

    },
    {
        id: 4,
        src: p4,
        text: "Namsan Tower, Seoul",

    }, {
        id: 5,
        src: p5,
        text: "Waikiki Beach, Hawaii",

    }, {
        id: 6,
        src: p6,
        text: "St. Peter's Basilica, Vatican",

    }, {
        id: 7,
        src: p7,
        text: "Duomo di Milano, Milan",

    }, {
        id: 8,
        src: p8,
        text: "Hallasan, Jeju Island"
    }, {
        id: 9,
        src: p9,
        text:
            "Cheonggye-cheon, Seoul",
    }, {
        id: 10,
        src: p10,
        text: "Cherry Blossoms, Near home",
    }, {
        id: 11,
        src: p11,
        text: "Cypress trees, Florence",
    }, {
        id: 12,
        src: p12,
        text: "The Dance, Venezia",
    }, {
        id: 13,
        src: p13,
        text: "Abel Tesfaye(2023), Graphite on paper",
    }, {
        id: 14,
        src: p14,
        text: "Jong-ro, Seoul",
    }, {
        id: 15,
        src: p15,
        text: "Planes, Rome",
    }, {
        id: 16,
        src: p16,
        text: "Myeong-dong Market, Seoul",
    }, {
        id: 17,
        src: p17,
        text: "Cheonan, Chungcheon-do",
    }, {
        id: 18,
        src: p18,
        text: "Cafe, Jeju Island",
    }, {
        id: 19,
        src: p19,
        text: "Insa-dong, Seoul",
    },
];


function Post({ src, text }) {
    return (
        <div className="post relative cursor-pointer border-0 rounded-md items-center content-center" >
            <img src={src} />
            <div className="post-text w-full">
                <div className="flex justify-center items-center flex-wrap p-6 text-neutral-200 font-bold">{text}</div>
            </div>
        </div>
    );
}


export default function Creative() {

    const imgPosts = imgArray.map(img =>
        <Post key={img.id} src={img.src} text={img.text} />
    );

    return (
        <div className="dark:bg-primary_dark text-primary p-4 font-roboto">
            <div className="dark:text-font_dark text-xl">
                <div className=" first-letter:text-6xl">Photos shot on <span className="first-line: uppercase">Fuj<span className=" text-red-500">i</span>film</span> XS-10 using FUJ<span className=" text-red-500">I</span>NON XF18-55mm F2.8-4</div>
                <div>More Photos available at <a href="https://www.instagram.com/_joeleeframes/">@_joeleeframes</a></div>
            </div>
            <div className="w-auto h-full post-grid my-4">
                {imgPosts}
            </div>
        </div>

    );

};