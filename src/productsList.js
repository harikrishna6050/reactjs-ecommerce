/**
 * @description "T-Shirt Product Images"
 */
import ts1 from "./images/tshirt_p1/ts_1.jpg";
import ts2 from "./images/tshirt_p1/ts_2.jpg";
import ts3 from "./images/tshirt_p1/ts_3.jpg";
import ts4 from "./images/tshirt_p1/ts_4.jpg";
import ts5 from "./images/tshirt_p1/ts_5.jpg";

/**
 * @description "Computer Product Images"
 */
import cp1 from "./images/computer_p2/computer_1.jpg";
import cp2 from "./images/computer_p2/computer_2.jpg";
import cp3 from "./images/computer_p2/computer_3.jpg";
import cp4 from "./images/computer_p2/computer_4.jpg";
import cp5 from "./images/computer_p2/computer_5.jpg";

/**
 * @description "Phone Product Images"
 */
import ph1 from "./images/phone_p3/phone_1.jpg";
import ph2 from "./images/phone_p3/phone_2.jpg";
import ph3 from "./images/phone_p3/phone_3.jpg";
import ph4 from "./images/phone_p3/phone_4.jpg";
import ph5 from "./images/phone_p3/phone_5.jpg";

/**
 * @description "Shoe Product Images"
 */
import sh1 from "./images/shoe_p4/shoe_1.jpg";
import sh2 from "./images/shoe_p4/shoe_2.jpg";
import sh3 from "./images/shoe_p4/shoe_3.jpg";
import sh4 from "./images/shoe_p4/shoe_4.jpg";
import sh5 from "./images/shoe_p4/shoe_5.jpg";

/**
 * @description "Refrigerator Product Images"
 */
import ref1 from "./images/refrigeator_p5/ref_1.jpg";
import ref2 from "./images/refrigeator_p5/ref_2.jpg";
import ref3 from "./images/refrigeator_p5/ref_3.jpg";
import ref4 from "./images/refrigeator_p5/ref_4.jpg";
import ref5 from "./images/refrigeator_p5/ref_5.jpg";

/**
 * @description "Bag Product Images"
 */
import bg1 from "./images/bag_p6/bag_1.jpg";
import bg2 from "./images/bag_p6/bag_2.jpg";
import bg3 from "./images/bag_p6/bag_3.jpg";
import bg4 from "./images/bag_p6/bag_4.jpg";
import bg5 from "./images/bag_p6/bag_5.jpg";

/**
 * @description "Watch Product Images"
 */
import w1 from "./images/watch_p7/watch_1.jpg";
import w2 from "./images/watch_p7/watch_2.jpg";
import w3 from "./images/watch_p7/watch_3.jpg";
import w4 from "./images/watch_p7/watch_4.jpg";
import w5 from "./images/watch_p7/watch_5.jpg";

/**
 * @description "Laptop Product Images"
 */
import lp1 from "./images/laptop_p8/laptop_1.jpg";
import lp2 from "./images/laptop_p8/laptop_2.jpg";
import lp3 from "./images/laptop_p8/laptop_3.jpg";
import lp4 from "./images/laptop_p8/laptop_4.jpg";
import lp5 from "./images/laptop_p8/laptop_5.jpg";


