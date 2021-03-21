import FipePlot from '../FipePlot';

const Result = ({ data }) => {
  return (
    <div className="pt-10">
      <p className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl">
        Resultado
      </p>
      {!!data.length ? (
        <div className="overflow-x-auto">
          <FipePlot data={data}/>
        </div>
      ) : (
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Preencha os campos para realizar uma consulta.
        </p>
      )}
    </div>
  );
};

export default Result;
