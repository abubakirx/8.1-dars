import Desserts from "./components/Desserts";

import YourCart from "./components/YourCart";
import { useFetch } from "./hooks/useFetch";
function App() {
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  {
    data && console.log(data);
  }
  return (
    <div className="container">
      {loading && (
        <div style={{ width: "70%" }}>
          <h1 className="title">Loading...</h1>
        </div>
      )}
      {data && <Desserts dessert={data.data} />}
      <YourCart />
    </div>
  );
}

export default App;
