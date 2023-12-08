import { Button } from "react-bootstrap";

function GeneratorNewEntry() {
  return (
    <>
      <tr className="new-entry-row">
        <td>
          <input className="spreadsheet-new-entry-input" />
          {/* noStart */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="date" />
          {/* date */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="number" />
          {/* fuel added */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="number" />
          {/* initial fuel */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="number" />
          {/* final fuel */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="number" />
          {/* final percentage */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="time" />
          {/* start time */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="time" />
          {/* stop time */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" type="time" />
          {/* run time */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" />
          {/* error code comment */}
        </td>
        <td>
          <input className="spreadsheet-new-entry-input" />
          {/* name */}
        </td>
      </tr>
      <tr>
        <td colSpan={11} className="new-entry-controls">
          <Button variant="danger" className="new-entry-cancel-btn">
            Cancel
          </Button>
          <Button variant="primary" className="new-entry-save-btn">
            Save
          </Button>
        </td>
      </tr>
    </>
  );
}

export default GeneratorNewEntry;
