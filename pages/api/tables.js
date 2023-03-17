import { fetchTables } from "../../client/fipe"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const tables = await fetchTables()

  res.status(200).json(tables)
}
