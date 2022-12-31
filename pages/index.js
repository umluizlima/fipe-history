import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { fetchPrice, fetchTables } from '../api/fipe';
import Content from '../components/Content';
import FAQ from '../components/FAQ';
import FipeForm from '../components/FipeForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Result from '../components/Result';

const Home = ({ initialData, tables, vehicleQuery }) => {
  const router = useRouter();
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
    if (initialData.length === 1) {
      scrollToResult();
      fetchData(vehicleQuery);
    }
  }, [initialData]);

  const fetchData = async ({ type, brand, model, year, fuel }) => {
    for (const table of tables.slice(1, 24)) {
      const price = await fetchPrice(table.value, type, brand, model, year, fuel);
      if (price.erro) {
        break;
      }
      setData((prevData) => ([price, ...prevData]));
    }
  };

  const scrollToResult = () => document.getElementById('resultado').scrollIntoView();

  const onFormSubmit = async (formData) => {
    const query = `${formData.brand}-${formData.model}-${formData.type}-${formData.year}-${formData.fuel}`;
    router.push({
        pathname: '/',
        query: { veiculo: query },
      },
      `/?veiculo=${query}`,
      { scroll: false },
    );
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
        <FAQ />
        <Footer />
      </main>
    </Fragment>
  );
};

export async function getServerSideProps({ query }) {
  const tables = await fetchTables();

  let vehicleQuery = null;
  if (query && query.veiculo) {
    const [brand, model, type, year, fuel] = query.veiculo.split('-');
    vehicleQuery = { brand, model, type, year, fuel };
  }

  let initialData = [];
  if (vehicleQuery) {
    const initialPrice = await fetchPrice(
      tables[0].value,
      vehicleQuery.type,
      vehicleQuery.brand,
      vehicleQuery.model,
      vehicleQuery.year,
      vehicleQuery.fuel,
    );
    initialData.push(initialPrice);
  }

  return {
    props: {
      initialData,
      tables,
      vehicleQuery,
    },
  }
};

export default Home;
