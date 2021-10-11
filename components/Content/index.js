import ShareButton from '../ShareButton';

const Content = () => (
  <div>
    <div className="pb-5">
      <h2 id="como-funciona" className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl">
        <a href="#como-funciona">Como funciona?</a>
      </h2>
      <p className="mt-2 max-w-2xl text-lg text-gray-500">
        Esta página consulta diretamente o site da Tabela Fipe para o veículo escolhido, percorrendo as tabelas de referência disponíveis para montar um gráfico com seu preço médio mês a mês.
      </p>
    </div>

    <ul className="space-y-10">
      <li className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Preços nos últimos 2 anos
          </h3>
          <p className="mt-2 text-base text-gray-500">
            A consulta é limitada ao prazo máximo de 24 meses, onde veículos mais recentes apresentam menos resultados.
          </p>
        </div>
      </li>

      <li className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Entenda a Tabela Fipe
          </h3>
          <p className="mt-2 text-base text-gray-500">
            Visite o <a target="_blank" rel="noopener noreferrer" href="https://veiculos.fipe.org.br/" className="font-bold text-blue-500 hover:text-blue-700">site oficial</a> para saber mais detalhes sobre a metodologia aplicada na definição dos preços médios de veículos.
          </p>
        </div>
      </li>
    </ul>

    <div className="py-5">
      <ShareButton
        title="Histórico de usados"
        description="Visualize as variações de preço na Tabela Fipe"
      />
    </div>
  </div>
);

export default Content;
