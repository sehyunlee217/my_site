import p1 from "../../assets/images/1.jpeg";
import p2 from "../../assets/images/2.jpeg";
import p3 from "../../assets/images/3.jpeg";
import p4 from "../../assets/images/4.jpeg";
import p5 from "../../assets/images/5.jpeg";
import p6 from "../../assets/images/6.jpeg";
import p7 from "../../assets/images/7.jpeg";
import p8 from "../../assets/images/8.jpeg";
import p9 from "../../assets/images/9.jpeg";
import p10 from "../../assets/images/10.jpeg";
import p11 from "../../assets/images/11.jpeg";
import p12 from "../../assets/images/12.jpeg";
import p13 from "../../assets/images/13.jpeg";
import p14 from "../../assets/images/14.jpeg";
import p15 from "../../assets/images/15.jpeg";
import p16 from "../../assets/images/16.jpeg";
import p17 from "../../assets/images/17.jpeg";
import p18 from "../../assets/images/18.jpeg";
import p19 from "../../assets/images/19.jpeg";
import p20 from "../../assets/images/20.jpeg";
import p21 from "../../assets/images/21.png";
import p22 from "../../assets/images/22.jpeg";
import p23 from "../../assets/images/23.jpeg";
import p24 from "../../assets/images/24.jpg";



import Header from "../header";
import Navbar from "../navbar";

// Importing each individual images for now, will update with DB once 
// I fully learn & understand Node.JS / Express

const imgArray = [
    {
        id: 13,
        src: p13,
        text: "Abel Tesfaye(2023), Graphite on paper",

    },
    {
        id: 23,
        src: p23,
        text: "Study of a skull, charcoal on paper",
    },
    {
        id: 20,
        src: p20,
        text: "Waves, oil on canvas",
    }, {
        id: 21,
        src: p21,
        text: "The Fall, graphite on paper",
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
        id: 1,
        src: p1,
        text: "Princess Park, North Vancouver",
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
    {
        id: 22,
        src: p22,
        text: "Mural at an elementary school in Incheon",
    },
    {
        id: 24,
        src: p24,
        text: "Paints for the ural",
    },

];


function Post({ src, text }) {
    return (
        <div className="post relative cursor-pointer border-0 rounded-md items-center content-center" >
            <img src={src} />
            <div className="post-text w-full">
                <div className="flex justify-center items-center flex-wrap p-6 font-roboto text-font_dark font-bold">{text}</div>
            </div>
        </div>
    );
}


export default function Creative() {

    const imgPosts = imgArray.map(img =>
        <Post key={img.id} src={img.src} text={img.text} />
    );

    return (
        <div className="about px-10 pb-10 font-main  text-primary bg-font_dark dark:bg-primary_dark dark:text-font_dark">
            <Header type={"creative"} />
            <div className="flex flex-col" >
                <div className=" flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row ">
                    <Navbar />
                </div>
                <div className="w-auto h-full post-grid my-5">
                    {imgPosts}
                </div>
                <div className="pb-4 text-base sm:text-xl flex flex-col">Hi, thanks for making it this far.
                    <div className="p-1"></div>
                    I've been drawing and painting since I was able to hold on to a pencil, I think.
                    <div className="p-1"></div>
                    Some of my favorite artists includes:
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://www.francis-bacon.com/paintings">Francis Bacon</a>
                        </li>
                        <li>
                            <a href="https://www.henrimatisse.org/">Henri Matisse</a>
                        </li>
                        <li>
                            <a href="https://www.michelangelo.org/">Michelangelo</a>
                        </li>
                    </ul>
                    <div className="p-2"></div>
                    Alhough, I don't have many pictures of my paintings/drawings as I left most of them at school during COVID
                    and never got the change to pick them up. Hopefully, I'll be able to drop by and
                    grab some of my old paintings if they're still there.
                    I haven't really had the opportunity to get back into drawing and painting since I was in the military.
                    <div className="p-1"></div>
                    The drawing of Abel(The Weeknd) is the most recent one.
                    I'm hoping to get back into drawing while I'm here in Toronto.
                    Planning to get some live/quick sketching done outside, at least before it gets too cold.
                    <div className="p-1"></div>
                    I've picked up photography last winter and it's been difficult, but also quite enjoyable.
                    It's very different from drawing but similiar in the sense that you get to play around with light.
                    <div className="p-1"></div>
                    There's definitely a more nostalgic element to photography, which is my favorite part, as it captures real moments and memories.
                    <div className="p-1"></div>
                    Feel free to reach out if you want to talk about programming, art, and photography.
                </div>
                <div className="text-xs sm:text-base font-main flex justify-between">
                    <div>Photos shot on <span className="first-line: uppercase">Fuj<span className=" text-red-500">i</span>film</span> XS-10 using FUJ<span className=" text-red-500">I</span>NON XF18-55mm F2.8-4</div>
                    <div>More Photos at <a href="https://www.instagram.com/_joeleeframes/">@_joeleeframes</a></div>
                </div>
            </div>
        </div>

    );
};;