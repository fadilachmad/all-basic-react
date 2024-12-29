import { useEffect, useRef, useState } from "react";
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
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceRef = useRef();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      // console.log(cart.length);
      const sum = cart.reduce((acc, item) => {
        const prods = product.find((prod) => prod.id === item.id);
        return acc + prods.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

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
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {cart.map((c) => {
                const item = product.find((item) => item.id === c.id);
                return (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className=" px-4 py-2">{c.title}</td>
                    <td className=" px-4 py-2 text-center">{c.qty}</td>
                    <td className=" px-4 py-2">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr className="border-t-gray-300 border" ref={totalPriceRef}>
                <td className="px-4 py-2" colSpan="2">
                  <b>Total Price</b>
                </td>
                <td className="px-4 py-2">
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
