
export interface City {
  id: number;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
}

export const cities: City[] = [
  {
    id: 1,
    name: "New York",
    country: "United States",
    description: "The city that never sleeps, home to iconic landmarks like the Statue of Liberty, Times Square, and Central Park.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    rating: 4.7
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    description: "The City of Light, famous for the Eiffel Tower, Louvre Museum, and romantic ambiance.",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    rating: 4.8
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    description: "A bustling metropolis that perfectly blends traditional culture with futuristic technology.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    rating: 4.9
  },
  {
    id: 4,
    name: "Rome",
    country: "Italy",
    description: "The Eternal City, home to historical sites like the Colosseum, Roman Forum, and Vatican City.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    rating: 4.6
  },
  {
    id: 5,
    name: "London",
    country: "United Kingdom",
    description: "A diverse and historic city known for Big Ben, Buckingham Palace, and world-class museums.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    rating: 4.5
  },
  {
    id: 6,
    name: "Sydney",
    country: "Australia",
    description: "A vibrant harbor city famous for the Sydney Opera House, beautiful beaches, and laid-back lifestyle.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    rating: 4.7
  }
];
