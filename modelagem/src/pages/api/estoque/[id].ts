import type { NextApiRequest, NextApiResponse } from 'next'
const knex = require('knex')
const knexConfig = require('../../../../knexfile')

const knexInstance = knex(knexConfig.development)

type Data = {
  product?: any
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    handleGetRequest(req, res)
  } else if (req.method === 'DELETE') {
    handleDeleteRequest(req, res)
  } else if (req.method === 'PUT') {
    handlePutRequest(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

async function handleGetRequest(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const {
    query: { id },
  } = req

  if (id) {
    // Retrieve a specific product by ID
    try {
      const product = await knexInstance('products').where({ id }).first()
      if (product) {
        res.status(200).json({ product, message: 'success' })
      } else {
        res.status(404).json({ message: 'Product not found' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}

function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Handle POST request logic here
  res.status(200).json({ message: 'POST request handled' })
}

async function handlePutRequest(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const {
    query: { id },
  } = req
  const { quantidade } = req.body
  try {
    // Update the product's quantity in the database
    await knexInstance('produtos_em_estoque')
      .where('id', id)
      .update({ quantidade })

    res.status(200).json({ message: 'Quantity updated successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