const productsList = [
    {
        idProduct: 1,
        name: "Polo Neck Half Sleeve Soild Casual Tshirt",
        price: 183,
        aboutProduct: [
            "Care Instructions: Machine Wash",
            "Fit Type: Regular Fit",
            "Fabric: Cotton Blend; Premium Export Quality Branded T-shirt; Unique Collection to your wardrobe casuals a hit of effortless cool with this best-looking t shirt.",
            "Sleeve Type: Half Sleeve; Collar Style: Polo Neck",
            "Quality: All garments are subjected to the following tests Fabric dimensional stability test and quality inspection for colours and wash fastness."
        ],
        images: [
            { idImage: 1, image: ts1 },
            { idImage: 2, image: ts2 },
            { idImage: 3, image: ts3 },
            { idImage: 4, image: ts4 },
            { idImage: 5, image: ts5 }
        ]
    },
    {
        idProduct: 2,
        name: "ASSEMBLD 2000 Core i3(black)",
        price: 13500,
        aboutProduct: [
            "Model Name  : ASSEMBLED PC",
            "Series: 2000",
            "Part Number: 123456789",
            "Colour : Black",
            "Brand : ASSEMBLD",
            "Cache Memory : 6 MB",
            "Processor Name : Core i3",
            "Chipset : INTEL",
            "Processor Brand : Intel",
            "Operating System : Windows 11 Home",
            "Expandable Memory : 16 GB"
        ],
        images: [
            { idImage: 1, image: cp1 },
            { idImage: 2, image: cp2 },
            { idImage: 3, image: cp3 },
            { idImage: 4, image: cp4 },
            { idImage: 5, image: cp5 }
        ]
    },
    {
        idProduct: 3,
        name: "vivo T2x 5G (Marine Blue, 128 GB)",
        price: 12999,
        aboutProduct: [
            "6 GB RAM | 128 GB ROM",
            "16.71 cm (6.58 inch) Full HD+ Display",
            "50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Dimensity 6020 Processor",
            "Dual Sim",
            "Marine Blue",
            "Full HD+ LCD Display",
            "Android 13",
            "Octa Core"
        ],
        images: [
            { idImage: 1, image: ph1 },
            { idImage: 2, image: ph2 },
            { idImage: 3, image: ph3 },
            { idImage: 4, image: ph4 },
            { idImage: 5, image: ph5 }
        ]
    },
    {
        idProduct: 4,
        name: "WOODLAND Casuals For Men  (Camel)",
        price: 2397,
        aboutProduct: [
            "Color : Camel",
            "Outer material : Leather",
            "Ideal for : Men",
            "Occasion : Casual",
            "Type For Casual : Casuals",
            "pack of : 1"
        ],
        images: [
            { idImage: 1, image: sh1 },
            { idImage: 2, image: sh2 },
            { idImage: 3, image: sh3 },
            { idImage: 4, image: sh4 },
            { idImage: 5, image: sh5 }
        ]
    },
    {
        idProduct: 5,
        name: "LG 185 L Direct Cool Single Door 5 Star Refrigerator",
        price: 16890,
        aboutProduct: [
            "185 L : Good for couples and small families",
            "Smart Inverter Compressor",
            "5 Star : For Energy savings up to 55%",
            "Direct Cool : Economical, consumes less electricity, requires manual defrosting",
            "Type : Single Door",
            "Refrigerator Type : Top Mount",
            "Defrosting Type : Direct Cool",
            "Capacity : 185 L"
        ],
        images: [
            { idImage: 1, image: ref1 },
            { idImage: 2, image: ref2 },
            { idImage: 3, image: ref3 },
            { idImage: 4, image: ref4 },
            { idImage: 5, image: ref5 }
        ]
    },
    {
        idProduct: 6,
        name: "Cosmus Small 17 L Backpack Bag",
        price: 595,
        aboutProduct: [
            "Type : Backpack",
            "Ideal For : Men & Women",
            "Trolley Support : No",
            "Laptop Sleeve : No",
            "Color Code : INDIGO",
            "Color : Blue"
        ],
        images: [
            { idImage: 1, image: bg1 },
            { idImage: 2, image: bg2 },
            { idImage: 3, image: bg3 },
            { idImage: 4, image: bg4 },
            { idImage: 5, image: bg5 }
        ]
    },
    {
        idProduct: 7,
        name: "LIMESTONE watch",
        price: 250,
        aboutProduct: [
            "Water Resistant : Yes",
            "Display Type : Analog",
            "Series : Day and Date Functioning Steel Strap New Quartz",
            "Watch Type : Wrist Watch",
            "Shock Resistance : Yes",
            "Power Source : Japanese Battery Powered"
        ],
        images: [
            { idImage: 1, image: w1 },
            { idImage: 2, image: w2 },
            { idImage: 3, image: w3 },
            { idImage: 4, image: w4 },
            { idImage: 5, image: w5 }
        ]
    },
    {
        idProduct: 8,
        name: "APPLE 2022 MacBook AIR M2 Laptop",
        price: 910000,
        aboutProduct: [
            "Stylish & Portable Thin and Light Laptop",
            "13.6 Inch Liquid Retina Display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology",
            "Light Laptop without Optical Disk Drive",
            "Battery Backup : Upto 18 Hours",
            "Power Supply : 30 W USB-C Power Adapter",
            "SSD : Yes",
            "SSD Capacity : 256 GB",
            "RAM : 8 GB"
        ],
        images: [
            { idImage: 1, image: lp1 },
            { idImage: 2, image: lp2 },
            { idImage: 3, image: lp3 },
            { idImage: 4, image: lp4 },
            { idImage: 5, image: lp5 }
        ]
    }
];

export default productsList;