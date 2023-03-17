import { useEffect, useState } from 'react';

import { TYPES } from './constants';
import FormSelect from './FormSelect';

const FipeForm = ({ onSubmit, table }) => {
  const [enabled, setEnabled] = useState(false);

  const [type, setType] = useState('');
  useEffect(() => {
    async function resetBrands() {
      resetBrand();
      if (table && type) {
        const res = await fetch('/api/brands?' + new URLSearchParams({tableId: table, typeId: type}));
        setBrands(await res.json());
      }
    }
    resetBrands();
  }, [type]);
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState('');
  useEffect(() => {
    async function resetModels() {
      resetModel();
      if (brand) {
        const res = await fetch(`/api/brands/${brand}/models?` + new URLSearchParams({tableId: table, typeId: type}));
        setModels(await res.json());
      }
    }
    resetModels();
  }, [brand]);
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const resetBrand = () => {
    setBrands([]);
    setBrand('');
  };

  const [models, setModels] = useState([]);
  const [model, setModel] = useState('');
  useEffect(() => {
    async function resetYears() {
      resetYear();
      if (model) {
        const res = await fetch(`/api/brands/${brand}/models/${model}/years?` + new URLSearchParams({tableId: table, typeId: type}));
        setYears(await res.json());
      }
    }
    resetYears();
  }, [model]);
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const resetModel = () => {
    setModels([]);
    setModel('');
  };

  const [years, setYears] = useState([]);
  const [year, setYear] = useState('');
  const handleYearChange = (event) => {
    setYear(event.target.value);
    setEnabled(true);
  };
  const resetYear = () => {
    setYears([]);
    setYear('');
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setEnabled(false);
    const [selectedYear, selectedFuel] = year.split('-');
    onSubmit({
      type,
      brand,
      model,
      year: selectedYear,
      fuel: selectedFuel,
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="shadow-lg overflow-hidden rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="pb-6">
            <h3 id="consultar" className="text-lg font-medium leading-6 text-gray-900">
              <a href="#consultar">Faça sua consulta</a>
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Selecione um veículo para visualizar seu histórico de preços.
            </p>
          </div>

          <div className="grid gap-3">
            <FormSelect
              id='type'
              label='Tipo'
              onChange={handleTypeChange}
              options={TYPES}
              placeholder={'Selecione'}
              value={type}
            />
            <FormSelect
              id='brand'
              label='Marca'
              onChange={handleBrandChange}
              options={brands}
              placeholder={'Selecione'}
              value={brand}
            />
            <FormSelect
              id='model'
              label='Modelo'
              onChange={handleModelChange}
              options={models}
              placeholder={'Selecione'}
              value={model}
            />
            <FormSelect
              id='year'
              label='Ano modelo'
              onChange={handleYearChange}
              options={years}
              placeholder={'Selecione'}
              value={year}
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50"
            disabled={!enabled}
          >
            Consultar histórico
          </button>
        </div>
      </div>
    </form>
  );
};

export default FipeForm;
