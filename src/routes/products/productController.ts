import e, { Request, Response } from 'express';
import { db } from '../../db/index.js';
import { productTable } from '../../db/productSchema.js';
import { eq } from 'drizzle-orm';
export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productTable);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(productTable)
      .where(eq(productTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: 'Product Not Found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function createProduct(req: Request, res: Response) {
  // to get the first [product]
  try {
    const [product] = await db
      .insert(productTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
}
export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updatedFields = req.body;

    const [product] = await db
      .update(productTable)
      .set(updatedFields)
      .where(eq(productTable.id, id))
      .returning();
    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: 'Product was not fount' });
    }
  } catch (error) {
    res.status(500).send(e);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [deleteProduct] = await db
      .delete(productTable)
      .where(eq(productTable.id, id))
      .returning();
    if (deleteProduct) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Product Not found' });
    }
  } catch (error) {
    res.status(500).send(e);
  }
}
