import { TYPES } from "../../components/FipeForm/constants"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  res.setHeader('Cache-Control', 'max-age=86400, s-maxage=86400');
  res.status(200).json(TYPES)
}
