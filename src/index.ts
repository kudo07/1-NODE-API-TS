import express from 'express';
import productRoutes from './routes/products/index';
// you can import it as any name here
const app = express();
const port = 3000;

// endpoints
//we group them together into the commeon endpoint /products

app.use('/products', productRoutes);
// the next part is continuation
app.listen(port, () => {
  console.log(`Example app listening on portss ${port}`);
});
