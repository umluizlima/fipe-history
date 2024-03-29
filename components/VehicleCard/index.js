const VehicleCard = ({ vehicle, price, onRemoveClick }) => {
  const urlOLX = `https://www.olx.com.br/brasil?q=${vehicle}`;
  const urlMeli = `https://lista.mercadolivre.com.br/veiculos/${vehicle}`;
  const urlYouTube = `https://www.youtube.com/results?search_query=${vehicle}`;
  const urlFacebook = `https://www.facebook.com/marketplace/search/?query=${vehicle}`;
  const urlAmazon = `https://www.amazon.com.br/gp/search?ie=UTF8&tag=ull0ba-20&index=automotive&keywords=${vehicle}`;

  const onClick = (platform) =>
    window.goatcounter.count({
      path: `click-${platform}`,
      event: true,
    });
  return (
    <div className="rounded-md ring-1 ring-gray-200 overflow-hidden">
      <div className="flex-auto px-4 py-5">
        <h3 className="text-lg font-base tracking-tight text-gray-900">
          {vehicle}
        </h3>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          {price}
        </span>
        <div>
          <div className="mt-2">
            <h4>Anúncios</h4>
            <div className="flex space-x-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlOLX}
                className="font-bold text-blue-600 hover:text-blue-800"
                onClick={() => onClick("OLX")}
              >
                OLX
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlMeli}
                className="font-bold text-blue-600 hover:text-blue-800"
                onClick={() => onClick("MeLi")}
              >
                Mercado Livre
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlFacebook}
                className="font-bold text-blue-600 hover:text-blue-800"
                onClick={() => onClick("Facebook")}
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="mt-2">
            <h4>Outros links</h4>
            <div className="flex space-x-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlYouTube}
                className="font-bold text-blue-600 hover:text-blue-800"
                onClick={() => onClick("YouTube")}
              >
                Vídeos
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlAmazon}
                className="font-bold text-blue-600 hover:text-blue-800"
                onClick={() => onClick("Amazon")}
              >
                Peças e acessórios
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onRemoveClick}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
