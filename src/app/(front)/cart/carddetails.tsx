"use client";

import { useRouter } from "next/navigation";
import useCartService from "../../../../lib/hooks/usecartstore";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartDetails() {
  const router = useRouter();
  const { items, itemsPrice, decrease, increase } = useCartService();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  return (
    <>
      <h1 className="py-4 text-2xl"> Shopping Cart</h1>
      {items.length === 0 ? (
      <div>
        Cart is Empty. <Link href="/"> Go to Shopping</Link>
      </div>
      ):(
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="overflow-x-auto md:col-span-3">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.slug}>
                    <td>
                      <Link
                        href={`/products/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        <span className="px-2">
                            {item.name}
                        </span>
                      </Link>
                    </td>
                    <td>
                        <button className="btn " type="button" onClick={()=>decrease(item)}>
                            -
                        </button>
                        <span className="px-2">
                            {item.qty}
                        </span>
                        <button className="btn " type="button" onClick={()=>increase(item)}>
                            +
                        </button>
                    </td>
                    <td>${item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
            <div className="card bg-base-300">
            <div className="card-body ">
                <ul>
                    <li>
                        <div className="pb-3 text-xl"> 
                            Subtotal({items.reduce((a,c) => a + c.qty , 0)}): ${itemsPrice}
                        </div>
                    </li>
                    <li>
                        <button onClick={()=>router.push('/shipping')}
                            className="btn bg-[#4813BA] text-white w-full">
                                Proceed to Checkout
                            </button>
                    </li>
                </ul>
            </div>
            </div>
        </div>
      </div>
      ) }
    </>
  );
}
