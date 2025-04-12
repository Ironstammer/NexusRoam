
interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  address?: string;
  price?: string;
}

export interface CityInfo {
  hotels: Place[];
  places: Place[];
  restaurants: Place[];
  transportation: {
    id: number;
    type: string;
    description: string;
    image: string;
    price?: string;
  }[];
}

export const cityInfo: Record<number, CityInfo> = {
  1: {  // New York
    hotels: [
      {
        id: 101,
        name: "Grand Central Hotel",
        description: "Luxury hotel in the heart of Manhattan with stunning views of the city skyline.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        rating: 4.8,
        price: "$$$"
      },
      {
        id: 102,
        name: "Brooklyn Heights Inn",
        description: "Charming boutique hotel in Brooklyn with a rooftop garden and organic breakfast.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        rating: 4.5,
        price: "$$"
      },
      {
        id: 103,
        name: "SoHo Loft Hotel",
        description: "Modern hotel featuring spacious loft-style rooms in the trendy SoHo district.",
        image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93",
        rating: 4.7,
        price: "$$$"
      }
    ],
    places: [
      {
        id: 201,
        name: "Statue of Liberty",
        description: "Iconic copper statue gifted by France, standing at Liberty Island in New York Harbor.",
        image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a",
        rating: 4.9
      },
      {
        id: 202,
        name: "Central Park",
        description: "Vast urban park spanning 843 acres with walking trails, lakes, and recreational facilities.",
        image: "https://images.unsplash.com/photo-1574874664144-69ef8e214828",
        rating: 4.7
      },
      {
        id: 203,
        name: "Empire State Building",
        description: "Art Deco skyscraper offering panoramic views from its 86th-floor observation deck.",
        image: "https://images.unsplash.com/photo-1583842928878-7e15113e99d3",
        rating: 4.6
      }
    ],
    restaurants: [
      {
        id: 301,
        name: "The Manhattan Grill",
        description: "Upscale steakhouse serving premium cuts and classic cocktails with city views.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        rating: 4.7,
        price: "$$$"
      },
      {
        id: 302,
        name: "Little Italy Trattoria",
        description: "Family-owned Italian restaurant with authentic recipes passed down for generations.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        rating: 4.6,
        price: "$$"
      },
      {
        id: 303,
        name: "Brooklyn Bagel Co.",
        description: "Popular breakfast spot known for hand-rolled bagels and freshly brewed coffee.",
        image: "https://images.unsplash.com/photo-1556074849-ed33e01d4359",
        rating: 4.8,
        price: "$"
      }
    ],
    transportation: [
      {
        id: 401,
        type: "Subway",
        description: "Extensive subway system running 24/7, connecting all five boroughs of New York City.",
        image: "https://images.unsplash.com/photo-1570713118178-00856e47d366",
        price: "$"
      },
      {
        id: 402,
        type: "Yellow Taxi",
        description: "Iconic yellow cabs available throughout the city, easily hailed from the street.",
        image: "https://images.unsplash.com/photo-1635435722371-8d451a6cb0d2",
        price: "$$"
      },
      {
        id: 403,
        type: "Bike Rental",
        description: "Citi Bike sharing program with stations across Manhattan, Brooklyn, and Queens.",
        image: "https://images.unsplash.com/photo-1591172132684-c2344ca36d66",
        price: "$"
      }
    ]
  },
  2: {  // Paris
    hotels: [
      {
        id: 104,
        name: "Le Grand Palais Hotel",
        description: "Elegant 5-star hotel near the Champs-Élysées with classic Parisian decor.",
        image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
        rating: 4.9,
        price: "$$$"
      },
      {
        id: 105,
        name: "Montmartre Boutique Inn",
        description: "Charming hotel set in a historic building with views of Sacré-Cœur.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        rating: 4.7,
        price: "$$"
      },
      {
        id: 106,
        name: "Seine River Lodge",
        description: "Modern hotel offering rooms with river views and a rooftop terrace.",
        image: "https://images.unsplash.com/photo-1560200353-ce0a76b1d438",
        rating: 4.6,
        price: "$$"
      }
    ],
    places: [
      {
        id: 204,
        name: "Eiffel Tower",
        description: "Iconic iron tower on the Champ de Mars, offering stunning views of Paris.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
        rating: 4.9
      },
      {
        id: 205,
        name: "Louvre Museum",
        description: "World's largest art museum and home to thousands of works including the Mona Lisa.",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52",
        rating: 4.8
      },
      {
        id: 206,
        name: "Notre-Dame Cathedral",
        description: "Medieval Catholic cathedral noted for its Gothic architecture.",
        image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c",
        rating: 4.7
      }
    ],
    restaurants: [
      {
        id: 304,
        name: "Le Petit Bistro",
        description: "Traditional French bistro serving classic dishes in a cozy atmosphere.",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",
        rating: 4.8,
        price: "$$"
      },
      {
        id: 305,
        name: "Café des Artistes",
        description: "Historic café frequented by artists and writers, known for its pastries.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        rating: 4.6,
        price: "$$"
      },
      {
        id: 306,
        name: "La Maison Gourmande",
        description: "Fine dining restaurant with a Michelin star, offering innovative French cuisine.",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7",
        rating: 4.9,
        price: "$$$"
      }
    ],
    transportation: [
      {
        id: 404,
        type: "Metro",
        description: "Efficient subway system with 16 lines covering all areas of Paris.",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
        price: "$"
      },
      {
        id: 405,
        type: "Public Bikes (Vélib')",
        description: "Bike sharing system with stations throughout Paris, perfect for sightseeing.",
        image: "https://images.unsplash.com/photo-1559348349-86d2e4575ff9",
        price: "$"
      },
      {
        id: 406,
        type: "River Shuttle (Batobus)",
        description: "Boat service on the Seine River connecting major tourist attractions.",
        image: "https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa",
        price: "$$"
      }
    ]
  },
  3: {  // Tokyo
    hotels: [
      {
        id: 107,
        name: "Tokyo Sky Tower Hotel",
        description: "High-rise luxury hotel offering panoramic views of the Tokyo skyline.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        rating: 4.9,
        price: "$$$"
      },
      {
        id: 108,
        name: "Shibuya Crossing Inn",
        description: "Modern hotel located near the famous Shibuya Crossing and shopping district.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        rating: 4.7,
        price: "$$"
      },
      {
        id: 109,
        name: "Traditional Ryokan",
        description: "Authentic Japanese inn offering tatami rooms, futon beds, and hot spring baths.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        rating: 4.8,
        price: "$$$"
      }
    ],
    places: [
      {
        id: 207,
        name: "Tokyo Skytree",
        description: "Tallest tower in Japan offering observation decks with spectacular city views.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        rating: 4.7
      },
      {
        id: 208,
        name: "Senso-ji Temple",
        description: "Ancient Buddhist temple located in Asakusa, Tokyo's oldest temple.",
        image: "https://images.unsplash.com/photo-1580694160238-420f3b2414b2",
        rating: 4.8
      },
      {
        id: 209,
        name: "Meiji Shrine",
        description: "Shinto shrine dedicated to Emperor Meiji and Empress Shoken, set in a forest.",
        image: "https://images.unsplash.com/photo-1570543922355-c64a19ab2bc7",
        rating: 4.6
      }
    ],
    restaurants: [
      {
        id: 307,
        name: "Sushi Mastery",
        description: "High-end sushi restaurant where master chefs prepare fresh fish at the counter.",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        rating: 4.9,
        price: "$$$"
      },
      {
        id: 308,
        name: "Ramen Street",
        description: "Popular ramen shop serving authentic bowls with various broth options.",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e",
        rating: 4.7,
        price: "$"
      },
      {
        id: 309,
        name: "Izakaya Experience",
        description: "Traditional Japanese pub serving small plates and drinks in a lively atmosphere.",
        image: "https://images.unsplash.com/photo-1554502078-ef0fc409efce",
        rating: 4.6,
        price: "$$"
      }
    ],
    transportation: [
      {
        id: 407,
        type: "Tokyo Metro",
        description: "Extensive subway network covering most areas of Tokyo with frequent trains.",
        image: "https://images.unsplash.com/photo-1642229807876-43c37cfd6b25",
        price: "$"
      },
      {
        id: 408,
        type: "JR Lines",
        description: "Commuter rail service, including the famous Yamanote Line circling central Tokyo.",
        image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1",
        price: "$"
      },
      {
        id: 409,
        type: "Taxi",
        description: "Clean and efficient taxis available throughout the city with polite drivers.",
        image: "https://images.unsplash.com/photo-1633833538310-8eb8eda51912",
        price: "$$$"
      }
    ]
  }
};

export const getDefaultCity = () => cityInfo[1]; // New York as default
