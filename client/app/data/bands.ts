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
    description: "A fusion band that blends rock, pop, and electronic elements. Known for their energetic performances and innovative arrangements.",
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
    description: "An indie folk ensemble that creates soulful melodies with acoustic instruments. Their music tells stories of life, love, and adventure.",
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
    name: "Soul Rock",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds. Known for their powerful live performances.",
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
    id: 4,
    name: "Dream Pie",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds. Known for their powerful live performances.",
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
    id: 5,
    name: "Abhishek's Band",
    description: "A high-energy rock band that combines classic rock influences with modern alternative sounds. Known for their powerful live performances.",
    members: [
      { id: 1, name: "Abhishek", instrument: "Lead Vocals", image: "/crew/AbhishekN.jpg" },
      { id: 2, name: "Chaitanya", instrument: "Drums", image: "/crew/Chaitanya.jpg" },
      { id: 3, name: "Daniel", instrument: "Rhythm Keyboard", image: "/crew/Daniel.jpg" },
      { id: 4, name: "Manoj", instrument: "Lead Keyboard", image: "/crew/Manoj.jpg" },
      { id: 5, name: "Rittik", instrument: "Flute", image: "/crew/Rittik.jpg" },
      { id: 6, name: "Vivek", instrument: "Rhythm Guitar", image: "/crew/Vivek.jpg" },
    ]
  }
]; 