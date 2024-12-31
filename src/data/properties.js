// Updated Imports for Flats and Houses
import flat1Img1 from "../images/Flat 1/1.jpg";
import flat1Img2 from "../images/Flat 1/2.jpg";
import flat1Img3 from "../images/Flat 1/3.jpg";
import flat1Img4 from "../images/Flat 1/4.jpg";
import flat1Img5 from "../images/Flat 1/5.jpg";

import flat2Img1 from "../images/Flat 2/1.jpg";
import flat2Img2 from "../images/Flat 2/2.jpg";
import flat2Img3 from "../images/Flat 2/3.jpg";
import flat2Img4 from "../images/Flat 2/4.jpg";
import flat2Img5 from "../images/Flat 2/5.jpg";
import flat2Img6 from "../images/Flat 2/6.jpg";

import flat3Img1 from "../images/Flat 3/1.jpg";
import flat3Img2 from "../images/Flat 3/2.jpg";
import flat3Img3 from "../images/Flat 3/3.jpg";
import flat3Img4 from "../images/Flat 3/4.jpg";
import flat3Img5 from "../images/Flat 3/5.jpg";
import flat3Img6 from "../images/Flat 3/6.jpg";

import h1Img1 from "../images/H1/1.jpg";
import h1Img2 from "../images/H1/2.jpg";
import h1Img3 from "../images/H1/3.jpg";
import h1Img4 from "../images/H1/4.jpg";
import h1Img5 from "../images/H1/5.jpg";

import h2Img1 from "../images/H2/1.jpg";
import h2Img2 from "../images/H2/2.jpg";
import h2Img3 from "../images/H2/3.jpg";
import h2Img4 from "../images/H2/4.jpg";
import h2Img5 from "../images/H2/5.jpg";

import h3Img1 from "../images/H3/1.jpg";
import h3Img2 from "../images/H3/2.jpg";
import h3Img3 from "../images/H3/3.jpg";
import h3Img4 from "../images/H3/4.jpg";
import h3Img5 from "../images/H3/5.jpg";

import h4Img1 from "../images/H4/1.jpg";
import h4Img2 from "../images/H4/2.jpg";
import h4Img3 from "../images/H4/3.jpg";
import h4Img4 from "../images/H4/4.jpg";
import h4Img5 from "../images/H4/5.jpg";


