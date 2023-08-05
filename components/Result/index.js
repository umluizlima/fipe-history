import DonateButton from "../DonateButton";
import FipePlot from "../FipePlot";
import ShareButton from "../ShareButton";
import VehicleCard from "../VehicleCard";

const Result = ({ data, onRemoveResult }) => {
  const hasData = !!Object.keys(data).length;

  const renderVehicleCards = (data = {}) =>
    Object.entries(data).map(([vehicleQuery, vehicleData]) => {
      const latestData = !!vehicleData.length && vehicleData.slice(-1)[0];
      const vehicle =
        latestData &&
        `${latestData["Marca"]} ${
          latestData["Modelo"]
        } ${`${latestData["AnoModelo"]}`.replace("32000", "Zero Km")}`;
      return (
        <li key={vehicleQuery}>
          <div className="mt-4">
            <VehicleCard
              vehicle={vehicle}
              price={latestData["Valor"]}
              onRemoveClick={() => onRemoveResult(vehicleQuery)}
            />
          </div>
        </li>
      );
    });

  const renderShareButton = (vehiclesData = []) => {
    let message = "Veja o histórico de preços de veículos novos e usados";
    const vehicles = Object.values(vehiclesData).map((vehicleData) => {
      const latestData = vehicleData[0];
      return `${latestData["Marca"]} ${
        latestData["Modelo"]
      } ${`${latestData["AnoModelo"]}`.replace("32000", "Zero Km")}`;
    });
    if (vehicles.length === 1) {
      message = `Veja o histórico de preços para ${vehicles[0]}`;
    }
    if (vehiclesData.length > 1) {
      message = `Compare os preços entre `.concat(vehicles.join(" e "));
    }
    return (
      <li>
        <div className="mt-2">
          <ShareButton
            buttonText="Compartilhar consulta"
            title="Histórico de usados"
            description={message}
          />
        </div>
      </li>
    );
  };

  return (
    <div className="pt-10">
      <h2
        id="resultado"
        className="text-2xl leading-8 font-extrabold text-gray-900"
      >
        <a href="#resultado">Resultados</a>
      </h2>
      {hasData ? (
        <ul>
          {renderVehicleCards(data)}
          {renderShareButton(Object.values(data))}
          <li>
            {/* <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Histórico</h3> */}
            <div className="mt-2 overflow-x-auto">
              <FipePlot data={data} />
            </div>
          </li>
          <li>
            <div className="flex flex-col">
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                Gostou deste site?
              </h3>
              <DonateButton message={"Apoie este projeto com uma doação"} />
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
