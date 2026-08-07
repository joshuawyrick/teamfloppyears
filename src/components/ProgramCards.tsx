import { Link } from 'react-router-dom';

interface Program {
  name: string;
  price: string;
  duration: string;
  deposit: string;
  description: string;
  bestFor: string;
  link: string;
}

interface ProgramCardsProps {
  programs: Program[];
}

export default function ProgramCards({ programs }: ProgramCardsProps) {
  const sorted = [...programs].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
    const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
    return priceB - priceA;
  });

  return (
    <div className="grid-3">
      {sorted.map((program) => (
        <Link
          key={program.name}
          to={program.link}
          className="program-card"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3>{program.name}</h3>
          <div className="program-price">{program.price}</div>
          <div className="program-duration">
            {program.duration} &middot; {program.deposit} deposit
          </div>
          <p className="program-desc">{program.description}</p>
          <div className="program-best-for">
            <strong>Best for:</strong> {program.bestFor}
          </div>
        </Link>
      ))}
    </div>
  );
}
