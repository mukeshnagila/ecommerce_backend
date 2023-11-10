const productModel = require("../Models/productModel")

const addProduct = async(req,res) => {
    try{
        // const productDetails = req.body;
        const productDetails =  [

            //////////////// ELECTRONIC ///////////////////
        
            ////--------IPHONE-----------///////
            {
                "id" : 1,
                "category" : "electronic",
                "subcategory" : "mobile",
                "minicategory" : "iphone",
                "name" : "Apple iPhone 15 (128 GB) - Blue",
                "image" : "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX569_.jpg",
                "price" : 79900,
                "oldprice" : 85000,
                "discr" : "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much front is tougher than any smartphone glass. And the 6.1 Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14.48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.POWERHOUSE A16 BIONIC CHIP — The superfast chip powers advanced features like computational photography, fluid Dynamic Island transitions, and Voice Isolation for phone calls. And A16 Bionic is incredibly efficient to help deliver great all-day battery life."
            },
            {
                "id": 2,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "Apple iPhone 13 (128GB) - Starlight",
                "image": "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 50749,
                "oldprice": 55000,
                "discr": "15 cm (6.1-inch) Super Retina XDR display, Cinematic mode, Advanced dual-camera system (12MP Wide, Ultra Wide), Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording, 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording, A15 Bionic chip for lightning-fast performance."
            },
            {
                "id": 3,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "Apple iPhone 13 (128GB) - Pink",
                "image": "https://m.media-amazon.com/images/I/61l9ppRIiqL._SX342_.jpg",
                "price": 50749,
                "oldprice": 55999,
                "discr": "15 cm (6.1-inch) Super Retina XDR display; Cinematic mode for video depth of field and focus shifts; Advanced dual-camera system (12MP Wide, Ultra Wide) with Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording; 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording; A15 Bionic chip for high-speed performance."
            },
            {
                "id": 4,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "Apple iPhone 13 (128GB) - Blue",
                "image": "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 50499,
                "oldprice": 55999,
                "discr": "15 cm (6.1-inch) Super Retina XDR display; Cinematic mode for video depth of field and focus shifts; Advanced dual-camera system (12MP Wide, Ultra Wide) with Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording; 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording; A15 Bionic chip for high-speed performance."
            },
            {
                "id": 5,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
                "image": "https://m.media-amazon.com/images/I/41037bXz-GL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 159900,
                "oldprice": "160000",
                "discr": " iPhone 15 Pro Max boasts an aerospace-grade titanium design, Ceramic Shield front, and is rugged against water, dust, and splashes. Its 6.7” Super Retina XDR display offers ProMotion with 120Hz refresh rates and Dynamic Island alerts. The A17 Pro chip delivers immersive gaming, efficiency, and all-day battery life. With 7 pro lenses, the camera system captures high-res photos, while the 48MP Main camera and 5x Telephoto camera enhance your photography experience."
            },
            {
                "id": 6,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "Apple iPhone 15 Plus (128 GB) - Black",
                "image": "https://m.media-amazon.com/images/I/71zFRCcMS2L._SX569_.jpg",
                "price": 89900,
                "oldprice": 92000,
                "discr": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more. INNOVATIVE DESIGN — iPhone 15 Plus features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass. And the 6.7 Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14. 48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up."
            },
            {
                "id": 7,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "Apple iPhone 14 Pro (256 GB) - Gold",
                "image": "https://m.media-amazon.com/images/I/71ZDY57yTQL._SX342_.jpg",
                "price": 139900,
                "oldprice": 140000,
                "discr": "15.54 cm (6.1-inch) Super Retina XDR display with Always-On and ProMotion, Dynamic Island interaction, 48MP Main camera, 4K Dolby Vision Cinematic mode, Action mode for steady videos, all-day battery life, Crash Detection for safety, A16 Bionic chip with superfast 5G, Ceramic Shield durability, iOS 16 for personalization and communication."
            },
            {
                "id": 8,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "i Phone X (Space Grey, 64 GB) with Earbuds (Open Box)",
                "image": "https://m.media-amazon.com/images/I/31lnb9O-hcL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 91000,
                "oldprice": 100000,
                "discr": "iPhone X: 64 GB ROM, 14.73 cm (5.8-inch) Super Retina HD Display, 12MP + 12MP rear cameras, 7MP Front Camera, A11 Bionic Chip with Neural Engine, iOS 13 Compatible. Includes smartphone, charger adapter, cable, earbuds. Open box: products on store display."
            },
            {
                "id": 9,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "APPLE iPhone 6 (Gold, 32 GB)",
                "image": "https://rukminim2.flixcart.com/image/416/416/j6mhxu80/mobile/7/n/z/apple-iphone-6-mq3e2hn-a-original-imaexfzbdzgctzrv.jpeg?q=70",
                "price": 20130,
                "oldprice": 30780,
                "discr": "iPhone 6 (Gold) - Model Number MQ3E2HN/A with a 11.94 cm (4.7-inch) Retina HD Display, LED-backlit, and fingerprint-resistant oleophobic coating. It comes with a single SIM slot, no OTG support, and a SAR value of 1.6 W/kg. The package includes the handset, Lightning charger, quick start guide, data cable, and headphones."
            },
            {
                "id": 10,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "iphone",
                "name": "APPLE iPhone 12 (White, 64 GB)",
                "image": "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70",
                "price": 40999,
                "oldprice": 49900,
                "discr": "Dive into a world of crystal-clear visuals with this iPhone’s Super Retina XDR Display. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be."
            },
            
            //////-------- SAMSUNG ---------///
        
            {
                "id": 11,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Samsung",
                "name": "Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus",
                "image": "https://m.media-amazon.com/images/I/81xJ80yRRzL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 7528,
                "oldprice": 8000,
                "discr": "Powerful MediaTek Helio P35 Octa Core 2.3GHz, Android 12, One UI Core 4.1, 13MP+2MP dual camera (13MP main, 2MP front), 6.5-inch LCD with 720 x 1600 resolution, 5000mAh battery, 1-year device warranty, and 6-month warranty for in-box accessories."
            },{
                "id": 12,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Samsung",
                "name": "Samsung Galaxy M13 (Midnight Blue, 6GB, 128GB Storage) |",
                "image": "https://m.media-amazon.com/images/I/81PcAHZxgLL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 11228,
                "oldprice": 17999,
                "discr": "Up to 12GB RAM with RAM Plus, 128GB internal memory (expandable to 1TB), dual SIM (Nano), 50MP+5MP+2MP triple camera setup (50MP main, 5MP, 2MP) and 8MP front camera. It comes with a 6000mAh lithium-ion battery and 1-year device warranty, along with a 6-month warranty for in-box accessories. It runs on Android 12 with One UI Core 4 and features a powerful Octa Core Processor."
            },
            {
                "id": 13,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Samsung",
                "name": "Samsung Galaxy Z Fold4 5G (Graygreen, 12GB RAM, 256GB Storage)",
                "image": "https://m.media-amazon.com/images/I/71Vd1+ZnY-L._SX679_.jpg",
                "price": 139999,
                "oldprice": 150000,
                "discr": "Stands out. Stands up. Unfolds. The Galaxy Z Fold4 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means there's more screen and no black dot getting between you and the breathtaking Infinity Flex Display., Do more than more with Multi View. Whether toggling between texts or catching up on emails, take full advantage of the expansive Main Screen with Multi View. PC-like power in your pocket transforms apps optimized with One UI to give you menus and more in a glance, New Taskbar for PC-like multitasking. Wipe out tasks in fewer taps. Add apps to the Taskbar for quick navigation and bouncing between windows when you're in the groove.4 And with App Pair, one tap launches up to three apps, all sharing one super-productive screen"
            },
            {
                "id": 14,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Samsung",
                "name": "Samsung Galaxy M34 5G (Midnight Blue,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|",
                "image": "https://m.media-amazon.com/images/I/91fonhAtoAL._SX569_.jpg",
                "price": 18548,
                "oldprice": 25999,
                "discr": "16.42 cm (6.5-inch) Super AMOLED display with FHD+ resolution (1080 x 2340 pixels) protected by Corning Gorilla Glass 5. It features a 50MP+8MP+2MP triple camera setup (50MP main, 8MP, 2MP) and a 13MP front camera. The device is powered by a 6000mAh lithium-ion battery and comes with a 1-year warranty for the device and 6-month warranty for in-box accessories, including batteries, from the date of purchase."
            },
            {
                "id": 15,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Samsung",
                "name": "Samsung Galaxy F54 5G (Stardust Silver, 256 GB) (8 GB RAM)",
                "image": "https://m.media-amazon.com/images/I/51OxXF2ProL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 24960,
                "oldprice": 29999,
                "discr": "【Display】:- 17.02 cm (6.7 inch) Full HD+ Display | Boundless Entertainment, Designed with a 16.95 cm (6.7) FHD display that combines a super AMOLED screen with 120 Hz refresh rates, this Galaxy series phone is sure to thrill you all day with its boundless entertainment. With the addition of the Plus Eye Comfort Shield, which protects your eyes against emissions from blue light, you get to witness a super immersive experience—all the time."
            },
            {
                "id": 16,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Samsung",
                "name": "Samsung Galaxy Z Flip4 5G (Graphite, 8GB RAM, 256GB Storage)",
                "image": "https://m.media-amazon.com/images/I/61O70Uca38L._AC_UY327_FMwebp_QL65_.jpg",
                "price": 84999,
                "oldprice": 106999,
                "discr": "Style and function that fits in your pocket. A pocket-sized statement piece, small yet mighty when folded, this phone is compact enough to fit in your palm, leaving a big impression with sleek, hazy colors that match your vibe. Our toughest Samsung Galaxy foldables ever, the world's first water-resistant foldable smartphones. These scratch-defying devices feature exclusive Corning Gorilla Glass Victus+ on the outside and super durable Ultra Thin Glass on the inside, with the hinge protected by Armor Aluminum — our toughest aluminum frame. Capture life with new perspectives using the agile camera angles. Quick Shot allows you to shoot a selfie right from the Cover Screen, even enabling a ratio change to show you the full frame before you shoot. Unfold and take position with FlexCam, holding up the camera for hands-free group shots or mind-blowing selfies"
            },
        
            ///-------- ONEPLUS ---------///
        
            {
                "id": 17,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "OnePlus Nord 3 5G (Tempest Gray, 16GB RAM, 256GB Storage)",
                "image": "https://m.media-amazon.com/images/I/71NYjHiZhAL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 37999,
                "oldprice": 40000,
                "discr": "Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro lens f/2.4 and a FOV 89°; 16MP Front (Selfie) Camera with EIS supported Camera Features: Photo, Video, Night, Portrait, PANO, TIME-LAPSE, and Dual-view video Display: 6.74 Inches; 120 Hz AMOLED FHD+ Display with Corning Gorilla Glass Victus; Resolution: 2772 X 1240 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming"
            },
            {
                "id": 18,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
                "image": "https://m.media-amazon.com/images/I/61fDxgcyBDL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 17998,
                "oldprice": 20000,
                "discr": "Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters and Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9"
            },
            {
                "id": 19,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
                "image": "https://m.media-amazon.com/images/I/41o3CoW58tL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 27999,
                "oldprice": 38999,
                "discr": "Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471 "
            },
            {
                "id": 20,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)",
                "image": "https://m.media-amazon.com/images/I/41W0dAnmX9L._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 33999,
                "oldprice": 40000,
                "discr": "Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro lens f/2.4 and a FOV 89°; 16MP Front (Selfie) Camera with EIS supported Display: 6.74 Inches; 120 Hz AMOLED FHD+ Display with Corning Gorilla Glass Victus; Resolution: 2772 X 1240 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming"
            },
            {
                "id": 21,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)",
                "image": "https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 39999,
                "oldprice": 40000,
                "discr": "Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode, Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) "
            },
            {
                "id": 22,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "OnePlus 10T 5G (Jade Green, 8GB RAM, 128GB Storage)",
                "image": "https://m.media-amazon.com/images/I/51UTlDMI0wL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 39999,
                "oldprice": 40000,
                "discr": "Camera Features: Nightscape Mode, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Cat/Dog Face Focus, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode ,Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP macro lens with LED Flash; 16MP Front (Selfie) Camera with EIS support"
            },
            {
                "id": 23,
                "category": "electronic",
                "subcategory": "mobile",
                "minicategory": "Oneplus",
                "name": "(Refurbished) OnePlus 7 (Mirror Grey, 6GB RAM, AMOLED Display, 128GB Storage, 3700mAH Battery)",
                "image": "https://m.media-amazon.com/images/I/41w3cMJiWhL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 13999,
                "oldprice": 15000,
                "discr": "Product will be in refurbished condition and may have a few visible signs of earlier use. Backed by minimum six months Warranty provided by the seller. This product has been professionally inspected and tested to be fully functional by the Sellers.This product is in “Excellent condition”. The screen and body show no signs of cosmetic damage visible from 30 centimeters away."
            },
        
            ///////////////////////// KITCHEN /////////////////////////////////
        
            ///------- REFRIGETOR --------///
        
            {
                "id": 24,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 240 L 3 Frost-Free Smart Inverter Double Door Refrigerator",
                "image": "https://m.media-amazon.com/images/I/715tyVxjdOL._AC_UY327_FMwebp_QL65_.jpg",
                "price": 25990,
                "oldprice": 26000,
                "discr": "Special Features: Convertible – Freezer to fridge conversion offers you more space to suit your needs, Multi Air Flow - Distribute and circulate cool air to every corner for proper and even cooling; Temperature Control- I Micom, Smart Diagnosis – Detects problem automatically Smart Connect- helps connect your refrigerator to home inverter, Deodorizer - eliminates bad smells and preserves food's original flavour and aroma for longer, Humidity Controller - maintaining crispness, Work without stabilizer, Lock, Handle type – Pocket"
            },
            {
                "id": 25,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator",
                "image": "https://m.media-amazon.com/images/I/312SthuvfYL._SY445_SX342_QL70_FMwebp_.jpg",
                "price": 24999,
                "oldprice": 26000,
                "discr": "Storage or Interior description: Total no. of compartments: 02 | No. of Shelves: 03, Drawers: 01, Twist Ice Maker, Chiller Zone, Anti-Bacterial gasket, Humidity Controller, Vegetable box with 28 L capacity, Tray Egg, Anti Rat Bite (Sleeve) Special Features: Door Cooling+, Temp. Control: Knob I Micom, Works without Stabilizer (100-310V), Smart Diagnosis, Smart Connect, Jet Ice, Deodorizer: Catechin, Multi Air Flow, Humidity Controller, Lock"
            },
            {
                "id": 26,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 224 L 4 Direct-Cool Smart Inverter Compressor Single-Door Refrigerator",
                "image": "https://m.media-amazon.com/images/I/41-IBQ+X1ZL._SX342_SY445_.jpg",
                "price": 19990,
                "oldprice": 21000,
                "discr": "Spl. Features : Moist ‘n’ Fresh is an innovative lattice-patterned box cover which maintains the moisture at the optimal level | anti-bacterial gasket | Fastest Ice Making | Anti rat bite | Vegetable basket with 21 liters capacity | Tray egg | 3+4 Door basket (full size/half size) | Lock | Works without stabilizer: 90v ~ 310v | Tray Ice | Base stand with drawer | Solar Smart*"
            },
            {
                "id": 27,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 594 L Frost-Free Inverter Linear Wi-Fi Side-By-Side Refrigerator",
                "image": "https://m.media-amazon.com/images/I/61bxH6ghbEL._SY550_.jpg",
                "price": 91990,
                "oldprice": 100000,
                "discr": "Energy savings with Inverter linear compressor: provides higher energy efficiency and reduces energy wastage | helps maintain the appearance and taste of fresh products for longer by reducing temperature fluctuations ,Special Features: Door Cooling+, LED Display, Multi Air Flow, LG ThinQ (Wi-Fi): control and diagnose your refrigerator by your smart phone, Smart Diagnosis, Hygiene Fresh+, Exterior Display"
            },
            {
                "id": 28,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 204 L 4 Star Inverter Direct-Cool Single Door Refrigerator",
                "image": "https://m.media-amazon.com/images/I/61P0qG8nwlL._SX342_.jpg",
                "price": 21000,
                "oldprice": 25000,
                "discr": "Smart inverter compressor: Unmatched performance, great savings and super silent operation,Manufacturer warranty: 1 year on product, 10 years on compressor T&C, Capacity 204 liters: Suitable for families with 2 to 3 members and bachelors| Freezer capacity: 27.5L, Fresh food capacity: 176.5L"
            },
            {
                "id": 29,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 190 L 2 Star Direct-Cool Single Door Refrigerator",
                "image": "https://m.media-amazon.com/images/I/61lkeimC+sL._SX342_.jpg",
                "price": 16190,
                "oldprice": 18000,
                "discr": "The star rating changes are as per BEE guidelines on or before 1st Jan 2023, Capacity 190 liters: Suitable for families with 2 to 3 members and bachelors| Freezer capacity: 22L, Fresh food capacity: 168L, Conventional compressor : Unmatched performance, great savings and super silent operation"
            },
            {
                "id": 30,
                "category": "Ketchen",
                "subcategory": "Refrigrtor",
                "minicategory": "LG",
                "name": "LG 594 L Frost-Free Inverter Linear Wi-Fi Side-By-Side Refrigerator",
                "image": "https://m.media-amazon.com/images/I/51hvljNyn+L._SY550_.jpg",
                "price": 99999,
                "oldprice": 110000,
                "discr": "Capacity 594 L: Suitable for Suitable for families with 5 or more members I freezer capacity: 250 L, fresh food capacity: 344 L, Energy savings with Inverter linear compressor: provides higher energy efficiency and reduces energy wastage | helps maintain the appearance and taste of fresh products for longer by reducing temperature fluctuations, Special Features: Door Cooling+, LED Display, Multi Air Flow, LG ThinQ (Wi-Fi): control and diagnose your refrigerator by your smart phone, Smart Diagnosis, Hygiene Fresh+, Exterior Display"
            },
        
            ///------- COOKER ------///
            
            {
                "id": 31,
                "category": "Ketchen",
                "subcategory": "Cooker",
                "minicategory": "Pigeon",
                "name": "Pigeon By Stovekraft Special Aluminium Pressure Cooker with Outer Lid Induction",
                "image": "https://m.media-amazon.com/images/I/51xCU5ylKAL._SX450_.jpg",
                "price": 699,
                "oldprice": 800,
                "discr": "Aesthetically designed cooker that comes with easy grip & stay cool handle, The cooker's handle comes with a special lock arrangement for easy opening, pecially formulated food-grade rubber gasket for longer life; Gasket release system for safety"
            },
            {
                "id": 32,
                "category": "Ketchen",
                "subcategory": "Cooker",
                "minicategory": "Pigeon",
                "name": "Pigeon by Stovekraft Titanium Hard Anodized Aluminium Outer Lid Pressure Cooker",
                "image": "https://m.media-amazon.com/images/I/31MXX-EG+6S._SY300_SX300_.jpg",
                "price": 1745,
                "oldprice": 2000,
                "discr": "Brand: Pigeon; Series: Titanium; Type: Pressure Cooker ; How to Use: Use Soft sponge & luke warm water for cleaning, Avoid using sharp abrasive cleaners for cleaning, Color: Black; Body Material: Hard Anodized; Induction Base: Yes, Lid locking mechanism: Yes, Package Contents: 1 Pressure Cooker with Lid; Warranty: 5 Year Manufacturing Warranty"
            },
            {
                "id": 33,
                "category": "Ketchen",
                "subcategory": "Cooker",
                "minicategory": "Pigeon",
                "name": "Pigeon by Stovekraft 5 Litre Special Plus Contura Hard",
                "image": "https://m.media-amazon.com/images/I/41tsUUWqqbL._SY300_SX300_QL70_FMwebp_.jpg",
                "price": 1500,
                "oldprice": 2000,
                "discr": "Made from High Grade Vargin Aluminium Conforming to IS 21:1992, Ergonomic User Friendly handle, Sturdy Hard Anodised Body, Precision Weight Valve"
            },
            {
                "id": 34,
                "category": "Ketchen",
                "subcategory": "Cooker",
                "minicategory": "Pigeon",
                "name": "Pigeon by Stovekraft 12736 Aluminium Pressure Cooker ",
                "image": "https://m.media-amazon.com/images/I/61Nyz8vx4BL._SX450_.jpg",
                "price": 628,
                "oldprice": 700,
                "discr": "Pressure Cooker 3 Liter is Made from High Grade Vargin Aluminium Conforming to IS 21:1992, Main features of cooker 3 Liters are Ergonomic User Friendly handle, Sturdy Aluminium Body, Precision Weight Valve, Metallic Safety Plug, This Pressure Cooker 3 litre is ISI Certified Pressure Cooker; The Pressure Cooker is packed dismantled and the User need to assemble it"
            },
            {
                "id": 35,
                "category": "Ketchen",
                "subcategory": "Cooker",
                "minicategory": "Pigeon",
                "name": "Pigeon By Stovekraft Hard Anodised Pressure Cooker with Outer Lid Induction and Gas Stove",
                "image": "https://m.media-amazon.com/images/I/21da60SlgNL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 899,
                "oldprice": 1000,
                "discr": "Specially formulated food -grade rubber gasket for longer life and Gasket release system for safety, It also comes with thicker base for rapid cooking and even pressure, Aesthetically designed cooker comes with easy grip & stay cool handle"
            },
            {
                "id": 36,
                "category": "Ketchen",
                "subcategory": "Cooker",
                "minicategory": "Pigeon",
                "name": "Pigeon by Stovekraft Elite Shine 2 L Tri-Ply Body Outer Lid Pressure Cooker Induction and Gas Stove ",
                "image": "https://m.media-amazon.com/images/I/31dDpzY2ZIL._SX300_SY300_QL70_FMwebp_.jpg",
                "price": 999,
                "oldprice": 1500,
                "discr": "3 layer Body: Stainless Steel 304, Aluminium 1050, Stainless Steel 430Try-Ply Benefits: Food Safety & Durable, Quick & Even Heating, Induction Ready & Wear Resistant., Safety Features: Stainless Steel weight valve, Gasket Release Vent system to release excess pressure, Safety Plug whichmelts when pressure raises beyond safety level."
            },
        
            ///////////////////// MEN'S ////////////////////////////////
        
            //------- KURTa--------///
        
            {
                "id": 37,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Mens Blended Cotton Kurtas",
                "image": "https://m.media-amazon.com/images/I/71IrHu-pe7L._SY606_.jpg",
                "price": 2999,
                "oldprice": 3500,
                "discr": "Gifts Purpose: Everyone uses partywear on numerous occasions, give this kurta set as a thoughtful gift for your loved one's next birthday, anniversary, wedding or any occasion. This is why it makes the perfect present for your dad, husband, son, or friend., Material :- Comfortable Blended Cotton material which is specially designed for your skin which will provide you a elegant and trendy look"
            },
            {
                "id": 38,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Men Kurta Set",
                "image": "https://m.media-amazon.com/images/I/51zwq-gUYIL._SY741_.jpg",
                "price": 1999,
                "oldprice": 2500,
                "discr": "Stylish Kurta set to bring out your best style game in functions. Charming and classic outfit. Highlighted with velvet collar and fancy buttons.,Fashion: Your amazing fashion sense inspires everyone. Carry forward this tradition and flaunt in your best look teaming in this ethinic wear on any occasion, Brand: Manyavar is your one stop destination for making any given day an occasion, we understand that your clothes are an extension of your personality. The entire garment is made by a single artisan instead of chain-system production. We recommend to use this item on your special occasion"
            },
            {
                "id": 39,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Elegant Self Design Striped Kurta Only for Men",
                "image": "https://m.media-amazon.com/images/I/618dGGtTxdL._SY741_.jpg",
                "price": 1049,
                "oldprice": 1300,
                "discr": "Material :- Comfortable Cotton material which is specially designed for your skin which will provide you a elegant and trendy look, Design :- This SelfDesign Full Sleeves knee Long kurta underlines its casual and ethnic allure through its latest design.,Fashion :- Your amazing fashion sense inspires everyone. Carry forward this tradition and flaunt in your best look teaming in this ethinic wear on any occasion"
            },
            {
                "id": 40,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Men's Cotton Kurta",
                "image": "https://m.media-amazon.com/images/I/51nhk5tXF1L._SY741_.jpg",
                "price": 1999,
                "oldprice": 2200,
                "discr": "Vedant Fashions Limited. Srijan Industrial Logistics Park, Part-C, Block-A, Dhulagarh, HOWRAH - 711302, Vedant Fashions Private Limited Kolkata(Manthan) - 8013441072, Vedant Fashions Private Limited Kolkata(Manthan) - 8013441072"
            },
            {
                "id": 41,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Blended Viscose Jacquard Self Design Short Kurta for Men",
                "image": "https://m.media-amazon.com/images/I/814GHovUFvL._SX569_.jpg",
                "price": 1499,
                "oldprice": 2000,
                "discr": "Material :- Comfortable Cotton Silk material which is specially designed for your skin which will provide you a elegant and trendy look, Design :- This SelfDesign Printed Full Sleeves Short kurta underlines its casual and ethnic allure through its latest design., Brand :- Manyavar is your one stop destination for making any given day an occasion, we understand that your clothes are an extension of your personality.The entire garment is made by a single artisan instead of chain-system production. We recommend to use this item on your special occasion"
            },
            {
                "id": 42,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Cotton Self Patterened Jacquard Short-Fit Kurta for Men",
                "image": "https://m.media-amazon.com/images/I/51XovDbcyxL._SX679_.jpg",
                "price": 2499,
                "oldprice": 3000,
                "discr": "Material :- Comfortable material which is specially designed for your skin which will provide you a elegant and trendy look, Fashion :- Your amazing fashion sense inspires everyone. Carry forward this tradition and flaunt in your best look teaming in this ethinic wear on any occasion, Brand :- Manyavar is your one stop destination for making any given day an occasion, we understand that your clothes are an extension of your personality. The entire garment is made by a single artisan instead of chain-system production. We recommend to use this item on your special occasion"
            },
            {
                "id": 43,
                "category": "Men's",
                "subcategory": "Kurta",
                "minicategory": "Manyavar",
                "name": "Manyavar Denim Leaf Printed Full Sleeves Casual Kurta for Men",
                "image": "https://m.media-amazon.com/images/I/61+DMBOI51L._SY741_.jpg",
                "price": 2999,
                "oldprice": 3200,
                "discr": "Brand :- Manyavar is your one stop destination for making any given day an occasion, we understand that your clothes are an extension of your personality.The entire garment is made by a single artisan instead of chain-system production. We recommend to use this item on your special occasion, Everyone uses partywear on numerous occasions, give this ethinic outfit as a thoughtful gift for your loved one's next birthday, anniversary, wedding or any occasion. This is why it makes the perfect present for your dad, husband, son, or friend."
            },
        
            ///--------- Shoes-------////
        
            {
                "id": 44,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Mens JasperRunning Shoes",
                "image": "https://m.media-amazon.com/images/I/610+hWjuh1L._SY395_.jpg",
                "price": 999,
                "oldprice": 1200,
                "discr": "Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner, Campus Activewear Pvt. Ltd., C9&10 Salaqui Industrial Area, Dehradun 248197"
            },
            {
                "id": 45,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Men's Refresh PRO Running Shoes",
                "image": "https://m.media-amazon.com/images/I/61s8dfPFqaL._SY500_.jpg",
                "price": 849,
                "oldprice": 900,
                "discr": "Shoes' Upper- These men's shoes are ideal for everyday wear with their breathable mesh upper, ensuring your feet stay dry and comfortable. The design effortlessly complements formal or casual outfits, whether at work or college. Additionally, they are perfect for engaging in activities such as light hiking, cycling, gymming, cardio, running, or light jogs. The lightweight material guarantees all-day comfort., Shoes' Outsole- The support tech mechanism ensures proper foot movement, preventing inward or outward leaning and minimizing the risk of injuries in these men's running shoes. They are well-suited for a range of outdoor activities, including running, gym workouts, walking, jogging, cycling, and cardio exercises"
            },
            {
                "id": 46,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Mens 5g-820 Running Shoe",
                "image": "https://m.media-amazon.com/images/I/61YJEH9sB+L._SY500_.jpg",
                "price": 999,
                "oldprice": 1200,
                "discr": "Upper- Embrace breathable perfection with the mesh upper that ensures excellent ventilation. The lace-up closure provides a secure fit for every occasion imaginable – whether it's a party, date night, college, or the office, these shoes adapt effortlessly to your dynamic lifestyle, Outsole- Feel the ultimate comfort with the Air Capsule Outsole, which delivers remarkable comfort and support. The Air Capsule unit at the heel of these shoes for men not only provides cushioning but also shields your heel with each landing, making every stride a protected one."
            },
            {
                "id": 47,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Men's First Running Shoes",
                "image": "https://m.media-amazon.com/images/I/61+u7BBiaxL._SY625_.jpg",
                "price": 1119,
                "oldprice": 1500,
                "discr": "Shoes' Upper- These shoes for men have a breathable mesh upper that lets air flow inside and keeps your feet dry and cozy. You can wear them with any outfit, whether formal or casual, for work or college. They are also suitable for outdoor activities like yoga, running, jogging, or brisk walking. The lightweight material of these shoes makes your feet feel comfortable all day long!, Shoes' Outsole- These men's shoes come equipped with a special Ball Tech in the midsole that cushions your heels for a smooth landing. This addition is colorful and fun, and they make your running shoes bounce more. You can wear these shoes for many outdoor activities, like running, gymming, walking, power yoga, and more"
            },
            {
                "id": 48,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Men's Tyson PRO Running Shoes",
                "image": "https://m.media-amazon.com/images/I/61fYEso0WQL._SY625_.jpg",
                "price": 599,
                "oldprice": 800,
                "discr": "Shoes' Upper- Embark on a journey of supreme comfort with these men's shoes, boasting a breathable mesh upper that maintains foot dryness and comfort throughout your everyday ventures. Their adaptability effortlessly elevates both formal and casual outfits, rendering them perfect for both work and college, environments. Tailored to accommodate light hiking, cycling, gym routines, cardio sessions, running, and leisurely jogs, these shoes are a versatile companion."
            },
            {
                "id": 49,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Men's Hurricane Running Shoes",
                "image": "https://m.media-amazon.com/images/I/718dv09lBlL._SY500_.jpg",
                "price": 849,
                "oldprice": 1000,
                "discr": "Shoes' Upper- The breathable mesh upper of these shoes for men ensures comfortable feet with optimal air circulation. Their versatile design seamlessly complements both formal and casual outfits, be it for work or college. Embrace their support during outdoor activities like yoga, running, jogging, or brisk walking. The lightweight material ensures all-day ease for your feet!, Shoes' Insole- Embrace the personalized fit offered by the Memory Foam insole, perfectly adapting to your foot shape while providing exceptional arch support. Whether walking or running, the cushioned insole guarantees a luxurious and tailor-made experience. These casual shoes are thoughtfully designed to elevate your every step, enhancing support and ensuring an unparalleled stride."
            },
            {
                "id": 50,
                "category": "Men's",
                "subcategory": "Shoes",
                "minicategory": "Campus",
                "name": "Campus Mens Terminator (N) Running Shoes",
                "image": "https://m.media-amazon.com/images/I/61iL3LW3O9L._SY500_.jpg",
                "price": 1099,
                "oldprice": 1500,
                "discr": "Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner"
            },
        
            ///////////////////////////// WOMEN'S ///////////////////////////////////////
        
            ///-------- Sarees --------///
        
            {
                "id": 51,
                "category": "Women's",
                "subcategory": "Sarees",
                "minicategory": "T.J.SAREES",
                "name": "T.J. SAREES Women's Kathiawari Handloom Cotton Silk Saree (TJS12004, Yellow and Blue)",
                "image": "https://m.media-amazon.com/images/I/81BaKdV3rmL._SY550_.jpg",
                "price": 1299,
                "oldprice": 1500,
                "discr": "About Handloom Mark :- Handloom Mark is the Government of India's initiative to provide a collective identity to the handloom products in India and can be used not only for popularizing the hand woven products but can also serve as a guarantee for the buyer that the product being purchased is genuinely hand woven from India, 100% Handloom; comes with Handloom Mark."
            },
            {
                "id": 52,
                "category": "Women's",
                "subcategory": "Sarees",
                "minicategory": "T.J.SAREES",
                "name": "T.J. SAREES Handloom Women Cotton Silk Madhuboni Print Saree,",
                "image": "https://m.media-amazon.com/images/I/91Uv+PcL2AL._SY741_.jpg",
                "price": 799,
                "oldprice": 1200,
                "discr": "100% Handloom; Comes With Handloom Mark.; About Handloom Mark :- Handloom Mark Is The Government Of India'S Initiative To Provide A Collective Identity To The Handloom Products In India And Can Be Used Not Only For Popularizing The Hand Woven Products But Can Also Serve As A Guarantee For The Buyer That The Product Being Purchased Is Genuinely Hand Woven From India., Weave Type: Santipuri; Material:Cotton Silk ,Colour: Black And White; Saree Length: 6.3 Mtr, Blouse Piece:- 0.08 Mtr."
            },
            {
                "id": 53,
                "category": "Women's",
                "subcategory": "Sarees",
                "minicategory": "T.J.SAREES",
                "name": "T.J. SAREES Women’s Pure Kantha Stitch hand embroidery assam Silk Saree of Bengal With Blouse Pcs",
                "image": "https://m.media-amazon.com/images/I/71a8NMq0psL._SY679_.jpg",
                "price": 1349,
                "oldprice": 1900,
                "discr": "About Handloom Mark :- Handloom Mark is the Government of India's initiative to provide a collective identity to the handloom products in India and can be used not only for popularizing the hand woven products but can also serve as a guarantee for the buyer that the product being purchased is genuinely hand woven from India., 100% Handloom; comes with Handloom Mark."
            },
            {
                "id": 54,
                "category": "Women's",
                "subcategory": "Sarees",
                "minicategory": "T.J.SAREES",
                "name": "T.J. SAREES Kantha Stitch Handloom Assam Silk Women Sarees(Golden)",
                "image": "https://m.media-amazon.com/images/I/71lQZYxq34L._SY679_.jpg",
                "price": 2899,
                "oldprice": 3500,
                "discr": "About Handloom Mark :- Handloom Mark is the Government of India's initiative to provide a collective identity to the handloom products in India and can be used not only for popularizing the hand woven products but can also serve as a guarantee for the buyer that the product being purchased is genuinely hand woven from India., 100% Handloom Sarees."
            },
            {
                "id": 55,
                "category": "Women's",
                "subcategory": "Sarees",
                "minicategory": "T.J.SAREES",
                "name": "T.J. SAREES Women’s Bengal Handloom Collection Pure Khadi Cotton Traditional Bengali Design Soft Lightweight Saree With Blouse Pcs",
                "image": "https://m.media-amazon.com/images/I/81v+WiccRlL._SY679_.jpg",
                "price": 549,
                "oldprice": 800,
                "discr": "Used handloom latest soft khadi pure cotton with unstitched blouse piece ethnic motifs design, saree length is 6.3 Meters Width1.2 Meters, blend saree., Care instructions: first dry clean then machine wash and hand wash, don't blech, comes with handloom work, material: cotton, with blouse piece,good dye work, 100% Handloom from the weavers of West Bengal"
            },
            {
                "id": 56,
                "category": "Women's",
                "subcategory": "Sarees",
                "minicategory": "T.J.SAREES",
                "name": "T.J. Sarees Women's & Girl's Jamdani Silk Blend Saree Without Blouse Piece",
                "image": "https://m.media-amazon.com/images/I/81Eh5XyBfjL._SY679_.jpg",
                "price": 1945,
                "oldprice": 2500,
                "discr": "Very light weight saree, as light as you can wear in any season Beautiful colour contrast saree which gives you gorgeous look for any occasion, Fabric - Cotton Resham Silk, Length – 5.5 meter with contrast colour blouse piece, This smart traditional saree is done by our handloom craftsmen of West Bengal perfectly to look the saree excellent and beautiful."
            },
        
            ////---------- Handbag ---------///
        
            {
                "id": 57,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Catlin Faux Leather Handbag (Large)",
                "image": "https://m.media-amazon.com/images/I/71fZ4nCbKvL._SY575_.jpg",
                "price": 545,
                "oldprice": 800,
                "discr": "Material: Our premium handbags for women are made of faux leather. Hand bag for women will make a good pair for both your formal and casual outfits giving you an elite, classy look. Our women bags are long-lasting and durable hence will accompany you for a long period.,For Everyone: No matter if you are a college student or a working professional, our shoulder bags for women is a perfect fit for everyone. Our stylish yet prime finish will make sure to be your hand bag, ladies bag, high design bag and whatnot. If you are looking for one shop solution then go for this purse for women."
            },
            {
                "id": 58,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Style Diva Faux Leather Handbag (Large)",
                "image": "https://m.media-amazon.com/images/I/61Fa7wW9FvL._SY575_.jpg",
                "price": 545,
                "oldprice": 800,
                "discr": "Material: Our premium handbags for women are made of faux leather. Hand bag for women will make a good pair for both your formal and casual outfits giving you an elite, classy look. Our women bags are long-lasting and durable hence will accompany you for a long period., For Everyone: No matter if you are a college student or a working professional, our shoulder bags for women is a perfect fit for everyone. Our stylish yet prime finish will make sure to be your hand bag, ladies bag, high design bag and whatnot. If you are looking for one shop solution then go for this purse for women."
            },
            {
                "id": 59,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Faux Leather Lola Slingbag (Small)",
                "image": "https://m.media-amazon.com/images/I/61S-hmvWHOL._SY675_.jpg",
                "price": 499,
                "oldprice": 800,
                "discr": "Material: Our premium handbags for women are made of faux leather. Hand bag for women will make a good pair for both your formal and casual outfits giving you an elite, classy look. Our women bags are long-lasting and durable hence will accompany you for a long period., For Everyone: No matter if you are a college student or a working professional, our shoulder bags for women is a perfect fit for everyone. Our stylish yet prime finish will make sure to be your hand bag, ladies bag, high design bag and whatnot. If you are looking for one shop solution then go for this purse for women., Spacious and Roomy: Keywest stylish handbags for women looks compact but is roomy. You will have enough space to keep all your essentials. This Faux leather handbag for women contains 1 Zip Compartments that can comfortably hold iPhone, iPad, wallet, cosmetics, umbrella, books, tiffin box, and so on."
            },
            {
                "id": 60,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Zara Faux Leather Handbag (Medium)",
                "image": "https://m.media-amazon.com/images/I/71vMeeegwzL._SY575_.jpg",
                "price": 399,
                "oldprice": 500,
                "discr": "Material: Our premium handbags for women are made of faux leather. Hand bag for women will make a good pair for both your formal and casual outfits giving you an elite, classy look. Our women bags are long-lasting and durable hence will accompany you for a long period., For Everyone: No matter if you are a college student or a working professional, our shoulder bags for women is a perfect fit for everyone. Our stylish yet prime finish will make sure to be your hand bag, ladies bag, high design bag and whatnot. If you are looking for one shop solution then go for this purse for women."
            },
            {
                "id": 61,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Westside Faux Leather Handbag (Large)",
                "image": "https://m.media-amazon.com/images/I/91e4QugKFtL._SY575_.jpg",
                "price": 545,
                "oldprice": 800,
                "discr": "Material: Our premium handbags for women are made of faux leather. Hand bag for women will make a good pair for both your formal and casual outfits giving you an elite, classy look. Our women bags are long-lasting and durable hence will accompany you for a long period., For Everyone: No matter if you are a college student or a working professional, our shoulder bags for women is a perfect fit for everyone. Our stylish yet prime finish will make sure to be your hand bag, ladies bag, high design bag and whatnot. If you are looking for one shop solution then go for this purse for women."
            },
            {
                "id": 62,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Everly Faux Leather Handbag (Large)",
                "image": "https://m.media-amazon.com/images/I/71rRH4pbL-L._SY675_.jpg",
                "price": 545,
                "oldprice": 700,
                "discr": "Material: Our premium handbags for women are made of faux leather. Hand bag for women will make a good pair for both your formal and casual outfits giving you an elite, classy look. Our women bags are long-lasting and durable hence will accompany you for a long period., For Everyone: No matter if you are a college student or a working professional, our shoulder bags for women is a perfect fit for everyone. Our stylish yet prime finish will make sure to be your hand bag, ladies bag, high design bag and whatnot. If you are looking for one shop solution then go for this purse for women."
            },
            {
                "id": 63,
                "category": "Women's",
                "subcategory": "Handbag's",
                "minicategory": "Fostelo",
                "name": "Fostelo Women's Faux Leather Liliput Fashion Backpack",
                "image": "https://m.media-amazon.com/images/I/81JxA+YQonS._SX679_.jpg",
                "price": 345,
                "oldprice": 555,
                "discr": "Warranty :- 1 Year Warranty On Manufacturing Defects. 100% Quality Assured., Dimensions (In Inches) :- 8 Tall X 9 Wide X 4 Deep, Compartments :- 1 Zip Compartmenat And Front Zip Pocket, Material :-100% PU | Colour :- Maroon, Outer Material Type: Polyurethane; Closure Type: Zipper"
            }
        
        ]

        console.log("RequestData:", productDetails);
        const adddata = await productModel.create(productDetails);
        console.log(adddata);
        res.send("added Successfully");
    }catch(err){
        console.log("Error in adding Product", err);
    }
}

