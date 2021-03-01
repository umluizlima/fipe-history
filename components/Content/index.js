const Content = () => (
  <div>
    <div className="pb-10">
      <p className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl">
        Tome a melhor decisão
      </p>
      <p className="mt-2 max-w-2xl text-lg text-gray-500">
        Acompanhe a variação de preços para decidir se está na hora certa de comprar seu próximo veículo ou vender seu atual.
      </p>
    </div>

    <dl className="space-y-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <dt className="text-lg leading-6 font-medium text-gray-900">
            Compro ou espero?
          </dt>
          <dd className="mt-2 text-base text-gray-500">
            O modelo que procura sofreu aumentos recentes? Pode valer a pena aguardar mais um pouco.
          </dd>
        </div>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <dt className="text-lg leading-6 font-medium text-gray-900">
            Vale vender?
          </dt>
          <dd className="mt-2 text-base text-gray-500">
            Sua rotina mudou e não faz mais sentido manter um veículo próprio? Pode ser vantajoso colocar o dinheiro no bolso.
          </dd>
        </div>
      </div>
    </dl>
  </div>
);

export default Content;
