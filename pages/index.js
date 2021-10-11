import { Fragment, useEffect, useState } from 'react';

import { fetchPrice, fetchTables } from '../api/fipe';
import Content from '../components/Content';
import FipeForm from '../components/FipeForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Result from '../components/Result';

const Home = () => {
  const [data, setData] = useState([]);
  const [tables, setTables] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');

  useEffect(async () => {
    setTables(await fetchTables());
    setCurrentSearch((new URLSearchParams(window.location.search)).get('veiculo'));
  }, []);

  useEffect(() => {
    if (!currentSearch || data.length) {
      return;
    }
    const [brand, model, type, year, fuel] = currentSearch.split('-');
    onFormSubmit({ brand, model, type, year, fuel });
    scrollToResult();
  }, [currentSearch]);

  const scrollToResult = () => document.getElementById('resultado').scrollIntoView(
    {behavior: "smooth", block: "start", inline: "nearest"}
  );

  const onFormSubmit = async (formData) => {
    setData([]);
    for (const table of tables.slice(0, 24)) {
      const price = await fetchPrice(
        table.value,
        formData.type,
        formData.brand,
        formData.model,
        formData.year,
        formData.fuel,
      );
      if (price.erro) {
        break;
      }
      setData((prevData) => ([price, ...prevData]));
    }
    scrollToResult();
    setCurrentSearch(`${formData.brand}-${formData.model}-${formData.type}-${formData.year}-${formData.fuel}`);
  };

  return (
    <Fragment>
      <main className="bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-x-16">
          <Content />
          <FipeForm onSubmit={onFormSubmit} table={tables.length && tables[0].value} />
        </div>
        <Result data={data}/>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
