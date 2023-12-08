import React from "react";
import { Trash } from "react-bootstrap-icons";

interface SideBinProps {
  onRowDelete : (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export default function SideBin({onRowDelete} : SideBinProps){

  return (
    <td className="delete-row-side-bin" onClick={onRowDelete}>
      <Trash className="side-bin" />
    </td>
  );
} 

