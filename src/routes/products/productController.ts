import { Request, Response } from 'express';
import { db } from '../../db/index.js';
import { productTable } from '../../db/productSchema.js';
export function listProducts(req: Request, res: Response) {
  res.send('list of products');
}
export function getProductById(req: Request, res: Response) {
  res.send('get product by id');
}
export async function createProduct(req: Request, res: Response) {
  console.log(req.body);
  await db.insert(productTable).values(req.body);
  res.send('create product');
}
export function updateProduct(req: Request, res: Response) {
  res.send('update product');
}
export function deleteProduct(req: Request, res: Response) {
  res.send('delete product');
}
