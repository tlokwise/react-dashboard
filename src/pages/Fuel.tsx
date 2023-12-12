import "../css/fuel.css";
//HOOKS
import { useState } from "react";
//COMPONENTS
import Navbar from "../components/Navbar";
import FuelTabs from "../components/FuelTabs";
import FuelPrices from "../components/FuelPrices";
import FuelUsage from "../components/FuelUsage";
import FuelQualityCheck from "../components/FuelQualityCheck";

//BOOTSTRAP COMPONENTS
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Fuel() {
  const [selectedTab, setSelectedTab] = useState<string>("prices");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  const renderTabContent = () => {
    switch (selectedTab) {
      case "prices":
        return <FuelPrices />;
        break;
      case "usage":
        return <FuelUsage />;
        break;
      case "quality-check":
        return <FuelQualityCheck />;
        break;
      default:
        return null;
    }
  };
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <div className="fuel">
        <FuelTabs onFuelTabChange={handleTabChange} />
        <div className="fuel-content">
        {renderTabContent()}
        </div>
      </div>
    </>
  );
}
