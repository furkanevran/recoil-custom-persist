import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([{'id': 1, item:'Blue T-Shirt'}, {'id': 2, item:'Red T-Shirt'}, {'id': 3, item:'Green T-Shirt'}, {'id': 4, item:'Black T-Shirt'}, {'id': 5, item:'Purple T-Shirt'}])
}