import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



export default function GeneratorEventLogs(props: { show: string }) {
  const { show } = props;
  if (show == "show") {
    return (
      <Modal.Dialog className="generator-event-logs-modal" centered size="lg">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Generator Event Logs</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This is a modal Content</p>
          </Modal.Body>

          <Modal.Footer>
            <Button className="modal-close-btn" variant="secondary">
              Close
            </Button>
            <Button className="modalSaveBtn" variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Dialog>
    );
  }
  return <></>;
}
