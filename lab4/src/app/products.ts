export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  pic: string[];
}

export const products = [
  {
    id: 1,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=191010000#!/item",
    name: 'Samsung Galaxy Buds2 Pro (SM-R510NZAACIS) black',
    price: 269,
    description: 'New better experience with buds',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h62/61857930084382/samsung-sm-r510nzaacis-cernyj-106128763-1.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/hce/61857930313758/samsung-sm-r510nzaacis-cernyj-106128763-2.jpg",
"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/h68/61857930543134/samsung-sm-r510nzaacis-cernyj-106128763-3.jpg"]
  },
  { 
    id: 2,
    url: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=191010000#!/item",
    name: 'Apple AirPods 3 white',
    price: 269,
    description: 'New generation of Apple Airpods',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h00/46719106744350/apple-airpods-3-belyj-102667744-4.jpg",
      "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/hca/46719107104798/apple-airpods-3-belyj-102667744-6.jpg"]
  },
  {
    id: 3,  
    url: "https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=191010000#!/item",
    name: 'Smart TV LG 43LM5772PLA 109 cm Black',
    price: 499,
    description: 'LG Smart TV',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hd6/49320431747102/lg-43lm5772pla-cernyj-101293496-4.jpg", 
"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h83/49320432205854/lg-43lm5772pla-cernyj-101293496-5.jpg"]
  },
  {
    id: 4,
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=191010000#!/item",
    name: 'Apple iPhone 14 Pro Max 256Gb purple',
    price: 799,
    description: '2023 flagman of Apple',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg",
"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/hf7/63073993981982/apple-iphone-14-pro-max-256gb-fioletovyj-106363342-5.jpg"]
  },
  {
    id: 5,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s20-fe-new-6-gb-128-gb-zelenyi-101449206/?c=191010000#!/item",
    name: 'Samsung galaxy S20 FE',
    price: 499,
    description: 'Great phone from Samsung company',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/hce/34407757905950/samsung-galaxy-s20-fe-new-6-128gb-zelenyj-101449206-1-Container.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/hef/34407772192798/samsung-galaxy-s20-fe-new-6-128gb-zelenyj-101449206-3-Container.jpg",
"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2b/h67/34407765442590/samsung-galaxy-s20-fe-new-6-128gb-zelenyj-101449206-2-Container.jpg"]
  },
  {
    id: 6,
    url: "https://kaspi.kz/shop/p/lenovo-ideapad-gaming-3-15ihu6-82k1000wru-chernyi-107705183/?c=191010000#!/item",
    name: 'Laptop Lenovo IdeaPad Gaming 3 15IHU6 82K1000WRU black',
    price: 1099,
    description: 'Gaming laptop with great quality',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h0a/66100094828574/lenovo-ideapad-gaming-3-15ihu6-82k1000wru-chernyi-107705183-1.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h96/66100095352862/lenovo-ideapad-gaming-3-15ihu6-82k1000wru-chernyi-107705183-2.jpg",
"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h4d/66100653457438/lenovo-ideapad-gaming-3-15ihu6-82k1000wru-chernyi-107705183-4.jpg"]
  },
  {
    id: 7,
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=191010000#!/item",
    name: 'Laptop Apple MacBook Air 13',
    price: 1399,
    description: 'M2 generation MacBook shows up',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h3d/52679174357022/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h0e/52679174586398/apple-macbook-air-13-mly33-chernyi-105933768-2.jpg",
"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/ha6/52679175045150/apple-macbook-air-13-mly33-chernyi-105933768-4.jpg"]
  },
  {
    id: 8,
    url: "https://kaspi.kz/shop/p/kawai-kdp-120-premium-satin-white-banketka-101577291/?c=191010000#!/item",
    name: 'Digital piano KAWAI KDP 120 Premium Satin White',
    price: 1299,
    description: 'Digital piano with natural sound and great experience',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/h1e/67112470642718/kawai-kdp-120-premium-satin-white-banketka-101577291-1.jpg",
  "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h66/h02/49506540716062/kawai-kdp-120-premium-satin-white-banketka-101577291-2.jpg"]
  },
  {
    id: 9,
    url: "https://kaspi.kz/shop/p/haier-cef535awd-belyi-102266711/?c=191010000#!/item",
    name: 'Fridge Haier CEF535AWD white',
    price: 799,
    description: 'Haier fridge is the best choise',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hd5/62797431111710/haier-cef535awd-belyj-102266711-1-Container.jpg"]
  },
  {
    id: 10,
    url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-5-pro-45-mm-chernyi-106174817/?c=191010000#!/item",
    name: 'Smart Watch Samsung Galaxy Watch 5 Pro 45 mm Black',
    price: 399,
    description: 'New generation of samsung watches with new features',
    rating: 5.0,
    pic: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/hc9/61950914461726/samsung-galaxy-watch-5-pro-45mm-cernyj-106174817-1.jpg"]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/