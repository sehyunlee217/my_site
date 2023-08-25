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
        text: "Paints for the mural",
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
        <div className="about px-10 pb-5 font-main  text-primary bg-font_dark dark:bg-primary_dark dark:text-font_dark">
            <Header type={"creative"} />
            <div className="flex flex-col" >
                <div className=" flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row ">
                    <Navbar />
                </div>
                <div className="pt-5 text-base">
                    The colors used in this website are variations of the traditional Korean colors also known as <span className=" font-kr_reg font-extrabold"><span className=" text-korean_red">Oh-</span><span className=" text-korean_blue">bang</span>
                        <span className=" text-korean_yellow">saek</span><span className="dark:text-background">(오방</span><span className=" text-primary_dark dark:text-background">색)</span></span>,
                    mostly inpired by the more worn-out colors of <a href="https://ko.wikipedia.org/wiki/%EB%8B%A8%EC%B2%AD#/media/%ED%8C%8C%EC%9D%BC:Gyeongbokgung-05.jpg">Dancheong(대청)</a>.
                </div>
                <div className="w-auto h-full post-grid my-5">
                    {imgPosts}
                </div>
                <div className="text-box flex text-base sm:text-xl flex-col sm:flex-row gap-4 sm:gap-10">
                    <div className="flex flex-col">
                        Hi, thanks for making it this far !
                        I've been drawing since I was able to hold on to a pencil, I think.
                        <div className="p-1"></div>
                        Some of my favorite artists includes:
                        <div className="p-1"></div>
                        <ul className="flex flex-col gap-2 sm:gap-5">
                            <li>
                                <a href="https://artsandculture.google.com/asset/due-americani-francis-bacon/4wFu8eXTUphh0Q"><b>Francis Bacon</b></a>
                                <span> - incredible way of expressing one's emotions and energy, though being quite violent.</span>
                            </li>
                            <li>
                                <a href="https://artsandculture.google.com/asset/portrait-of-madame-matisse-the-green-line/pQER-gMjYy2etA"><b>Henri Matisse</b></a>
                                <span> - the best colors.</span>
                            </li>
                            <li>
                                <a href="https://artsandculture.google.com/asset/david-michelangelo/mQG0Xq3HvT4oRQ"><b>Michelangelo</b></a>
                                <span> - the most talented sculptor in history.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        Unfortunately, most of my paintings/drawings were left behind during COVID.
                        I do plan to pick up my old paintings one day, as they're probably still there.
                        <div className="p-1"></div>
                        The drawing of Abel (The Weeknd) is my most recent drawing.
                        I haven't really had the time nor the motivation to get back into drawing after being in the military.
                        <div className="p-1"></div>
                        I hope to get back into drawing while I'm here in Toronto.
                        My current plan is to get some real life sketches done outside, at least before it gets too cold.
                    </div>
                    <div className="flex flex-col">
                        I've picked up photography last winter and it's been difficult, but also quite enjoyable.
                        It's very different from drawing but ironically similiar in the sense that you get to play around with light.
                        <div className="p-1"></div>
                        There's definitely a more nostalgic element to photography, which is my favorite part, as it captures real moments and memories.
                        <div className="p-1"></div>
                        Feel free to reach out if you want to talk about programming, art, and photography.
                    </div>
                </div>

                <div className="text-xs sm:text-base font-main flex justify-between pt-8">
                    <div>Photos shot on <span className="first-line: uppercase">Fuj<span className=" text-red-500">i</span>film</span> X-S10 using FUJ<span className=" text-red-500">I</span>NON XF18-55mm F2.8-4</div>
                    <div>More Photos at <a href="https://www.instagram.com/_joeleeframes/">@_joeleeframes</a></div>
                </div>
            </div>
        </div >

    );
};;