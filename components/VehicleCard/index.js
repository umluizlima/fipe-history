import FipePlot from '../FipePlot';
import ShareButton from '../ShareButton';

const VehicleCard = ({ vehicle, price, onRemoveClick }) => {
  const urlOLX = `https://www.olx.com.br/brasil?q=${vehicle}`;
  const urlMeli = `https://lista.mercadolivre.com.br/veiculos/${vehicle}`;
  const urlYouTube = `https://www.youtube.com/results?search_query=${vehicle}`;

  return (
    <div className="rounded-md ring-1 ring-gray-200 flex px-4 py-5">
      <div className="flex-auto">
        <h3 className="text-lg font-base tracking-tight text-gray-900">{vehicle}</h3>
        <h3 className="text-lg font-base tracking-tight text-gray-900" onClick={onRemoveClick}>remover</h3>
        <span className="text-xl font-bold tracking-tight text-gray-900">{price}</span>
        <div>
          <p className="flex-none text-base font-medium leading-6 text-gray-500">Saiba mais</p>
          <div className="mt-2 flex items-center gap-x-8">
            <a target="_blank" rel="noopener noreferrer" href={urlYouTube} className="font-bold text-blue-600 hover:text-blue-800">YouTube</a>
            <a target="_blank" rel="noopener noreferrer" href={urlOLX} className="font-bold text-blue-600 hover:text-blue-800">OLX</a>
            <a target="_blank" rel="noopener noreferrer" href={urlMeli} className="font-bold text-blue-600 hover:text-blue-800">Mercado Livre</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
