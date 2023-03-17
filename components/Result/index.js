import FipePlot from '../FipePlot';
import ShareButton from '../ShareButton';
import VehicleCard from '../VehicleCard';

const Result = ({ data }) => {
  const latestData = !!data.length && data.slice(-1)[0];
  const vehicle = latestData && `${latestData['Marca']} ${latestData['Modelo']} ${`${latestData['AnoModelo']}`.replace('32000', 'Zero Km')}`;

  return (
    <div className="pt-10">
      <h2 id="resultado" className="text-2xl leading-8 font-extrabold text-gray-900">
        <a href="#resultado">Resultados</a>
      </h2>
      {latestData ? (
        <ul>
          <li>
            <div className="mt-4">
              <VehicleCard vehicle={vehicle} price={latestData['Valor']} />
            </div>
          </li>
          <li>
            <div className="mt-2">
              <ShareButton buttonText="Compartilhar consulta" title="Histórico de usados" description={`Veja o histórico de preços para ${vehicle}`} />
            </div>
          </li>
          <li>
            {/* <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Histórico</h3> */}
            <div className="mt-2 overflow-x-auto">
              <FipePlot data={data}/>
            </div>
          </li>
          <li>
            <div className="flex flex-col">
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Gostou deste site?</h3>
              <p className="mb-2 text-base text-gray-500">
                Apoie este projeto com uma <a target="_blank" rel="noopener noreferrer" href="https://donate.stripe.com/6oE4hV8EjfY31O0cMM" className="font-bold text-blue-600 hover:text-blue-800">doação</a>.
              </p>
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
