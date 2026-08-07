import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const items = [
  { icon: MapPin, text: '5 acres in Corona, CA' },
  { icon: Calendar, text: 'Family owned since 2019' },
  { icon: Award, text: 'IACP member \u00B7 AKC CGC Evaluator' },
  { icon: Heart, text: 'Lifetime support on every program' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {items.map((item) => (
        <div key={item.text} className="trust-item">
          <item.icon size={20} aria-hidden="true" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
