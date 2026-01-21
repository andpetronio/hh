export const categories = [
  { id: 'plumbing', icon: '🔧', color: '#E07A5F' },
  { id: 'electrical', icon: '⚡', color: '#F2CC8F' },
  { id: 'gardening', icon: '🌱', color: '#81B29A' },
  { id: 'carpentry', icon: '🪚', color: '#3D5A80' },
  { id: 'childcare', icon: '👶', color: '#E9C46A' },
  { id: 'eldercare', icon: '🤝', color: '#F4A261' },
  { id: 'cleaning', icon: '🧹', color: '#2A9D8F' },
  { id: 'painting', icon: '🎨', color: '#E76F51' },
];

export const taskers = [
  {
    id: '1',
    nameKey: 'maria',
    category: 'plumbing',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    location: 'Downtown',
    experience: '8',
    verified: true,
    image: '👩‍🔧',
  },
  {
    id: '2',
    nameKey: 'james',
    category: 'electrical',
    rating: 4.8,
    reviews: 93,
    hourlyRate: 55,
    location: 'Westside',
    experience: '12',
    verified: true,
    image: '👨‍🔧',
  },
  {
    id: '3',
    nameKey: 'sarah',
    category: 'gardening',
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    location: 'Northside',
    experience: '5',
    verified: true,
    image: '👩‍🌾',
  },
  {
    id: '4',
    nameKey: 'david',
    category: 'carpentry',
    rating: 4.7,
    reviews: 81,
    hourlyRate: 50,
    location: 'Eastside',
    experience: '10',
    verified: true,
    image: '👨‍🏭',
  },
  {
    id: '5',
    nameKey: 'emma',
    category: 'childcare',
    rating: 4.9,
    reviews: 203,
    hourlyRate: 25,
    location: 'Central',
    experience: '6',
    verified: true,
    image: '👩‍👧',
  },
  {
    id: '6',
    nameKey: 'robert',
    category: 'eldercare',
    rating: 4.8,
    reviews: 112,
    hourlyRate: 30,
    location: 'Southside',
    experience: '9',
    verified: true,
    image: '👨‍⚕️',
  },
];

export function getTaskerById(id: string) {
  return taskers.find(t => t.id === id);
}

export function getTaskersByCategory(category: string) {
  return taskers.filter(t => t.category === category);
}

export function searchTaskers(query: string) {
  const lowerQuery = query.toLowerCase();
  return taskers.filter(t => 
    t.category.toLowerCase().includes(lowerQuery) ||
    t.location.toLowerCase().includes(lowerQuery)
  );
}
