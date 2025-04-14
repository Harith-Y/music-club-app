export interface BandMember {
  id: number;
  name: string;
  instrument: string;
  image: string;
}

export interface Band {
  id: number;
  name: string;
  description: string;
  members: BandMember[];
}

export const bands: Band[] = [
  {
    id: 1,
    name: "Rhythm Pulse",
    description: "A dynamic fusion band that masterfully blends rock, pop, and electronic elements. Their signature sound features intricate guitar work, powerful vocals, and innovative arrangements that create an electrifying live experience.",
    members: [
      { id: 1, name: "Anuj", instrument: "Rhythm Guitar", image: "/crew/Anuj.jpg" },
      { id: 2, name: "Ayushya", instrument: "Lead Guitar", image: "/crew/Ayushya.jpg" },
      { id: 3, name: "Harini", instrument: "Lead Vocals", image: "/crew/Harini.jpg" },
      { id: 4, name: "Priyansu", instrument: "Lead Vocals", image: "/crew/Priyansu.jpg" },
      { id: 5, name: "Varsha", instrument: "Keyboard", image: "/crew/Varsha.jpg" },
      { id: 6, name: "Yashas", instrument: "Drums", image: "/crew/Yashas.jpg" }
    ]
  },
  {
    id: 2,
    name: "Harmonic Horizon",
    description: "An indie folk ensemble that crafts soulful, storytelling melodies with acoustic instruments. Their music weaves tales of life's journey, love, and adventure, creating an intimate and emotionally resonant experience for their audience.",
    members: [
      { id: 1, name: "Abhinay", instrument: "Drums", image: "/crew/Abhinay.jpg" },
      { id: 2, name: "Asish", instrument: "Acoustic Guitar/Vocals", image: "/crew/Asish.jpg" },
      { id: 3, name: "Dhriti J N", instrument: "Lead Vocals", image: "/crew/Dhriti.jpg" },
      { id: 4, name: "Gokul", instrument: "Keyboard", image: "/crew/Gokul.jpg" },
      { id: 5, name: "Shashwat", instrument: "Lead Vocals", image: "/crew/Shashwat.jpg" },
      { id: 6, name: "Shruthi Pullela", instrument: "Electric Guitar/Vocals", image: "/crew/Shruthi.jpg" }
    ]
  },
  {
    id: 3,
    name: "Paradise",
    description: "A progressive rock band that pushes boundaries with their unique blend of classic rock influences and modern alternative sounds. Their distinctive sound is characterized by powerful vocals, intricate keyboard arrangements, and the unexpected addition of flute melodies.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Lead Vocals", image: "/crew/AbhishekN.jpg" },
      { id: 2, name: "Chaitanya", instrument: "Drums", image: "/crew/Chaitanya.jpg" },
      { id: 3, name: "Daniel", instrument: "Rhythm Keyboard", image: "/crew/Daniel.jpg" },
      { id: 4, name: "Manoj", instrument: "Lead Keyboard", image: "/crew/Manoj.jpg" },
      { id: 5, name: "Rittik", instrument: "Flute", image: "/crew/Rittik.jpg" },
      { id: 6, name: "Vivek", instrument: "Rhythm Guitar", image: "/crew/Vivek.jpg" },
    ]
  },
  {
    id: 4,
    name: "Soul Rock",
    description: "A versatile ensemble that seamlessly merges soulful vocals with rock energy. Their performances are known for rich harmonies, dynamic keyboard arrangements, and a perfect balance between powerful rock elements and emotional depth.",
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
    ]
  },
  {
    id: 5,
    name: "Dream Pie",
    description: "A modern rock band that combines technical guitar work with powerful vocal performances. Their music features intricate instrumental arrangements and a perfect blend of lead and backing vocals that create a rich, layered sound.",
    members: [
      { id: 1, name: "Adi Khera", instrument: "Rhythm Guitar", image: "/crew/Adi.jpg" },
      { id: 2, name: "Bhadresh", instrument: "Lead Vocals", image: "/crew/Bhadresh.jpg" },
      { id: 3, name: "Dikshant", instrument: "Drums", image: "/crew/Dikshant.jpg" },
      { id: 4, name: "Omkar Anand", instrument: "Lead Guitar", image: "/crew/Omkar.jpg" },
      { id: 5, name: "Rohan Joshi", instrument: "Keyboard/Lead Vocals", image: "/crew/Rohan.jpg" },
      { id: 6, name: "Shirish Giroti", instrument: "Lead Vocals", image: "/crew/Shirish.jpg" },
    ]
  },
  {
    id: 6,
    name: "Melody Waves",
    description: "A vocal-driven ensemble that creates waves of harmony with their multiple lead vocalists. Their sound is characterized by rich vocal arrangements, supported by dynamic keyboard work and rhythmic guitar patterns.",
    members: [
      { id: 1, name: "Anushree", instrument: "Lead Vocals", image: "/crew/Anushree.jpg" },
      { id: 2, name: "Ayushyaa", instrument: "Rhythm Guitar", image: "/crew/Ayushya.jpg" },
      { id: 3, name: "Dhanya", instrument: "Lead Vocals", image: "/crew/Dhanya.jpg" },
      { id: 4, name: "Harini", instrument: "Lead Vocals", image: "/crew/Harini.jpg" },
      { id: 5, name: "Harith", instrument: "Lead/Rhythm Keyboard / Lead Vocals", image: "/crew/Harith3.jpg" },
      { id: 6, name: "Yashas", instrument: "Drums", image: "/crew/Yashas.jpg" },
    ]
  },
  {
    id: 7,
    name: "Dosa",
    description: "A contemporary fusion band that blends multiple vocal styles with modern instrumentation. Their performances feature a unique mix of lead and harmonizing vocals, supported by dynamic keyboard and guitar arrangements.",
    members: [
      { id: 1, name: "Adi Khera", instrument: "Lead/Rhythm Guitar", image: "/crew/Adi.jpg" },
      { id: 2, name: "Dharani", instrument: "Lead Vocals", image: "/crew/Dharani.jpg" },
      { id: 3, name: "Dikshant", instrument: "Drums", image: "/crew/Dikshant.jpg" },
      { id: 4, name: "Divyaa", instrument: "Lead Vocals", image: "/crew/Divyaa.jpg" },
      { id: 5, name: "Gladwin John", instrument: "Lead/Rhythm Keyboard", image: "/crew/John.jpg" },
      { id: 6, name: "Meera K", instrument: "Harmonizing Vocals", image: "/crew/MeeraK.jpg" },
      { id: 7, name: "Shriya", instrument: "Harmonizing Vocals", image: "/crew/Shriya.jpg" },
    ]
  },
  {
    id: 8,
    name: "Sanchari",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds. Known for their powerful live performances.",
    members: [
      { id: 1, name: "Ajitha Arvindh", instrument: "Lead Vocals", image: "/crew/Ajitha.jpg" },
      { id: 2, name: "Ashish Nathan", instrument: "Rhythm Guitar", image: "/crew/AshishNathan.jpg" },
      { id: 3, name: "Bhadresh", instrument: "Lead Vocals", image: "/crew/Bhadresh.jpg" },
      { id: 4, name: "Chaitanya", instrument: "Drums", image: "/crew/Chaitanya2.jpg" },
      { id: 5, name: "Grishmank", instrument: "Rhythm Guitar", image: "/crew/Grishmank.jpg" },
      { id: 6, name: "Harith", instrument: "Lead/Rhythm Keyboard", image: "/crew/Harith3.jpg" },
      { id: 7, name: "Manoj", instrument: "Lead/Rhythm Keyboard", image: "/crew/Manoj.jpg" },
      { id: 8, name: "Srinidhi", instrument: "Lead Vocals", image: "/crew/Srinidhi.jpg" },
      { id: 9, name: "Srinivas Nithin", instrument: "Lead Vocals", image: "/crew/SrinivasNithin.jpg" },
      { id: 10, name: "Veni", instrument: "Lead Vocals", image: "/crew/Veni.jpg" },
      { id: 11, name: "Vijay", instrument: "Lead Vocals", image: "/crew/Vijay.jpg" },
      { id: 12, name: "Vineela", instrument: "Lead Vocals", image: "/crew/Vineela.jpg" },
    ]
  },
]; 