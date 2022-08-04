import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "../../components/chart/Charts";
import { productData } from "../../components/productsData";
import WidgetSmall from "../../components/widgets/widgetSmall/WidgetSmall";
import WidgetLargs from "../../components/widgets/widgetLarge/WidgetLargs";

export default function HomePage() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={productData}
        title="Sales Statistiques"
        grid
        dataKey="Products Sold"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLargs />
      </div>
    </div>
  );
}
