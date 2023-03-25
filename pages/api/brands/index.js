import { fetchBrands } from "../../../client/fipe"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  if (!('tableId' in req.query) || !('typeId' in req.query)) {
    res.status(400).end('Query params tableId and typeId are required')
  }

  const brands = await fetchBrands(req.query.tableId, req.query.typeId)

  res.setHeader('Cache-Control', 'max-age=60, s-maxage=60');
  res.status(200).json(brands)
}
