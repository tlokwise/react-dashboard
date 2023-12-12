//HOOKS
import { useState } from "react";

//COMPONENTS
import FuelContentNav from "./FuelContentNav";

export default function FuelQualityCheck() {
  const [contentType, setContentType] = useState<string>("data");
  const handleContentType = (content: string) => {
    setContentType(content);
    console.log(content);
  };

  const renderContent = () => {
    switch (contentType) {
      case "data":
        return <p>data</p>;
        break;
      case "graph":
        return <p>graph</p>;
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <FuelContentNav onContentTypeSelect={handleContentType} />
      <div className="fuel-content-body">
        <h1>Quality Check</h1>
        {renderContent()}
      </div>
    </>
  );
}
