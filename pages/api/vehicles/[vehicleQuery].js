import { fetchPrice } from "../../../client/fipe"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  if (!('vehicleQuery' in req.query)) {
    res.status(400).end('Url param vehicleQuery is required')
  }

  const [table, type, brand, model, year, fuel] = req.query.vehicleQuery.split('-');

  const price = await fetchPrice(table, type, brand, model, year, fuel)

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
  res.status(200).json(price)
}
