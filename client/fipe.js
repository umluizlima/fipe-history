const BASE_URL = 'https://veiculos.fipe.org.br/api/veiculos'
const HEADERS = { 'content-type': 'application/x-www-form-urlencoded' }

const postRequest = async (path, queryParams) => {
  let url = `${BASE_URL}${path}`
  if (queryParams) {
    url += `?${new URLSearchParams(queryParams)}`
  }
  const res = await fetch(url, {method: 'POST', headers: HEADERS})
  return res.json()
}

export const fetchTables = async () => {
  const tables = await postRequest('/ConsultarTabelaDeReferencia');
  return tables.map((table) => ({
    value: table['Codigo'],
    text: table['Mes'],
  }));
};

export const fetchBrands = async (tableId, typeId) => {
  const brands = await postRequest('/ConsultarMarcas', {
    "codigoTabelaReferencia": tableId,
    "codigoTipoVeiculo": typeId,
  });
  return brands.map((brand) => ({
    value: brand['Value'],
    text: brand['Label'],
  }));
};

export const fetchModels = async (tableId, typeId, brandId) => {
  const models = await postRequest('/ConsultarModelos', {
    'codigoTipoVeiculo': typeId,
    'codigoTabelaReferencia': tableId,
    'codigoModelo': null,
    'codigoMarca': brandId,
    'ano': null,
    'codigoTipoCombustivel': null,
    'anoModelo': null,
    'modeloCodigoExterno': null,
  });
  return models.Modelos.map((model) => ({
    value: model['Value'],
    text: model['Label'],
  }));
};

export const fetchYears = async (tableId, typeId, brandId, modelId) => {
  const years = await postRequest('/ConsultarAnoModelo', {
    'codigoTipoVeiculo': typeId,
    'codigoTabelaReferencia': tableId,
    'codigoModelo': modelId,
    'codigoMarca': brandId,
    'ano': null,
    'codigoTipoCombustivel': null,
    'anoModelo': null,
    'modeloCodigoExterno': null,
  });
  return years.map((year) => ({
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
  return (await postRequest('/ConsultarValorComTodosParametros', {
    'codigoTabelaReferencia': tableId,
    'codigoMarca': brandId,
    'codigoModelo': modelId,
    'codigoTipoVeiculo': typeId,
    'anoModelo': year,
    'codigoTipoCombustivel': fuel,
    'tipoVeiculo': null,
    'modeloCodigoExterno': null,
    'tipoConsulta': 'tradicional',
  }));
};
