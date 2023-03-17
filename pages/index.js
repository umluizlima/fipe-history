import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { fetchPrice, fetchTables } from '../client/fipe';
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

  const fetchData = async (vehicleQuery) => {
    for (const table of tables.slice(1, 24)) {
      const res = await fetch(`/api/vehicles/${table.value}-${vehicleQuery}`);
      const price = await res.json();
      if (price.erro) {
        break;
      }
      setData((prevData) => ([price, ...prevData]));
    }
  };

  const scrollToResult = () => document.getElementById('resultado').scrollIntoView();

  const onFormSubmit = async (formData) => {
    const query = `${formData.type}-${formData.brand}-${formData.model}-${formData.year}-${formData.fuel}`;
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
  let initialData = [];

  if (query && query.veiculo) {
    vehicleQuery = query.veiculo;
    const initialPrice = await fetchPrice(
      tables[0].value,
      ...vehicleQuery.split("-"),
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
