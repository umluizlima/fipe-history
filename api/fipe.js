import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: 'https://veiculos.fipe.org.br/api/veiculos',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
});

export const fetchTables = async () => {
  const tables = (await client({
    method: 'POST',
    url: '/ConsultarTabelaDeReferencia',
  })).data;
  return tables.map((table) => ({
    value: table['Codigo'],
    text: table['Mes'],
  }));
};

export const fetchBrands = async (tableId, typeId) => {
  return (await client({
    method: 'POST',
    url: '/ConsultarMarcas',
    data: qs.stringify({
      "codigoTabelaReferencia": tableId,
      "codigoTipoVeiculo": typeId,
    }),
  })).data.map((brand) => ({
    value: brand['Value'],
    text: brand['Label'],
  }));
};

export const fetchModels = async (tableId, typeId, brandId) => {
  return (await client({
    method: 'POST',
    url: '/ConsultarModelos',
    data: qs.stringify({
      'codigoTipoVeiculo': typeId,
      'codigoTabelaReferencia': tableId,
      'codigoModelo': null,
      'codigoMarca': brandId,
      'ano': null,
      'codigoTipoCombustivel': null,
      'anoModelo': null,
      'modeloCodigoExterno': null,
    }),
  })).data['Modelos'].map((model) => ({
    value: model['Value'],
    text: model['Label'],
  }));
};

export const fetchYears = async (tableId, typeId, brandId, modelId) => {
  return (await client({
    method: 'POST',
    url: '/ConsultarAnoModelo',
    data: qs.stringify({
      'codigoTipoVeiculo': typeId,
      'codigoTabelaReferencia': tableId,
      'codigoModelo': modelId,
      'codigoMarca': brandId,
      'ano': null,
      'codigoTipoCombustivel': null,
      'anoModelo': null,
      'modeloCodigoExterno': null,
    }),
  })).data.map((year) => ({
    value: year['Value'],
    text: year['Label'].replace('32000', 'Zero Km'),
  }));
};

export const fetchPrice = async (
  tableId,
  typeId,
  brandId,
  modelId,
  year,
  fuel,
) => {
  return (await client({
    method: 'POST',
    url: '/ConsultarValorComTodosParametros',
    data: qs.stringify({
      'codigoTabelaReferencia': tableId,
      'codigoMarca': brandId,
      'codigoModelo': modelId,
      'codigoTipoVeiculo': typeId,
      'anoModelo': year,
      'codigoTipoCombustivel': fuel,
      'tipoVeiculo': null,
      'modeloCodigoExterno': null,
      'tipoConsulta': 'tradicional',
    }),
  })).data;
};
