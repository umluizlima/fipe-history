const questions = [
  {
    title: 'O que é a tabela Fipe?',
    description: 'É um levantamento mensal dos preços médios praticados no Brasil para a venda de veículos.',
  },
  {
    title: 'Quem produz a tabela Fipe?',
    description: 'A tabela Fipe é produzida pela Fundação Instituto de Pesquisas Econômicas',
  },
  {
    title: 'Quais veículos encontro na tabela Fipe?',
    description: 'A tabela Fipe inclui veículos de cada marca, modelo e versão para o segmento de carros e utilitários a partir do ano/modelo de 1985, caminhões e micro-ônibus a partir do ano/modelo de 1981, e motos, triciclos e quadriciclos a partir do ano/modelo de 1990. Para caminhão, é considerado apenas valor do chassis cabine.',
  },
  {
    title: 'Quais veículos não entram na tabela Fipe?',
    description: 'São desconsiderados veículos para vendas especiais, como: revenda, frotista, governo, blindados, personalizados, conversão de motor e veículos transformados. Além disso, veículos de fabricação própria e de marcas não consolidadas no mercado, importação independente ou veículos de teste também não entram no levantamento.'
  },
  {
    title: 'Devo sempre seguir o valor da tabela Fipe?',
    description: 'Não necessariamente. O valor da tabela Fipe é um valor de referência sobre o qual você pode aplicar fatores de correção, dependendo do estado de conservação, quilometragem e equipamentos do veículo',
  },
];

const getSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [],
  };

  questions.forEach(question => schema['mainEntity'].push({
    '@type': 'Question',
    'name': question.title,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': question.description
    }
  }));
  return schema;
};

const FAQ = () => (
  <>
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
    <div className='pt-10'>
      <h2 className='text-2xl leading-8 font-extrabold text-gray-900'>Perguntas frequentes</h2>
      <div className='flex flex-row flex-wrap'>
        {questions.map((question) => (
          <div className='mt-5 w-full sm:w-2/4 sm:pr-2' key={question.title}>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>{question.title}</h3>
            <p className='mt-2 text-base text-gray-500'>{question.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default FAQ;
