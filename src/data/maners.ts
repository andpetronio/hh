import type { TradeId } from './trades';

export type ManerNameKey =
  | 'maria'
  | 'james'
  | 'sarah'
  | 'david'
  | 'emma'
  | 'robert';

  export type AvailabilityKey =
    | "monSat"
    | "tueSun"
    | "monFri"
    | "flexible"
    | "twentyFourSeven";

export interface Maner {
  id: number;
  nameKey: ManerNameKey;
  trade: TradeId;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  experience: number;
  verified: boolean;
  image: string;
  availabilityKey: AvailabilityKey;
}

export const maners: Maner[] = [
  {
    id: 1,
    nameKey: "maria",
    trade: "plumbing",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    location: "Downtown",
    experience: 8,
    verified: true,
    image: "👩‍🔧",
    availabilityKey: "monSat",
  },
  {
    id: 2,
    nameKey: "james",
    trade: "electrical",
    rating: 4.8,
    reviews: 93,
    hourlyRate: 55,
    location: "Westside",
    experience: 12,
    verified: true,
    image: "👨‍🔧",
    availabilityKey: "tueSun",
  },
  {
    id: 3,
    nameKey: "sarah",
    trade: "gardening",
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    location: "Northside",
    experience: 5,
    verified: true,
    image: "👩‍🌾",
    availabilityKey: "monFri",
  },
  {
    id: 4,
    nameKey: "david",
    trade: "carpentry",
    rating: 4.7,
    reviews: 81,
    hourlyRate: 50,
    location: "Eastside",
    experience: 10,
    verified: true,
    image: "👨‍🏭",
    availabilityKey: "flexible",
  },
  {
    id: 5,
    nameKey: "emma",
    trade: "childcare",
    rating: 4.9,
    reviews: 203,
    hourlyRate: 25,
    location: "Central",
    experience: 6,
    verified: true,
    image: "👩‍👧",
    availabilityKey: "twentyFourSeven",
  },
  {
    id: 6,
    nameKey: "robert",
    trade: "eldercare",
    rating: 4.8,
    reviews: 112,
    hourlyRate: 30,
    location: "Southside",
    experience: 9,
    verified: true,
    image: "👨‍⚕️",
    availabilityKey: "monSat",
  },
];

export function getManerById(id: number): Maner | undefined {
  return maners.find(t => t.id === id);
}

export function getManersByTrade(trade: TradeId): Maner[] {
  return maners.filter(t => t.trade === trade);
}

export function searchManers(query: string): Maner[] {
  const lowerQuery = query.toLowerCase();

  return maners.filter(t =>
    t.trade.toLowerCase().includes(lowerQuery) ||
    t.location.toLowerCase().includes(lowerQuery)
  );
}