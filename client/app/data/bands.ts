export interface BandMember {
  id: number;
  name: string;
  instrument: string;
  image: string;
}

export interface Band {
  id: number;
  name: string;
  image: string;
  description: string;
  members: BandMember[];
}

export const bands: Band[] = [
  {
    id: 1,
    name: "Rhythm Pulse",
    image: "/bands/band4.png",
    description: "A fusion band that blends rock, pop, and electronic elements. Known for their energetic performances and innovative arrangements.",
    members: [
      { id: 1, name: "Anuj", instrument: "Rhythm Guitar", image: "/crew/Anuj.jpg" },
      { id: 2, name: "Ayushya", instrument: "Lead Guitar", image: "/crew/Ayushya.jpg" },
      { id: 3, name: "Harini", instrument: "Lead Vocals", image: "/crew/Harini.jpg" },
      { id: 4, name: "Priyansu", instrument: "Lead Vocals", image: "/crew/Priyansu.jpg" },
      { id: 5, name: "Varsha", instrument: "Keyboard", image: "/crew/Varsha1.jpg" },
      { id: 6, name: "Yashas", instrument: "Drums", image: "/crew/Yashas.jpg" }
    ],
  },
  {
    id: 2,
    name: "Harmonic Horizon",
    image: "/bands/band8.png",
    description: "An indie folk ensemble that creates soulful melodies with acoustic instruments. Their music tells stories of life, love, and adventure.",
    members: [
      { id: 1, name: "Abhinay", instrument: "Drums", image: "/crew/Abhinay.jpg" },
      { id: 2, name: "Asish", instrument: "Acoustic Guitar/Vocals", image: "/crew/Asish.jpg" },
      { id: 3, name: "Dhriti J N", instrument: "Lead Vocals", image: "/crew/Dhriti.jpg" },
      { id: 4, name: "Gokul", instrument: "Keyboard", image: "/crew/Gokul.jpg" },
      { id: 5, name: "Shashwat", instrument: "Lead Vocals", image: "/crew/Shashwat.jpg" },
      { id: 6, name: "Shruthi Pullela", instrument: "Electric Guitar/Vocals", image: "/crew/Shruthi.jpg" }
    ],
  },
  {
    id: 3,
    name: "Soul Rock",
    image: "/bands/band1.png",
    description: "A powerhouse rock ensemble that masterfully blends classic rock anthems with contemporary alternative vibes. Their dynamic stage presence and tight harmonies create an unforgettable live experience.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Drums", image: "/crew/AbhishekKumar.jpg" },
      { id: 2, name: "David J Sharon", instrument: "Mixer", image: "/crew/David.png" },
      { id: 3, name: "Gladwin John", instrument: "Lead Vocals", image: "/crew/John.jpg" },
      { id: 4, name: "Harith Y", instrument: "Lead Keyboard", image: "/crew/Harith2.jpg" },
      { id: 5, name: "Meera R", instrument: "Lead Vocals", image: "/crew/MeeraR2.jpg" },
      { id: 6, name: "Pavan", instrument: "Lead Vocals", image: "/crew/Pavan.jpg" },
      { id: 7, name: "Priyank Jain", instrument: "Rhythm Guitar", image: "/crew/Priyank.jpg" },
      { id: 8, name: "Shriya Y", instrument: "Harmonizing Vocals", image: "/crew/Shriya2.jpg" },
      { id: 9, name: "Tarun", instrument: "Rhythm Keyboard", image: "/crew/Tarun2.jpg" }
    ],
  },
  {
    id: 4,
    name: "Dream Pie",
    image: "/bands/band2.png",
    description: "An innovative rock collective that pushes musical boundaries by fusing progressive rock elements with modern indie sensibilities. Their experimental approach and technical precision set them apart.",
    members: [
      { id: 1, name: "Adi Khera", instrument: "Rhythm Guitar", image: "/crew/Adi.jpg" },
      { id: 2, name: "Bhadresh", instrument: "Lead Vocals", image: "/crew/Bhadresh.jpg" },
      { id: 3, name: "Dikshant", instrument: "Drums", image: "/crew/Dikshant.jpg" },
      { id: 4, name: "Omkar Anand", instrument: "Lead Guitar", image: "/crew/Omkar.jpg" },
      { id: 5, name: "Rohan Joshi", instrument: "Keyboard/Lead Vocals", image: "/crew/Rohan.jpg" },
      { id: 6, name: "Shirish Giroti", instrument: "Lead Vocals", image: "/crew/Shirish.jpg" },
    ],
  },
  {
    id: 5,
    name: "Paradise",
    image: "/bands/band9.png",
    description: "A versatile rock outfit that seamlessly transitions between classic rock ballads and contemporary alternative hits. Their polished performances and charismatic stage presence captivate audiences.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Lead Vocals", image: "/crew/AbhishekN.jpg" },
      { id: 2, name: "Chaitanya", instrument: "Drums", image: "/crew/Chaitanya.jpg" },
      { id: 3, name: "Daniel", instrument: "Rhythm Keyboard", image: "/crew/Daniel.jpg" },
      { id: 4, name: "Manoj", instrument: "Lead Keyboard", image: "/crew/Manoj.jpg" },
      { id: 5, name: "Rittik", instrument: "Flute", image: "/crew/Rittik.jpg" },
      { id: 6, name: "Vivek", instrument: "Rhythm Guitar", image: "/crew/Vivek.jpg" },
    ],
  },
  {
    id: 6,
    name: "Just For You All",
    image: "/bands/band3.png",
    description: "A dynamic rock ensemble that delivers high-octane performances with a perfect blend of classic rock energy and modern alternative edge. Their infectious enthusiasm and crowd interaction make every show memorable.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Lead Vocals", image: "/crew/AbhishekN1.jpg" },
      { id: 2, name: "Shirish", instrument: "Lead Vocals", image: "/crew/Shirish1.jpg" },
      { id: 3, name: "Chaitanya", instrument: "Drums", image: "/crew/Chaitanya.jpg" },
      { id: 4, name: "Seimen", instrument: "Backing Vocals/Lead Guitar", image: "/crew/Seimen.jpg" },
      { id: 5, name: "Vivek", instrument: "Backing Vocals/Rhythm Guitar", image: "/crew/Vivek1.jpg" },
      { id: 6, name: "Daniel", instrument: "Keyboard", image: "/crew/Daniel1.jpg" },
    ]
  },
  {
    id: 7,
    name: "Melody Waves",
    image: "/bands/band5.png",
    description: "A vocal-driven ensemble that creates waves of harmony with their multiple lead vocalists. Their sound is characterized by rich vocal arrangements, supported by dynamic keyboard work and rhythmic guitar patterns.",
    members: [
      { id: 1, name: "Anushree", instrument: "Lead Vocals", image: "/crew/Anushree.jpg" },
      { id: 2, name: "Ayushyaa", instrument: "Rhythm Guitar", image: "/crew/Ayushya.jpg" },
      { id: 3, name: "Dhanya", instrument: "Lead Vocals", image: "/crew/Dhanya.jpg" },
      { id: 4, name: "Harini", instrument: "Lead Vocals", image: "/crew/Harini.jpg" },
      { id: 5, name: "Harith", instrument: "Keyboard/Lead Vocals", image: "/crew/Harith3.jpg" },
      { id: 6, name: "Yashas", instrument: "Drums", image: "/crew/Yashas.jpg" },
    ]
  },
  {
    id: 8,
    name: "Dosa",
    image: "/bands/band7.png",
    description: "A contemporary fusion band that blends multiple vocal styles with modern instrumentation. Their performances feature a unique mix of lead and harmonizing vocals, supported by dynamic keyboard and guitar arrangements.",
    members: [
      { id: 1, name: "Adi Khera", instrument: "Guitar", image: "/crew/Adi.jpg" },
      { id: 2, name: "Dharani", instrument: "Lead Vocals", image: "/crew/Dharani.png" },
      { id: 3, name: "Dikshant", instrument: "Drums", image: "/crew/Dikshant.jpg" },
      { id: 4, name: "Divyaa", instrument: "Lead Vocals", image: "/crew/Divyaa.jpg" },
      { id: 5, name: "Gladwin John", instrument: "Keyboard", image: "/crew/John.jpg" },
      { id: 6, name: "Meera K", instrument: "Harmonizing Vocals", image: "/crew/MeeraK.jpg" },
      { id: 7, name: "Shriya", instrument: "Harmonizing Vocals", image: "/crew/Shriya.jpg" },
    ]
  },
  {
    id: 9,
    name: "Accord",
    image: "/bands/band10.png",
    description: "A contemporary fusion band that blends multiple vocal styles with modern instrumentation. Their performances feature a unique mix of lead and harmonizing vocals, supported by dynamic keyboard and guitar arrangements.",
    members: [
      { id: 1, name: "Jahnavi", instrument: "Lead Vocals", image: "/crew/Jahnavi.jpg" },
      { id: 2, name: "Shashwat", instrument: "Drums", image: "/crew/Shashwath.jpg" },
      { id: 3, name: "Rupkatha", instrument: "Lead Vocals", image: "/crew/Rupkatha.jpg" },
      { id: 4, name: "Keshav", instrument: "Keyboard", image: "/crew/Keshav.jpg" },
      { id: 5, name: "Bhadresh", instrument: "Lead Vocals", image: "/crew/Bhadresh.jpg" },
      { id: 6, name: "Caitlin", instrument: "Lead Vocals", image: "/crew/Caitlin.jpg" },
    ]
  },
  {
    id: 10,
    name: "Sanchari",
    image: "/bands/band6.png",
    description: "A versatile rock collective that masterfully combines traditional rock elements with contemporary alternative influences. Their powerful stage presence and musical versatility create an immersive concert experience.",
    members: [
      { id: 1, name: "Chaitanya", instrument: "Drums", image: "/crew/Chaitanya2.jpg" },
      { id: 2, name: "Harith", instrument: "Keyboard", image: "/crew/Harith3.jpg" },
      { id: 3, name: "Vineela", instrument: "Lead Vocals", image: "/crew/Vineela1.jpg" },
      { id: 4, name: "Veni", instrument: "Lead Vocals", image: "/crew/Veni.jpg" },
      { id: 5, name: "Bhadresh", instrument: "Lead Vocals", image: "/crew/Bhadresh1.jpg" },
      { id: 6, name: "Grishmank", instrument: "Rhythm Guitar", image: "/crew/Grishmank.jpg" },
      { id: 7, name: "Vijay", instrument: "Lead Vocals", image: "/crew/Vijay.jpg" },
      { id: 8, name: "Ajitha Arvindh", instrument: "Lead Vocals", image: "/crew/Ajitha.jpg" },

      { id: 9, name: "Srinivas Nithin", instrument: "Lead Vocals", image: "/crew/SrinivasNithin.jpg" },
      { id: 10, name: "Ashish Nathan", instrument: "Rhythm Guitar", image: "/crew/AshishNathan.jpg" },

      { id: 11, name: "Manoj", instrument: "Keyboard", image: "/crew/Manoj.jpg" },
      { id: 12, name: "Srinidhi", instrument: "Lead Vocals", image: "/crew/Srinidhi.jpg" },
    ]
  },
];

export const merakiBands: Band[] = [
  {
    id: 1,
    name: "SOULROCK",
    image: "/bands/band1.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 2,
    name: "DreamPie",
    image: "/bands/band2.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 3,
    name: "Just For You All",
    image: "/bands/band3.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 4,
    name: "Rhythm Pulse",
    image: "/bands/band4.png",
    description: "A fusion band that blends rock, pop, and electronic elements.",
    members: []
  },
  {
    id: 5,
    name: "Melody Waves",
    image: "/bands/band5.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 6,
    name: "Sanchari",
    image: "/bands/band6.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  }
]; 