const properties = [
  {
    id: "prop1",
    type: "House",
    bedrooms: 3,
    price: 4500000,
    tenure: "Freehold",
    description:
      "Beautiful three-bedroom house located in Nugegoda, just minutes away from leading schools, supermarkets, and hospitals. Perfect for family living with ample garden space and parking.",
    location: "Pagoda Road, Nugegoda",
    images: [h1Img1, h1Img2, h1Img3, h1Img4, h1Img5],
    url: "properties/prop1.html",
    added: {
      month: "October",
      day: 12,
      year: 2024,
    },
    postcode: "10250",
    contact: "077-123-4567",
    floorPlan: [
      { room: "Living Room", dimensions: "18x20 ft" },
      { room: "Master Bedroom", dimensions: "15x18 ft" },
      { room: "Bedroom 2", dimensions: "12x14 ft" },
      { room: "Kitchen", dimensions: "12x12 ft" },
      { room: "Bathroom", dimensions: "10x8 ft" },
      { room: "Garden", dimensions: "20x25 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126746.87906620556!2d79.87056787142596!3d6.868600497504592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250af735db87d%3A0x8e499f331ecf9f41!2sNugegoda!5e0!3m2!1sen!2slk!4v1685205557382!5m2!1sen!2slk",
  },
  {
    id: "prop2",
    type: "Flat",
    bedrooms: 2,
    price: 2000000,
    tenure: "Leasehold",
    description:
      "Modern two-bedroom apartment in the heart of Colombo 7. Includes spacious living areas, fully equipped kitchen, and access to shared facilities such as a gym and pool.",
    location: "Ward Place, Colombo 7",
    images: [
      flat2Img1,
      flat2Img2,
      flat2Img3,
      flat2Img4,
      flat2Img5,
      flat2Img6,
    ],
    url: "properties/prop2.html",
    added: {
      month: "September",
      day: 14,
      year: 2024,
    },
    postcode: "00700",
    contact: "071-987-6543",
    floorPlan: [
      { room: "Living Room", dimensions: "16x18 ft" },
      { room: "Master Bedroom", dimensions: "12x14 ft" },
      { room: "Bedroom 2", dimensions: "10x12 ft" },
      { room: "Kitchen", dimensions: "10x10 ft" },
      { room: "Bathroom", dimensions: "8x8 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126742.36827027965!2d79.82314267044067!3d6.912173903245869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb3e041557b%3A0xfed4a4cfcf87078c!2sColombo%2007!5e0!3m2!1sen!2slk!4v1685205726820!5m2!1sen!2slk",
  },
  {
    id: "prop3",
    type: "Flat",
    bedrooms: 1,
    price: 1500000,
    tenure: "Leasehold",
    description:
      "Cozy one-bedroom flat in Mount Lavinia, ideal for single professionals or couples. Includes a balcony and easy access to public transport and beachside attractions.",
    location: "Galle Road, Mount Lavinia",
    images: [
      flat3Img1,
      flat3Img2,
      flat3Img3,
      flat3Img4,
      flat3Img5,
      flat3Img6,
    ],
    url: "properties/prop3.html",
    added: {
      month: "November",
      day: 1,
      year: 2024,
    },
    postcode: "10370",
    contact: "076-543-2109",
    floorPlan: [
      { room: "Living Room", dimensions: "14x16 ft" },
      { room: "Bedroom", dimensions: "12x12 ft" },
      { room: "Kitchen", dimensions: "8x10 ft" },
      { room: "Bathroom", dimensions: "6x8 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126732.58689255893!2d79.85084472167969!3d6.852450733847739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b1ae80a4f71%3A0x7163016d2e539bf!2sMount%20Lavinia!5e0!3m2!1sen!2slk!4v1685205855478!5m2!1sen!2slk",
  },
  {
    id: "prop4",
    type: "House",
    bedrooms: 4,
    price: 12000000,
    tenure: "Freehold",
    description:
      "Luxurious four-bedroom house in Kandy with breathtaking views of the hills. Includes a private garden, spacious living areas, and parking for three vehicles.",
    location: "Rajapihilla Mawatha, Kandy",
    images: [h2Img1, h2Img2, h2Img3, h2Img4, h2Img5],
    url: "properties/prop4.html",
    added: {
      month: "August",
      day: 20,
      year: 2024,
    },
    postcode: "20000",
    contact: "078-321-4567",
    floorPlan: [
      { room: "Living Room", dimensions: "20x22 ft" },
      { room: "Master Bedroom", dimensions: "16x18 ft" },
      { room: "Bedroom 2", dimensions: "14x16 ft" },
      { room: "Bedroom 3", dimensions: "12x14 ft" },
      { room: "Kitchen", dimensions: "14x14 ft" },
      { room: "Bathroom", dimensions: "10x12 ft" },
      { room: "Garden", dimensions: "30x40 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126747.33747556024!2d80.6184698781529!3d7.272695406489737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae377db22ff887d%3A0xfac7d3969a1c1965!2sKandy!5e0!3m2!1sen!2slk!4v1685205933482!5m2!1sen!2slk",
  },
  {
    id: "prop5",
    type: "House",
    bedrooms: 5,
    price: 15500000,
    tenure: "Freehold",
    description:
      "Spacious five-bedroom luxury villa in Negombo with private pool, landscaped garden, and walking distance to the beach.",
    location: "Beach Road, Negombo",
    images: [h3Img1, h3Img2, h3Img3, h3Img4, h3Img5],
    url: "properties/prop5.html",
    added: {
      month: "July",
      day: 15,
      year: 2024,
    },
    postcode: "11500",
    contact: "077-234-5678",
    floorPlan: [
      { room: "Living Room", dimensions: "25x25 ft" },
      { room: "Master Bedroom", dimensions: "18x20 ft" },
      { room: "Bedroom 2", dimensions: "15x18 ft" },
      { room: "Bedroom 3", dimensions: "12x14 ft" },
      { room: "Kitchen", dimensions: "15x15 ft" },
      { room: "Bathroom", dimensions: "10x12 ft" },
      { room: "Pool Area", dimensions: "30x30 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126727.16591814336!2d79.85755472723437!3d7.19572467588895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f7766f403eb9%3A0x3bc9d16245e7b26!2sNegombo!5e0!3m2!1sen!2slk!4v1685206005123!5m2!1sen!2slk",
  },
  {
    id: "prop6",
    type: "Flat",
    bedrooms: 3,
    price: 7500000,
    tenure: "Leasehold",
    description:
      "Elegant three-bedroom apartment in Dehiwala, featuring modern interiors, ocean views, and excellent facilities.",
    location: "Marine Drive, Dehiwala",
    images: [flat1Img1, flat1Img2, flat1Img3, flat1Img4, flat1Img5],
    url: "properties/prop6.html",
    added: {
      month: "June",
      day: 10,
      year: 2024,
    },
    postcode: "10350",
    contact: "071-345-6789",
    floorPlan: [
      { room: "Living Room", dimensions: "20x20 ft" },
      { room: "Master Bedroom", dimensions: "16x18 ft" },
      { room: "Bedroom 2", dimensions: "14x16 ft" },
      { room: "Kitchen", dimensions: "12x12 ft" },
      { room: "Bathroom", dimensions: "10x10 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126739.81945042146!2d79.87588281757812!3d6.839676260340094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250a6e74d78ff%3A0x59ed379eab928e5a!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1685206103484!5m2!1sen!2slk",
  },
  {
    id: "prop7",
    type: "House",
    bedrooms: 2,
    price: 3000000,
    tenure: "Freehold",
    description:
      "Charming two-bedroom cottage in Ella, perfect for nature lovers seeking a peaceful retreat.",
    location: "Main Street, Ella",
    images: [h4Img1, h4Img2, h4Img3, h4Img4, h4Img5],
    url: "properties/prop7.html",
    added: {
      month: "May",
      day: 5,
      year: 2024,
    },
    postcode: "90090",
    contact: "076-876-5432",
    floorPlan: [
      { room: "Living Room", dimensions: "15x20 ft" },
      { room: "Master Bedroom", dimensions: "14x16 ft" },
      { room: "Bedroom 2", dimensions: "12x14 ft" },
      { room: "Kitchen", dimensions: "10x10 ft" },
      { room: "Bathroom", dimensions: "8x10 ft" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126747.54319607169!2d81.02328191523436!3d6.869741912878394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c780db5f32cf%3A0x6b74f2f8a4cf8d99!2sElla!5e0!3m2!1sen!2slk!4v1685206179483!5m2!1sen!2slk",
  },
];

export default properties;
