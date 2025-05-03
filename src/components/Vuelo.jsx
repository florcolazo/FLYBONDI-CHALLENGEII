import { useState } from "react";

const Vuelo = ({ vuelo }) => {
    const { origin, destination, date, price } = vuelo;
    const [completo, setCompleto] = useState(false);

    const handleClick = () => {
        setCompleto(!completo);
    };

    return (
        <div className="mx-10 my-5 bg-indigo-100 shadow-lg px-8 py-6 rounded-lg">
            <form onClick={handleClick} className="flex justify-end mb-4">
                <input
                    type="checkbox"
                    checked={completo}
                    onChange={(e) => setCompleto(e.target.checked)}
                />
            </form>

            <p className={`font-bold text-gray-700 ${completo ? 'line-through' : ''}`}>Origen:
                <span className="font-normal ml-2">{origin}</span>
            </p>
            <p className={`font-bold text-gray-700 ${completo ? 'line-through' : ''}`}>Destino:
                <span className="font-normal ml-2">{destination}</span>
            </p>
            <p className={`font-bold text-gray-700 ${completo ? 'line-through' : ''}`}>Fecha:
                <span className="font-normal ml-2">{date}</span>
            </p>
            <p className={`font-bold text-gray-700 ${completo ? 'line-through' : ''}`}>Precio:
                <span className="font-normal ml-2">${price}</span>
            </p>
        </div>
    );
};

export default Vuelo;
