import "./analystic.css";
import Charts from "../../components/chart/Charts";
import { productData } from "../../components/productsData";

export default function Analystic() {
  return (
    <div className="home">
      <Charts
        data={productData}
        title="Monthly Statistics Sales"
        grid
        dataKey="Products Sold"
      />
    </div>
  );
}
