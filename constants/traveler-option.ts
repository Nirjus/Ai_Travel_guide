export interface TravelerOption {
  id: number;
  title: string;
  desc: string;
  icon: string;
  people: string;
}
export const SelectTravelerList: TravelerOption[] = [
  {
    id: 1,
    title: "Just Me",
    desc: "A Solo traveler in expoloring the world",
    icon: "🕺",
    people: "1 person",
  },
  {
    id: 2,
    title: "Couple",
    desc: "A Couple in expoloring the world",
    icon: "🧑‍🤝‍🧑",
    people: "2 persons",
  },
  {
    id: 3,
    title: "Family",
    desc: "A Family of fun loving adventure",
    icon: "👪",
    people: "3 to 5 persons",
  },
  {
    id: 4,
    title: "Frainds",
    desc: "Group of frinds chill togather and fun around the world",
    icon: "✈️",
    people: "5 to 10 persons",
  },
];