const finddata = async(req, res) => {
    const find = await productModel.find({});
    console.log(find);
    res.send (find)
}

const findProduct = async(req, res) => {
    try {
        const search = req.body.search;
        console.log(req.body.search);
        const searching = await productModel.find({
          Name: { $regex: new RegExp(search, "i") }, // "i" for case-insensitive search
        });
        console.log(search);
        if (searching.length > 0) {
          return res
            .status(200)
            .json({ success: true, msg: "Product details", data: searching });
        } else {
          return res.status(404).json({ msg: "No matching products found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error" });
      }
}

const addcart = async (req, res) => {
    try {
      const token = req.header("authorization");
      const item = req.body;
      const user_email = req.email;
      const temp = {
        userEmail: user_email,
        cart: [{ ...item, id: item._id }],
      };
  
      const existCart = await cart.findOne({ userEmail: user_email });
      console.log("exist cart ========================================",existCart);
      if (existCart) {
        const updatecart = await cart.findOneAndUpdate(
          { userEmail: user_email },
          { $push: { cart: { ...item, userEmail: user_email, id: item._id } } },
          {new : true}
        );
      } else {
        const newcart = await new cart({...temp});
        console.log("new cart", await newcart.save());
       
      }
      res.send({ token: token, item: item,msg:"added to cart successfully"});
    } catch (err) {
      console.log({ error: err });
      res.send({ error: err });
    }
  };


module.exports = {addProduct, finddata, findProduct, addcart};