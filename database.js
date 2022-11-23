products = [
    {name: "Stones Ring", 
            metal: "gold", 
            carat: 22, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "Ring" }, 
            stone: "maroon rock", 
            weight: 2.0,
            price: "20000",
            supplier: {"name": "bafna"}, 
            discription: "Round shape ring for finger" },
            {
            name: "Engagement Rings", 
            metal: "gold", 
            carat: 22, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "Ring" }, 
            stone: "Daimond", 
            weight: 10.25,
            price: "40000",
            supplier: {"name": "Sai Goldmines"}, 
            discription: "Simple Elegant daimond rings"

            },
            {
            name: "Pure Rounded", 
            metal: "gold", 
            carat: 24, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "Ring" }, 
            stone: "", 
            weight: 5.0,
            price: "25000",
            supplier: {"name": "bafna"}, 
            discription: "24 carat Pure rounded plane rings"},
        //Earrings Products............
            {
            name: "Basket Rings", 
            metal: "gold", 
            carat: 20, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "earrings" }, 
            stone: "emeralds", 
            weight: 5.0,
            price: "25000",
            supplier: {"name": "GC Raichand"}, 
            discription: "Basket shaped rings with different designs"},
            {
            name: "Chained tops", 
            metal: "gold", 
            carat: 22, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "earrings" }, 
            stone: ["Daimonds"," sapphires"], 
            weight: 6.75,
            price: "35000",
            supplier: {"name": "PNG"}, 
            discription: "Modern styled and light weighted tops for functinal use "},
            {
            name: "Hoop earrings", 
            metal: ["silver","Gold" ],
            carat: 22, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "earrings" }, 
            stone: "emeralds", 
            weight: 7.0,
            price: "47000",
            supplier: {"name": "GC Raichand"}, 
            discription: "simple hoops in gold or silver for a sleek, classic look or embellished hoops for extra flair. "},
            //Bangles Products.................
            {
            name: "Plane Bangles", 
            metal: "gold", 
            carat: 24, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "Bangles" }, 
            stone: "emeralds", 
            weight: 20.00,
            price: "90000",
            supplier: {"name": "LCM"}, 
            discription: "Plain bangles are a great understated piece of jewellery to complement an outfit and can serve a similar purpose to cufflinks – to give the overall look of an outfit an uplift and add sophistication."},
                
            {
            name: "Hoop earrings", 
            metal: ["silver","Gold" ],
            carat: 22, 
            category: { "_id":"63752928a9fbed4cd972bf08","name": "earrings" }, 
            stone: "emeralds", 
            weight: 7.0,
            price: "47000",
            supplier: {"name": "GC Raichand"}, 
            discription: "simple hoops in gold or silver for a sleek, classic look or embellished hoops for extra flair. "},     
    ]


categories = [{name: "Ring",
                productCount: 0,
                products: []},
                {name: "Earrings",
                productCount: 0,
                products: []},
                {name: "Bangles",
                productCount: 0,
                products: []},
]

suppliers = {
    name: "",
    phone: 12342567897,
    address: "",
    products: [],
    productCount: 0
}