/* ============================================================
   GRAND AURELIA — Common JavaScript
   Handles: menu, modal, toast, booking system (with localStorage)
   ============================================================ */

/* ============ ROOMS DATABASE ============ */
const ROOMS_DB = [
  {
    id: "deluxe-king-ac",
    name: "Deluxe King Room",
    type: "ac",
    bedType: "king",
    price: 289,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "45 m²" },
      { icon: "fa-bed", text: "King bed" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-city", text: "City view" }
    ],
    desc: "Elegant AC room with plush king bed, marble bathroom, and private balcony overlooking the skyline.",
    rating: "4.9",
    reviews: 128,
    category: "room"
  },
  {
    id: "executive-suite-ac",
    name: "Executive Suite",
    type: "ac",
    bedType: "king",
    price: 459,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "78 m²" },
      { icon: "fa-bed", text: "King + Sofa" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-water", text: "Ocean view" }
    ],
    desc: "Spacious AC suite with separate living area, walk-in closet, and luxurious bathroom with gold fixtures.",
    rating: "5.0",
    reviews: 94,
    category: "suite"
  },
  {
    id: "royal-villa-ac",
    name: "Royal Villa",
    type: "ac",
    bedType: "king",
    price: 799,
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "120 m²" },
      { icon: "fa-bed", text: "2 King beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-swimmer", text: "Private pool" }
    ],
    desc: "Ultimate privacy with private infinity pool, personal butler, and terrace with panoramic sea views.",
    rating: "5.0",
    reviews: 67,
    category: "suite"
  },
  {
    id: "premier-twin-ac",
    name: "Premier Twin Room",
    type: "ac",
    bedType: "twin",
    price: 249,
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "40 m²" },
      { icon: "fa-bed", text: "2 Twin beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-tree", text: "Garden view" }
    ],
    desc: "Ideal for friends or colleagues, with two comfortable twin beds and a cozy seating area.",
    rating: "4.8",
    reviews: 203,
    category: "room"
  },
  {
    id: "junior-suite-nonac",
    name: "Junior Suite (Non-AC)",
    type: "non-ac",
    bedType: "king",
    price: 199,
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "62 m²" },
      { icon: "fa-bed", text: "King bed" },
      { icon: "fa-fan", text: "Non-AC" },
      { icon: "fa-couch", text: "Living area" }
    ],
    desc: "A refined non-AC suite with separate lounge, premium amenities, and elegant gold-toned décor.",
    rating: "4.7",
    reviews: 112,
    category: "suite"
  },
  {
    id: "standard-double-nonac",
    name: "Standard Double Room",
    type: "non-ac",
    bedType: "double",
    price: 129,
    img: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "28 m²" },
      { icon: "fa-bed", text: "Double bed" },
      { icon: "fa-fan", text: "Non-AC" },
      { icon: "fa-wifi", text: "Free WiFi" }
    ],
    desc: "Comfortable non-AC room with a double bed, perfect for budget-conscious travellers.",
    rating: "4.5",
    reviews: 340,
    category: "room"
  },
  {
    id: "presidential-suite-ac",
    name: "Presidential Suite",
    type: "ac",
    bedType: "king",
    price: 1299,
    img: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "200 m²" },
      { icon: "fa-bed", text: "3 King beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-concierge-bell", text: "24/7 Butler" }
    ],
    desc: "The pinnacle of luxury: private elevator, dining for 8, and wrap-around terrace with Jacuzzi.",
    rating: "5.0",
    reviews: 41,
    category: "suite"
  },
  {
    id: "family-room-ac",
    name: "Family Room",
    type: "ac",
    bedType: "double",
    price: 349,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1170&auto=format&fit=crop",
    features: [
      { icon: "fa-vector-square", text: "55 m²" },
      { icon: "fa-bed", text: "2 Double beds" },
      { icon: "fa-snowflake", text: "AC" },
      { icon: "fa-child", text: "Kids friendly" }
    ],
    desc: "Spacious AC family room with two double beds, perfect for families with children.",
    rating: "4.8",
    reviews: 156,
    category: "room"
  },
  {
    id: "economy-single-nonac",
    name: "Economy Single Room",
    type: "non-ac",
    bedType: "single",
    price: 79,
    img: "https://images.
