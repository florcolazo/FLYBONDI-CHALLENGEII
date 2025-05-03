// src/components/FlightCard.jsx
export const FlightCard = ({ flight }) => (
  <div className="border p-4 rounded shadow bg-white">
    <h3 className="text-lg font-bold">{flight.title}</h3>
    <p>{flight.body}</p>
  </div>
);
