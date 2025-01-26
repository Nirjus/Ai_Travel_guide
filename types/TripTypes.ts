export interface Coordinates {
    latitude: number
    longitude: number
  }
  
  export interface TripDetails {
    location: {
      name: string
      coordinates: Coordinates
    }
    travelPeriod: {
      startDate: string
      endDate: string
      durationDays: number
    }
    travelers: {
      type: string
      count: number
    }
    budget: string
  }
  
  export interface FlightDetails {
    recommendation: string
    options: {
      airline: string
      departureAirport: string
      arrivalAirport: string
      priceRange: string
      bookingURL: string
      notes: string
    }[]
    baggageInfo: string
  }
  
  export interface Accommodation {
    name: string
    address: string
    priceRange: string
    image: string
    coordinates: Coordinates
    rating: number
    description: string
  }
  
  export interface Attraction {
    name: string
    description: string
    image: string
    coordinates: Coordinates
    ticketPrice: string
    travelTime: string
    bestTimeToVisit: string
  }
  
  export interface DailyActivity {
    time: string
    description: string
  }
  
  export interface DailyItinerary {
    [key: string]: {
      date: string
      activities: DailyActivity[]
    }
  }
  
  export interface AdditionalInformation {
    weather: string
    localTips: string[]
    recommendations: string[]
  }
  
  export interface TripData {
    tripDetails: TripDetails
    flightDetails: FlightDetails
    accommodationOptions: Accommodation[]
    attractions: Attraction[]
    dailyItinerary: DailyItinerary
    additionalInformation: AdditionalInformation
  }
  
  