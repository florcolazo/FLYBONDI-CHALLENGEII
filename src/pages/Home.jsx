    // src/pages/Home.jsx
    import { useEffect, useState } from "react";
    import { getFlights } from "../services/api";
    import { FlightCard } from "../components/FlightCard";

    export const Home = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights().then((res) => setFlights(res.data.slice(0, 10)));
    }, []);

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
        ))}
        </div>
    );
    };
