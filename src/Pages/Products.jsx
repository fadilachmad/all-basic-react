import { useEffect, useRef, useState } from "react";
import Card from "../fragments/Card";
import Navbar from "../fragments/Navbar";
import { getProduct } from "../services/product.service";

function Products() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [product, setProduct] = useState([]);
  const totalPriceRef = useRef();
  const API_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=12";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ambil data dari localStorage
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartData);

        // Ambil data produk dari API
        const data = await getProduct(API_URL);
        const updatedProducts = data.map((item) => {
          try {
            const parsed = JSON.parse(item.images);
            item.images = parsed; // Simpan hasil parsing ke item
          } catch (error) {
            if (Array.isArray(item.images)) {
              console.log(item.images[0]);
            } else {
              console.log("Invalid images format");
            }
          }
          return item; // Kembalikan item yang sudah diperbarui
        });

        setProduct(updatedProducts); // Perbarui state dengan array baru
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const prods = product.find((prod) => prod.id === item.id);
        if (!prods) return acc; // Jika tidak ditemukan, lewati item ini
        return acc + prods.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, product]);

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
              src={p.images[0]}
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
                if (!item) return null; // Jika item tidak ditemukan, jangan render baris
                return (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className=" px-4 py-2 ">{c.title}</td>
                    <td className=" px-4 py-2 text-center">{c.qty}</td>
                    <td className=" px-4 py-2">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
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
                      currency: "USD",
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
