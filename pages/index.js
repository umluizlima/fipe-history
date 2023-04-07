import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { fetchPrice, fetchTables } from '../client/fipe';
import Content from '../components/Content';
import FAQ from '../components/FAQ';
import FipeForm from '../components/FipeForm';
import { COLORS } from '../components/FipePlot/constants';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Result from '../components/Result';

const Home = ({ currentQuery, initialData, tables }) => {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
      setData(initialData);
      scrollToResult();
    }
    for (const query of Object.keys(initialData)) {
      fetchData(query);
    }
  }, [initialData]);

  const fetchData = async (vehicleQuery) => {
    for (const table of tables.slice(1, 24)) {
      const res = await fetch(`/api/vehicles/${table.value}-${vehicleQuery}`);
      const price = await res.json();
      if (price.erro) {
        break;
      }
      setData((prevData) => ({
        ...prevData,
        [vehicleQuery]: [price, ...prevData[vehicleQuery]]
      }));
    }
  };

  const scrollToResult = () => document.getElementById('resultado').scrollIntoView();

  const onFormSubmit = async (formData) => {
    const query = `${formData.type}-${formData.brand}-${formData.model}-${formData.year}-${formData.fuel}`;
    if (currentQuery.indexOf(query) === -1) {
      currentQuery.push(query);
    }
    window.goatcounter.count({
        path:  `add-${currentQuery}`,
        event: true,
    });
    loadResults(currentQuery);
  };

  const onRemoveResult = (vehicleQuery) => {
    const index = currentQuery.indexOf(vehicleQuery);
    currentQuery.splice(index, 1);
    window.goatcounter.count({
      path:  `remove-${currentQuery}`,
      event: true,
  })
    loadResults(currentQuery);
  };

  const loadResults = (query) => {
    setData({});
    router.push({
        pathname: '/',
        query: { veiculo: query },
      },
      `/?veiculo=${query.join("&veiculo=")}`,
      { scroll: false },
    );
  };

  return (
    <Fragment>
      <main className="bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-x-16">
          <Content />
          <FipeForm onSubmit={onFormSubmit} table={tables.length && tables[0].value} disabled={currentQuery.length >= COLORS.length} />
        </div>
        <Result data={data} onRemoveResult={onRemoveResult} />
        <FAQ />
        <Footer />
      </main>
    </Fragment>
  );
};

export async function getServerSideProps({ query }) {
  const tables = await fetchTables();
  let initialData = {};

  if (query && query.veiculo) {
    const vehicleQuery = Array.isArray(query.veiculo) ? query.veiculo : [query.veiculo];
    for (let index = 0; index < vehicleQuery.length; index++) {
      const element = vehicleQuery[index];
      const initialPrice = await fetchPrice(
        tables[0].value,
        ...element.split("-"),
      );
      if (!initialPrice.erro) {
        initialData[element] = [initialPrice];
      }
    }
  }

  return {
    props: {
      initialData,
      tables,
      currentQuery: Object.keys(initialData),
    },
  }
};

export default Home;
