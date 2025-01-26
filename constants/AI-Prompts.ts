export const ai_prompts = (
  locationName: string,
  latitude: string,
  longitude: string,
  startDate: string,
  endDate: string,
  totalDays: number,
  budget: string,
  budgetDesc: string,
  people: string
) => {
  return `
Generate a comprehensive travel plan for:
- **Location**: ${locationName} (${latitude}, ${longitude})
- **Travel Period**: ${startDate} to ${endDate} (${totalDays} days)
- **Travelers**: ${people}
- **Budget**: ${budget} (${budgetDesc})

The travel plan should include:
1. **Flight Details**:
   - Flight options with prices and booking URLs.
2. **Accommodation Options**:
   - Hotels with names, addresses, prices, images, geo-coordinates, ratings, and descriptions.
3. **Attractions**:
   - Nearby places to visit with:
     - Place names
     - Detailed descriptions
     - Images
     - Geo-coordinates
     - Ticket pricing
     - Travel time for each place.
4. **Daily Itinerary**:
   - Detailed plans for each day, including the best time to visit each attraction.
5. **Additional Information**:
   - Weather during the travel period.
   - Local tips and recommendations.

Output the response in a **structured JSON format** for seamless app integration.
`;
};

const ai_response = {
   "tripDetails": {
     "location": {
       "name": "Darjeeling, West Bengal, India",
       "coordinates": {
         "latitude": 26.8361645,
         "longitude": 88.3058878
       }
     },
     "travelPeriod": {
       "startDate": "2025-01-02",
       "endDate": "2025-01-05",
       "durationDays": 4
     },
     "travelers": {
       "type": "solo",
       "count": 1
     },
     "budget": "expensive"
   },
   "flightDetails": {
     "recommendation": "As a solo traveler from a global location, you will need to fly into Bagdogra Airport (IXB), the nearest airport to Darjeeling. From there, you will have to take a taxi or pre-booked car to Darjeeling.",
     "options": [
        {
           "airline": "Multiple airlines (Indigo, SpiceJet, Air India, Vistara)",
            "departureAirport": "Your departure airport",
            "arrivalAirport": "Bagdogra Airport (IXB)",
            "priceRange": "USD 250-600 (depending on origin and time of booking)",
            "bookingURL": "https://www.google.com/flights",
            "notes": "Prices can fluctuate significantly. Book in advance for better deals. Direct flights might be limited depending on your departure location, and layovers might be necessary, typically in Delhi or Kolkata."
         }
     ],
         "baggageInfo": "Check airline website for specific baggage allowance details"
 
   },
   "accommodationOptions": [
     {
       "name": "Mayfair Darjeeling",
       "address": "The Mall, Opposite Governor House, Darjeeling, West Bengal 734101, India",
       "priceRange": "USD 250-400 per night",
       "image": "https://www.mayfairhotels.com/assets/hotels/gallery/darjeeling/exterior-img.jpg",
       "coordinates": {
         "latitude": 27.043776,
         "longitude": 88.258095
       },
        "rating": 4.6,
        "description": "A luxury heritage hotel with opulent rooms, stunning views, and excellent dining options. Known for its impeccable service and classic architecture."
     },
     {
       "name": "The Elgin, Darjeeling",
       "address": "18, H.D. Lama Road, Darjeeling, West Bengal 734101, India",
        "priceRange": "USD 200-350 per night",
       "image": "https://media-cdn.tripadvisor.com/media/photo-s/0e/6e/83/8f/the-elgin-darjeeling.jpg",
       "coordinates": {
         "latitude": 27.049077,
         "longitude": 88.256350
       },
       "rating": 4.5,
       "description": "A charming heritage hotel offering colonial-era elegance, beautiful gardens, and a cozy atmosphere."
     },
        {
       "name": "Glenburn Tea Estate & Retreat",
       "address": "Singritan, Darjeeling, West Bengal 734101, India",
        "priceRange": "USD 400-600 per night",
       "image": "https://glenburnteaestate.com/wp-content/uploads/2021/11/Glenburn-tea-estate-luxury-hotel-in-darjeeling-1-e1669696503654.jpg",
       "coordinates": {
         "latitude": 26.983075,
          "longitude": 88.288263
       },
       "rating": 4.8,
        "description": "A luxurious tea estate experience. Offers stunning views, private tours of the plantation, and a refined dining experience. A bit outside of Darjeeling town but a unique option."
     }
   ],
   "attractions": [
     {
       "name": "Tiger Hill",
       "description": "Famous for its spectacular sunrise views over the Kanchenjunga mountain range. The panoramic views are breathtaking.",
       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tiger_Hill_Sunrise_view_from_Darjeeling.jpg/800px-Tiger_Hill_Sunrise_view_from_Darjeeling.jpg",
       "coordinates": {
         "latitude": 27.054528,
         "longitude": 88.261527
       },
       "ticketPrice": "INR 50-100 per person (entry fee for viewing platform)",
       "travelTime": "45 mins - 1 hour from the city center by taxi." ,
        "bestTimeToVisit": "Early morning before sunrise (around 4:00 AM - 5:00 AM)"
     },
       {
       "name": "Batasia Loop",
       "description": "A scenic railway loop with a memorial dedicated to Gorkha soldiers. Offers panoramic views of the Darjeeling Himalayan Railway and the surrounding hills.",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Batasia_loop_darjeeling.jpg/800px-Batasia_loop_darjeeling.jpg",
       "coordinates": {
         "latitude": 27.045587,
         "longitude": 88.265895
       },
       "ticketPrice": "INR 15 per person (small fee to enter)",
        "travelTime": "15 - 20 minutes from Darjeeling by Taxi.",
       "bestTimeToVisit": "Anytime during the day, but morning offers clearer views."
     },
       {
       "name": "Darjeeling Himalayan Railway (Toy Train)",
         "description": "A UNESCO World Heritage site, experience a ride on the charming toy train. Choose between a short joyride or a longer route.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Darjeeling_Himalayan_Railway_02_B.jpg/800px-Darjeeling_Himalayan_Railway_02_B.jpg",
        "coordinates": {
         "latitude": 27.040876,
         "longitude": 88.258959
       },
       "ticketPrice": "INR 1000 - 1500 for joyrides; longer routes can be more expensive.",
        "travelTime":"Train station is within the city, so the journey time depends on the route chosen. Allow for at least 2-3 hours",
       "bestTimeToVisit":"Morning rides are ideal."
     },
     {
       "name": "Peace Pagoda",
        "description":"A Japanese Buddhist temple offering a serene and peaceful atmosphere with panoramic views of the city. A great place for reflection.",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Darjeeling_Peace_Pagoda.jpg/800px-Darjeeling_Peace_Pagoda.jpg",
       "coordinates": {
         "latitude": 27.027206,
         "longitude": 88.273687
       },
       "ticketPrice": "Free entry",
        "travelTime": "20-30 minutes from the city center by Taxi.",
        "bestTimeToVisit":"Morning or late afternoon for the best views."
     },
     {
      "name": "Padmaja Naidu Himalayan Zoological Park",
         "description": "Home to high altitude animals such as red pandas, snow leopards, and Himalayan wolves.",
         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Red_panda_in_Padmaja_Naidu_Himalayan_Zoological_Park_Darjeeling_02.jpg/800px-Red_panda_in_Padmaja_Naidu_Himalayan_Zoological_Park_Darjeeling_02.jpg",
       "coordinates": {
         "latitude": 27.042065,
         "longitude": 88.262819
        },
        "ticketPrice": "INR 100 per person",
        "travelTime": "10-15 mins from the city center by taxi",
       "bestTimeToVisit": "Morning is ideal"
     },
     {
      "name": "Happy Valley Tea Estate",
         "description": "One of Darjeeling's oldest tea estates, offering guided tours to learn about the tea-making process and enjoy tea tasting.",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Happy_Valley_Tea_Estate_in_Darjeeling_03.jpg/800px-Happy_Valley_Tea_Estate_in_Darjeeling_03.jpg",
        "coordinates": {
           "latitude": 27.037084,
            "longitude": 88.252638
       },
       "ticketPrice": "INR 50-100 (small fee for tour and tasting)",
       "travelTime": "10 - 15 minutes from the city center by taxi",
       "bestTimeToVisit": "Mid-morning or afternoon for the tour"
       }
   ],
   "dailyItinerary": {
     "day1": {
       "date": "2025-01-02",
       "activities": [
         {"time": "Afternoon", "description": "Arrive at Bagdogra Airport (IXB). Take a pre-booked car/taxi to Darjeeling (approximately 3-4 hours). Check into your hotel. Relax and acclimatize to the altitude." },
         {"time": "Evening", "description": "Stroll around the Mall Road, enjoy local cuisine at a restaurant, and enjoy the evening atmosphere."}
       ]
     },
     "day2": {
       "date": "2025-01-03",
        "activities":[
         {"time": "Early Morning (4:00 AM)", "description": "Depart for Tiger Hill to witness the sunrise over Kanchenjunga. "},
         {"time": "Morning", "description": "Visit Batasia Loop and enjoy the scenic views, and visit the Gorkha war memorial."},
         {"time": "Late Morning", "description":"Explore the Padmaja Naidu Himalayan Zoological Park and see the unique high altitude animals."},
          {"time":"Afternoon", "description": "Lunch at a local cafe and explore local shops."},
         {"time":"Evening","description":"Enjoy a leisurely ride on the Darjeeling Himalayan Railway (toy train) and then have dinner at a fine-dining establishment."}
         ]
     },
     "day3": {
        "date": "2025-01-04",
       "activities": [
         {"time": "Morning", "description":"Visit the Peace Pagoda for a serene experience and great city views."},
         {"time": "Late Morning", "description":"Explore the Happy Valley Tea Estate, take a tour and enjoy some tea tasting."},
         {"time":"Afternoon", "description":"Enjoy a relaxing lunch at a local restaurant and spend the afternoon relaxing or shopping."},
         {"time": "Evening", "description": "Enjoy a cultural performance if available or a quiet dinner at your hotel or a recommended restaurant." }
       ]
     },
      "day4": {
        "date": "2025-01-05",
       "activities": [
         {"time":"Morning", "description": "Enjoy a leisurely breakfast at your hotel. Depending on flight timings, you can explore any remaining areas."},
         {"time": "Afternoon", "description":"Check out from the hotel and transfer to Bagdogra Airport (IXB) for your flight home." }
 
       ]
     }
   },
   "additionalInformation": {
     "weather": "Darjeeling experiences cold weather in January. Expect temperatures ranging from 0 to 10 degrees Celsius. It may snow during the period. Pack warm clothing, including layers, gloves, and hats. Carry comfortable walking shoes and rain gear.",
     "localTips": [
       "Book accommodations and flights in advance, especially during peak season.",
       "Hire a local taxi for sightseeing or pre-book a car for easy transportation.",
       "Bargaining is common in local markets.",
       "Carry cash, as not all establishments accept cards.",
        "Try local delicacies like Momos, Thukpa, and Darjeeling tea.",
        "Be aware of altitude sickness and take time to acclimatize to the change in elevation. Drink plenty of water."
     ],
     "recommendations": [
         " Consider hiring a local guide for a more enriched experience.",
         "Always keep a copy of important travel documents and IDs.",
         "Be aware of your surroundings, especially during late hours",
         "Always stay hydrated and carry snacks with you",
         "Enjoy the beautiful scenery and the serene atmosphere of Darjeeling"
     ]
   }
 }