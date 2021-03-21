import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';

import { fetchPrice } from '../api/fipe';
import Content from '../components/Content';
import FipeForm from '../components/FipeForm';
import Header from '../components/Header';
import Result from '../components/Result';

const Home = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(null);
  useEffect(async () => {
    if (data.length === 0 && formData) {
      for (const table of formData.tables.slice(0, 24)) {
        const price = await fetchPrice(
          table,
          formData.type,
          formData.brand,
          formData.model,
          ...formData.year.split('-'));
        if (price.erro) {
          break;
        }
        setData((prevData) => ([price, ...prevData]));
      }
    }
  }, [formData]);
  const onFormSubmit = (data) => {
    setData([]);
    setFormData(data)
  };

  return (
    <Fragment>
      <Head>
        <title>Histórico de usados</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <main className="bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-x-16">
          <Content />
          <FipeForm onSubmit={onFormSubmit} />
        </div>
        <Result data={data}/>
      </main>
    </Fragment>
  );
};

export default Home;
