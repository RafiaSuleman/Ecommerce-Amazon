import ProductItem from "../../../components/products/productitem";
import data from "../../../lib/data";


export default function Home() {
  return (
   <>
   <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 mb-10">
         {data.products.map((product)=>(
          <ProductItem key={product.slug} product={product}/>
        ))}
       
      </div>
   </>
  );
}
