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
    image: "/bands/RhythmPulse.png",
    description: "A fusion band that blends rock, pop, and electronic elements. Known for their energetic performances and innovative arrangements.",
    members: [
      { id: 1, name: "Anuj", instrument: "Rhythm Guitar", image: "/bands/RhythmPulse/Anuj.jpg" },
      { id: 2, name: "Ayushya", instrument: "Lead Guitar", image: "/bands/RhythmPulse/Ayushya.jpg" },
      { id: 3, name: "Harini", instrument: "Lead Vocals", image: "/bands/RhythmPulse/Harini.jpg" },
      { id: 4, name: "Priyansu", instrument: "Lead Vocals", image: "/bands/RhythmPulse/Priyansu.jpg" },
      { id: 5, name: "Varsha", instrument: "Keyboard", image: "/bands/RhythmPulse/Varsha1.jpg" },
      { id: 6, name: "Yashas", instrument: "Drums", image: "/bands/RhythmPulse/Yashas.jpg" }
    ],
  },
  {
    id: 2,
    name: "Harmonic Horizon",
    image: "/bands/band8.png",
    description: "An indie folk ensemble that creates soulful melodies with acoustic instruments. Their music tells stories of life, love, and adventure.",
    members: [
      { id: 1, name: "Abhinay", instrument: "Drums", image: "/bands/HarmonicHorizon/Abhinay.jpg" },
      { id: 2, name: "Asish", instrument: "Acoustic Guitar/Vocals", image: "/bands/HarmonicHorizon/Asish.jpg" },
      { id: 3, name: "Dhriti J N", instrument: "Lead Vocals", image: "/bands/HarmonicHorizon/Dhriti.jpg" },
      { id: 4, name: "Gokul", instrument: "Keyboard", image: "/bands/HarmonicHorizon/Gokul.jpg" },
      { id: 5, name: "Shashwat", instrument: "Lead Vocals", image: "/bands/HarmonicHorizon/Shashwat.jpg" },
      { id: 6, name: "Shruthi Pullela", instrument: "Electric Guitar/Vocals", image: "/bands/HarmonicHorizon/Shruthi.jpg" }
    ],
  },
  {
    id: 3,
    name: "Soul Rock",
    image: "/bands/SoulRock.png",
    description: "A powerhouse rock ensemble that masterfully blends classic rock anthems with contemporary alternative vibes. Their dynamic stage presence and tight harmonies create an unforgettable live experience.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Drums", image: "/bands/SoulRock/AbhishekKumar.jpg" },
      { id: 2, name: "David J Sharon", instrument: "Mixer", image: "/bands/SoulRock/David.png" },
      { id: 3, name: "Gladwin John", instrument: "Lead Vocals", image: "/bands/SoulRock/John.jpg" },
      { id: 4, name: "Meera R", instrument: "Lead Vocals", image: "/bands/SoulRock/MeeraR.jpg" },
      { id: 5, name: "Harith Y", instrument: "Lead Keyboard", image: "/bands/SoulRock/Harith.jpg" },
      { id: 6, name: "Shriya Y", instrument: "Harmonizing Vocals", image: "/bands/SoulRock/Shriya.jpg" },
      { id: 7, name: "Pavan", instrument: "Lead Vocals", image: "/bands/SoulRock/Pavan.jpg" },
      { id: 8, name: "Priyank Jain", instrument: "Rhythm Guitar", image: "/bands/SoulRock/Priyank.jpg" },
      { id: 9, name: "Tarun", instrument: "Rhythm Keyboard", image: "/bands/SoulRock/Tarun.jpg" }
    ],
  },
  {
    id: 4,
    name: "Dream Pie",
    image: "/bands/DreamPie.png",
    description: "An innovative rock collective that pushes musical boundaries by fusing progressive rock elements with modern indie sensibilities. Their experimental approach and technical precision set them apart.",
    members: [
      { id: 1, name: "Adi Khera", instrument: "Rhythm Guitar", image: "/bands/DreamPie/Adi.jpg" },
      { id: 2, name: "Bhadresh", instrument: "Lead Vocals", image: "/bands/DreamPie/Bhadresh.jpg" },
      { id: 3, name: "Dikshant", instrument: "Drums", image: "/bands/DreamPie/Dikshant.jpg" },
      { id: 4, name: "Omkar Anand", instrument: "Lead Guitar", image: "/bands/DreamPie/Omkar.jpg" },
      { id: 5, name: "Rohan Joshi", instrument: "Keyboard/Lead Vocals", image: "/bands/DreamPie/Rohan.jpg" },
      { id: 6, name: "Shirish Giroti", instrument: "Lead Vocals", image: "/bands/DreamPie/Shirish.jpg" },
    ],
  },
  {
    id: 5,
    name: "Paradise",
    image: "/bands/band9.png",
    description: "A versatile rock outfit that seamlessly transitions between classic rock ballads and contemporary alternative hits. Their polished performances and charismatic stage presence captivate audiences.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Lead Vocals", image: "/bands/Paradise/AbhishekN.jpg" },
      { id: 2, name: "Chaitanya", instrument: "Drums", image: "/bands/Paradise/Chaitanya.jpg" },
      { id: 3, name: "Daniel", instrument: "Rhythm Keyboard", image: "/bands/Paradise/Daniel.jpg" },
      { id: 4, name: "Manoj", instrument: "Lead Keyboard", image: "/bands/Paradise/Manoj.jpg" },
      { id: 5, name: "Rittik", instrument: "Flute", image: "/bands/Paradise/Rittik.jpg" },
      { id: 6, name: "Vivek", instrument: "Rhythm Guitar", image: "/bands/Paradise/Vivek.jpg" },
    ],
  },
  {
    id: 6,
    name: "Just For You All",
    image: "/bands/JustForYouAll.png",
    description: "A dynamic rock ensemble that delivers high-octane performances with a perfect blend of classic rock energy and modern alternative edge. Their infectious enthusiasm and crowd interaction make every show memorable.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Lead Vocals", image: "/bands/JustForYouAll/AbhishekN.jpg" },
      { id: 2, name: "Shirish", instrument: "Lead Vocals", image: "/bands/JustForYouAll/Shirish.jpg" },
      { id: 3, name: "Chaitanya", instrument: "Drums", image: "/bands/JustForYouAll/Chaitanya.jpg" },
      { id: 4, name: "Seimen", instrument: "Backing Vocals/Lead Guitar", image: "/bands/JustForYouAll/Seimen.jpg" },
      { id: 5, name: "Vivek", instrument: "Backing Vocals/Rhythm Guitar", image: "/bands/JustForYouAll/Vivek.jpg" },
      { id: 6, name: "Daniel", instrument: "Keyboard", image: "/bands/JustForYouAll/Daniel.jpg" },
    ]
  },
  {
    id: 7,
    name: "Melody Waves",
    image: "/bands/MelodyWaves.png",
    description: "A vocal-driven ensemble that creates waves of harmony with their multiple lead vocalists. Their sound is characterized by rich vocal arrangements, supported by dynamic keyboard work and rhythmic guitar patterns.",
    members: [
      { id: 1, name: "Anushree", instrument: "Lead Vocals", image: "/bands/MelodyWaves/Anushree.jpg" },
      { id: 2, name: "Ayushyaa", instrument: "Rhythm Guitar", image: "/bands/MelodyWaves/Ayushya.jpg" },
      { id: 3, name: "Dhanya", instrument: "Lead Vocals", image: "/bands/MelodyWaves/Dhanya.jpg" },
      { id: 4, name: "Harini", instrument: "Lead Vocals", image: "/bands/MelodyWaves/Harini.jpg" },
      { id: 5, name: "Harith", instrument: "Keyboard/Lead Vocals", image: "/bands/MelodyWaves/Harith.jpg" },
      { id: 6, name: "Yashas", instrument: "Drums", image: "/bands/MelodyWaves/Yashas.jpg" },
    ]
  },
  {
    id: 8,
    name: "Dosa",
    image: "/bands/band7.png",
    description: "A contemporary fusion band that blends multiple vocal styles with modern instrumentation. Their performances feature a unique mix of lead and harmonizing vocals, supported by dynamic keyboard and guitar arrangements.",
    members: [
      { id: 1, name: "Adi Khera", instrument: "Guitar", image: "/bands/Dosa/Adi.jpg" },
      { id: 2, name: "Dharani", instrument: "Lead Vocals", image: "/bands/Dosa/Dharani.png" },
      { id: 3, name: "Dikshant", instrument: "Drums", image: "/bands/Dosa/Dikshant.jpg" },
      { id: 4, name: "Divyaa", instrument: "Lead Vocals", image: "/bands/Dosa/Divyaa.jpg" },
      { id: 5, name: "Gladwin John", instrument: "Keyboard", image: "/bands/Dosa/John.jpg" },
      { id: 6, name: "Meera K", instrument: "Harmonizing Vocals", image: "/bands/Dosa/MeeraK.jpg" },
      { id: 7, name: "Shriya", instrument: "Harmonizing Vocals", image: "/bands/Dosa/Shriya.jpg" },
    ]
  },
  {
    id: 9,
    name: "Accord",
    image: "/bands/band10.png",
    description: "A contemporary fusion band that blends multiple vocal styles with modern instrumentation. Their performances feature a unique mix of lead and harmonizing vocals, supported by dynamic keyboard and guitar arrangements.",
    members: [
      { id: 1, name: "Jahnavi", instrument: "Lead Vocals", image: "/bands/Accord/Jahnavi.jpg" },
      { id: 2, name: "Shashwat", instrument: "Drums", image: "/bands/Accord/Shashwat.jpg" },
      { id: 3, name: "Rupkatha", instrument: "Lead Vocals", image: "/bands/Accord/Rupkatha.jpg" },
      { id: 4, name: "Keshav", instrument: "Keyboard", image: "/bands/Accord/Keshav.jpg" },
      { id: 5, name: "Bhadresh", instrument: "Lead Vocals", image: "/bands/Accord/Bhadresh.jpg" },
      { id: 6, name: "Caitlin", instrument: "Lead Vocals", image: "/bands/Accord/Caitlin.jpg" },
    ]
  },
  {
    id: 10,
    name: "Sanchari",
    image: "/bands/Sanchari.png",
    description: "A versatile rock collective that masterfully combines traditional rock elements with contemporary alternative influences. Their powerful stage presence and musical versatility create an immersive concert experience.",
    members: [
      { id: 1, name: "Chaitanya", instrument: "Drums", image: "/bands/Sanchari/Chaitanya.jpg" },
      { id: 2, name: "Harith", instrument: "Keyboard", image: "/bands/Sanchari/Harith.jpg" },
      { id: 3, name: "Vineela", instrument: "Lead Vocals", image: "/bands/Sanchari/Vineela1.jpg" },
      { id: 4, name: "Veni", instrument: "Lead Vocals", image: "/bands/Sanchari/Veni.jpg" },
      { id: 5, name: "Bhadresh", instrument: "Lead Vocals", image: "/bands/Sanchari/Bhadresh.jpg" },
      { id: 6, name: "Grishmank", instrument: "Rhythm Guitar", image: "/bands/Sanchari/Grishmank.jpg" },
      { id: 7, name: "Vijay", instrument: "Lead Vocals", image: "/bands/Sanchari/Vijay.jpg" },
      { id: 8, name: "Ajitha Arvindh", instrument: "Lead Vocals", image: "/bands/Sanchari/Ajitha.jpg" },

      { id: 9, name: "Srinivas Nithin", instrument: "Lead Vocals", image: "/bands/Sanchari/SrinivasNithin.jpg" },
      { id: 10, name: "Ashish Nathan", instrument: "Rhythm Guitar", image: "/bands/Sanchari/AshishNathan.jpg" },

      { id: 11, name: "Manoj", instrument: "Keyboard", image: "/bands/Sanchari/Manoj.jpg" },
      { id: 12, name: "Srinidhi", instrument: "Lead Vocals", image: "/bands/Sanchari/Srinidhi.jpg" },
    ]
  },
];

export const merakiBands: Band[] = [
  {
    id: 1,
    name: "SOULROCK",
    image: "/bands/SoulRock.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 2,
    name: "DreamPie",
    image: "/bands/DreamPie.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 3,
    name: "Just For You All",
    image: "/bands/JustForYouAll.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 4,
    name: "Rhythm Pulse",
    image: "/bands/RhythmPulse.png",
    description: "A fusion band that blends rock, pop, and electronic elements.",
    members: []
  },
  {
    id: 5,
    name: "Melody Waves",
    image: "/bands/MelodyWaves.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  },
  {
    id: 6,
    name: "Sanchari",
    image: "/bands/Sanchari.png",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds.",
    members: []
  }
]; 
