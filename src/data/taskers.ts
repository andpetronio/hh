import type { TradeId } from './trades';

export type TaskerNameKey =
  | 'maria'
  | 'james'
  | 'sarah'
  | 'david'
  | 'emma'
  | 'robert';

export interface Tasker {
  id: number;
  nameKey: TaskerNameKey;
  trade: TradeId;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  experience: number;
  verified: boolean;
  image: string;
}

export const taskers: Tasker[] = [
  {
    id: 1,
    nameKey: 'maria',
    trade: 'plumbing',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    location: 'Downtown',
    experience: 8,
    verified: true,
    image: '👩‍🔧',
  },
  {
    id: 2,
    nameKey: 'james',
    trade: 'electrical',
    rating: 4.8,
    reviews: 93,
    hourlyRate: 55,
    location: 'Westside',
    experience: 12,
    verified: true,
    image: '👨‍🔧',
  },
  {
    id: 3,
    nameKey: 'sarah',
    trade: 'gardening',
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    location: 'Northside',
    experience: 5,
    verified: true,
    image: '👩‍🌾',
  },
  {
    id: 4,
    nameKey: 'david',
    trade: 'carpentry',
    rating: 4.7,
    reviews: 81,
    hourlyRate: 50,
    location: 'Eastside',
    experience: 10,
    verified: true,
    image: '👨‍🏭',
  },
  {
    id: 5,
    nameKey: 'emma',
    trade: 'childcare',
    rating: 4.9,
    reviews: 203,
    hourlyRate: 25,
    location: 'Central',
    experience: 6,
    verified: true,
    image: '👩‍👧',
  },
  {
    id: 6,
    nameKey: 'robert',
    trade: 'eldercare',
    rating: 4.8,
    reviews: 112,
    hourlyRate: 30,
    location: 'Southside',
    experience: 9,
    verified: true,
    image: '👨‍⚕️',
  },
];

export function getTaskerById(id: number): Tasker | undefined {
  return taskers.find(t => t.id === id);
}

export function getTaskersByTrade(trade: TradeId): Tasker[] {
  return taskers.filter(t => t.trade === trade);
}

export function searchTaskers(query: string): Tasker[] {
  const lowerQuery = query.toLowerCase();

  return taskers.filter(t =>
    t.trade.toLowerCase().includes(lowerQuery) ||
    t.location.toLowerCase().includes(lowerQuery)
  );
}