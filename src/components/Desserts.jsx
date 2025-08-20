import Cart from "./Cart";

function Desserts({ dessert }) {
  return (
    <div className="dessert__container">
      <h1 className="title">Desserts</h1>
      <div className="desserts">
        {dessert.map((dessert) => {
          return <Cart key={dessert.id} dessert={dessert} />;
        })}
      </div>
    </div>
  );
}

export default Desserts;
