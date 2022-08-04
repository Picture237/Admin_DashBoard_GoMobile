import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $2, 500 </span>
          <span className="featuredMoneyHate">
            - 4,5 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Compared to last month </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $1,400 </span>
          <span className="featuredMoneyHate">
            {" "}
            + 1,4 <ArrowUpward className="featureIcon positif" />{" "}
          </span>
        </div>
        <span className="featuredSub"> Compared to last month </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $1, 545 </span>
          <span className="featuredMoneyHate">
            {" "}
            + 1,9 <ArrowUpward className="featureIcon positif" />{" "}
          </span>
        </div>
        <span className="featuredSub"> Compared to last month </span>
      </div>
    </div>
  );
}
