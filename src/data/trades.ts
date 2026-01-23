export const TRADES = [
  'plumbing',
  'electrical',
  'gardening',
  'carpentry',
  'childcare',
  'eldercare',
  'cleaning',
  'painting',
] as const;

export type TradeId = typeof TRADES[number];

export interface Trade {
  id: TradeId;
  icon: string;
  color: string;
}

export const trades: Trade[] = [
  { id: 'plumbing', icon: '🔧', color: '#E07A5F' },
  { id: 'electrical', icon: '⚡', color: '#F2CC8F' },
  { id: 'gardening', icon: '🌱', color: '#81B29A' },
  { id: 'carpentry', icon: '🪚', color: '#3D5A80' },
  { id: 'childcare', icon: '👶', color: '#E9C46A' },
  { id: 'eldercare', icon: '🤝', color: '#F4A261' },
  { id: 'cleaning', icon: '🧹', color: '#2A9D8F' },
  { id: 'painting', icon: '🎨', color: '#E76F51' },
];
