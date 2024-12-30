function Card({ title, description, price, src, handleClick }) {
  return (
    <div className="card w-72 bg-slate-900 text-white overflow-hidden rounded-md group">
      <CardImage src={src} />
      <CardBody
        title={title}
        description={description}
        price={price}
        handleClick={handleClick}
      />
    </div>
  );
}

function CardImage({ src }) {
  return (
    <div className="img-wrp h-56 overflow-hidden">
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover object-center group-hover:scale-110 duration-500"
      />
    </div>
  );
}

function CardBody({ title, description, price, handleClick }) {
  return (
    <div className="body p-5">
      <div className="h-16">
        <h1 className="text-xl font-bold">
          {title.substring(0, 19)}
          <span className="text-slate-200">...</span>
        </h1>
        <p className="text-sm my-1">
          {description.substring(0, 55)}
          <span className="text-slate-200">...</span>
        </p>
      </div>
      <div className="footer text-lg font-semibold flex justify-between items-end mt-8 mb-2">
        <h2>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </h2>
        <button
          className="border border-white rounded-md px-3 py-2 font-medium text-sm hover:bg-white hover:text-slate-900"
          onClick={handleClick}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
