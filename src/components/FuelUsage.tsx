import FuelContentNav from "./FuelContentNav";

export default function FuelUsage() {
  const handleContentType = (contentType: string) => {
    console.log(contentType);
  };

  return (
    <>
      <FuelContentNav onContentTypeSelect={handleContentType} />
      <div className="fuel-content-body">
        <h1>Usage</h1>
      </div>
    </>
  );
}
