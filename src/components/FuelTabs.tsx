import Card from "react-bootstrap/Card";
// HOOKS

//ICONS
import { CurrencyDollar, BarChart, CheckCircle } from "react-bootstrap-icons";

//LIBRARIES

//props
interface FuelTabsProps {
  // onFuelTabChange : (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onFuelTabChange: (tab: string) => void;
}

export default function FuelTabs({ onFuelTabChange } : FuelTabsProps) {
  return (
    <div className="fuel-tabs">
      <Card
        className="fuel-card fuel-price-card"
        onClick={() => onFuelTabChange("prices")}
        // PRICES TAB
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
        onClick={() => onFuelTabChange("usage")}
        // USAGE TAB
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
        onClick={() => onFuelTabChange("quality-check")}
        // QUALITY TAB
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
