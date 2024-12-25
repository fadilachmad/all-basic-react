import { useState } from "react";
import Card from "../fragments/Card";
import Navbar from "../fragments/Navbar";

const product = [
  {
    id: 1,
    title: "Air Jordan",
    description: "Air jordan was a good sneakers wear for playing basketball",
    price: 6300000,
    src: "sneakers-1.png",
  },
  {
    id: 2,
    title: "Sneakey Shirt",
    description:
      "Shirt that comfort for your daily wear. Shirt that comfort for your daily wear ",
    price: 1200000,
    src: "shirt-1.jpg",
  },
  {
    id: 3,
    title: "Rombeng Shirt",
    description: "Shirt that comfort for your daily lifestyle ",
    price: 80000,
    src: "shirt-1.jpg",
  },
  {
    id: 4,
    title: "Jordan XL",
    description: "Jordan for playin football that comfort in your feet",
    price: 2300000,
    src: "sneakers-1.png",
  },
];

function Products() {
  const [cart, setCart] = useState([]);

  const handleClick = (title, id) => {
    if (cart.find((c) => c.id === id)) {
      setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { id, title, qty: 1 }]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex font-poppins py-5">
        <div className="w-3/4 flex items-center min-h-screen gap-8 px-12 flex-wrap">
          {product.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              description={p.description}
              price={p.price}
              src={p.src}
              handleClick={() => handleClick(p.title, p.id)}
            />
          ))}
        </div>
        <div className="w-1/4 mr-6">
          <h1 className="text-xl font-semibold mb-2">Cart</h1>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Qty</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {cart.map((c) => {
                const item = product.find((item) => item.id === c.id);
                return (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className=" px-4 py-2">{c.title}</td>
                    <td className=" px-4 py-2">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                    <td className=" px-4 py-2">{c.qty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
