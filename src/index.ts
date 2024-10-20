import express, { json, urlencoded } from 'express';
import productRoutes from './routes/products/index';
// you can import it as any name here
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
//sitting between our routes and our application to get the json format from the requesst
// parse it json in the format
const port = 3000;

// endpoints
//we group them together into the commeon endpoint /products

app.use('/products', productRoutes);
// the next part is continuation
app.listen(port, () => {
  console.log(`Example app listening on portss ${port}`);
});
