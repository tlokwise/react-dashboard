import FuelContentNav from "./FuelContentNav";

export default function FuelQualityCheck() {
  const handleContentType = (contentType: string) => {
    console.log(contentType);
  };

  return (
    <>
      <FuelContentNav onContentTypeSelect={handleContentType} />
      <div className="fuel-content-body">
        <h1>Quality Check</h1>
      </div>
    </>
  );
}
