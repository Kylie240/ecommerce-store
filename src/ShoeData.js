import Img1 from "/src/images/products/1.webp"
import Img2 from "/src/images/products/2.webp"
import Img3 from "/src/images/products/3.webp"
import Img4 from "/src/images/products/4.webp"
import Img5 from "/src/images/products/5.webp"
import Img6 from "/src/images/products/6.webp"

import DunkHigh1 from "/src/images/products/otherImages/DunkHigh1.webp"
import DunkHigh2 from "/src/images/products/otherImages/DunkHigh2.webp"
import DunkHigh3 from "/src/images/products/otherImages/DunkHigh3.webp"
import DunkLow1 from "/src/images/products/otherImages/DunkLow1.webp"
import DunkLow2 from "/src/images/products/otherImages/DunkLow2.webp"
import DunkLow3 from "/src/images/products/otherImages/DunkLow3.webp"
import DunkLow4 from "/src/images/products/otherImages/DunkLow4.webp"
import FreeMetcon1 from "/src/images/products/otherImages/FreeMetcon1.webp"
import FreeMetcon4 from "/src/images/products/otherImages/FreeMetcon4.webp"
import Jordan1Mid1 from "/src/images/products/otherImages/Jordan1Mid1.webp"
import Jordan1Mid2 from "/src/images/products/otherImages/Jordan1Mid2.webp"
import Jordan1Mid3 from "/src/images/products/otherImages/Jordan1Mid3.webp"
import Jordan1Mid4 from "/src/images/products/otherImages/Jordan1Mid4.webp"
import Jordan3Retro1 from "/src/images/products/otherImages/Jordan3Retro1.webp"
import Jordan3Retro2 from "/src/images/products/otherImages/Jordan3Retro2.webp"
import Jordan3Retro4 from "/src/images/products/otherImages/Jordan3Retro4.webp"
import VaporMax4 from "/src/images/products/otherImages/VaporMax4.webp"

export const shoes = [
    {
        id: 1,
        img: Img1,
        name: "dunk low retro",
        brand: "nike",
        price: 110,
        otherImgs: [DunkLow1, DunkLow2, DunkLow3, DunkLow4],
        colors: ["white", "green"],
        sizes: [8.5, 9],
        description: `Recognizing the Dunk's roots as the top-ranking college team sneaker, the "Be True To Your School" pack looks to the original ad campaign for inspiration. Colors represent top-flight universities, while crisp leather has the perfect amount of sheen to make 'em a hands-down win. So lace up and show off that varsity spirit. Ya game?`,
    },
    {
        id: 2,
        img: Img2,
        name: "dunk high retro",
        brand: "nike",
        price: 125,
        otherImgs: [DunkHigh1, DunkHigh2, DunkHigh3],
        colors: ["white", "black"],
        sizes: [],
        description: `Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly sheened overlays and original university colors. With its classic hoops design, the Nike Dunk High Retro channels '80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.`,
    },
    {
        id: 3,
        img: Img3,
        name: "air jordan 3 retro",
        brand: "nike",
        price: 200,
        otherImgs: [Jordan3Retro1, Jordan3Retro2, Jordan3Retro4],
        colors: ["tan", "brown"],
        sizes: [],
        description: `Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.`,
    },
    {
        id: 4,
        img: Img4,
        name: "air vapormax plus",
        brand: "nike",
        price: 210,
        otherImgs: [VaporMax4],
        colors: ["black"],
        sizes: [],
        description: `The Nike Air VaporMax Plus looks to the past and propels you into the future. Nodding to the 1998 Air Max Plus with its floating cage, padded upper and heel logo, it adds revolutionary VaporMax Air technology to ramp up the comfort and create a modern look.`,
    },
    {
        id: 5,
        img: Img5,
        name: "free metcon 5",
        brand: "nike",
        price: 120,
        otherImgs: [FreeMetcon1, FreeMetcon4],
        colors: ["green", "orange"],
        sizes: [],
        description: `When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.`,
    },
    {
        id: 6,
        img: Img6,
        name: "air jordan 1 mid se",
        brand: "nike",
        price: 135,
        otherImgs: [Jordan1Mid1, Jordan1Mid2, Jordan1Mid3, Jordan1Mid4],
        colors: ["purple"],
        sizes: [],
        description: `Dope sneakers count as self-care. And with colors inspired by the aisles of your neighborhood beauty supply store (plus cloud-like Nike Air cushioning underfoot), these mid-top J's will have you feeling anything but mid. Go ahead—treat yourself.`,
    },
]