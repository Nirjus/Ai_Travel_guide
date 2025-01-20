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
