import FipePlot from '../FipePlot';
import ShareButton from '../ShareButton';

const Result = ({ data }) => {
  const latestData = !!data.length && data.slice(-1)[0];
  const vehicle = latestData && `${latestData['Marca']} ${latestData['Modelo']} ${`${latestData['AnoModelo']}`.replace('32000', 'Zero Km')}`;

  return (
    <div className="pt-10">
      <h2 id="resultado" className="text-2xl leading-8 font-extrabold text-gray-900">
        <a href="#resultado">Resultado</a>
      </h2>
      {latestData ? (
        <ul>
          <div className="flex flex-col md:flex-row justify-between">
            <li>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Veículo</h3>
              <p className="mt-1 text-base text-gray-500">{vehicle}</p>
            </li>
            <li>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Preço atual</h3>
              <p className="mt-1 text-base text-gray-500">{latestData['Valor']}</p>
            </li>
            <li>
              <div className="mt-2">
                <ShareButton buttonText="Compartilhar consulta" title="Histórico de usados" description={`Veja o histórico de preços para ${vehicle}`} />
              </div>
            </li>
          </div>
          <li>
            <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Histórico</h3>
            <div className="overflow-x-auto">
              <FipePlot data={data}/>
            </div>
          </li>
        </ul>
      ) : (
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Preencha os campos para realizar uma consulta.
        </p>
      )}
    </div>
  );
};

export default Result;
