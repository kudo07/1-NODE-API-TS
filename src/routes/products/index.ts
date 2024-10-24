import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from './productController';
import { validateDate } from '../../middlewares/validationMiddleware';
import { createInsertSchema } from 'drizzle-zod';
import {
  createProductSchema,
  productTable,
  updateProductSchema,
} from '../../db/productSchema';

// but we use drizzle-zod which we dont use double schema declaration
// const createProductSchema = z.object({
//   name: z.string(),
//   price: z.number({ message: 'Price should be a number' }),
// });
// THIS IS HOW WE MAKE WITHOUT DOUBLE SCHEMA VALIDATION ALREADY IN SCHEMA

//
// type ProductType = z.infer<typeof createProductSchema>;
//
const router = Router();
router.get('/', listProducts);
router.get('/:id', getProductById);

router.post('/', validateDate(createProductSchema), createProduct);
router.put('/:id', validateDate(updateProductSchema), updateProduct);
router.delete('/:id', deleteProduct);
export default router;
