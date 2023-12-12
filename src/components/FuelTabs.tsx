import Card from "react-bootstrap/Card";

//ICONS
import { CurrencyDollar, BarChart, CheckCircle } from "react-bootstrap-icons";

//LIBRARIES
import { useState } from "react";

export default function FuelTabs() {
  const [tab, setTab] = useState("");
  const handleFuelTabClick = (whichTab: string) => {
    setTab(whichTab);
    console.log(tab);
  };
  return (
    <div className="fuel-tabs">
      <Card
        className="fuel-card fuel-price-card"
        onClick={() => handleFuelTabClick("fuel-price-card")}
      >
        <Card.Header>
          <h4>
            <CurrencyDollar />
            <span>Prices</span>
          </h4>
        </Card.Header>
      </Card>
      <Card
        className="fuel-card fuel-usage-card"
        onClick={() => handleFuelTabClick("fuel-usage-card")}
      >
        <Card.Header>
          <h4>
            <BarChart />
            <span>Usage</span>
          </h4>
        </Card.Header>
      </Card>
      <Card
        className="fuel-card fuel-quality-checker-card"
        onClick={() => handleFuelTabClick("fuel-quality-checker-card")}
      >
        <Card.Header>
          <h4>
            <CheckCircle /> <span>Quality Checker</span>
          </h4>
        </Card.Header>
      </Card>
    </div>
  );
}
