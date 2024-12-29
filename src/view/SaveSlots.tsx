import React from "react";
import SaveSlot from "./SaveSlot";

const MAX_SLOTS = 3;

const SaveSlots = (): JSX.Element => {
  return (
    <table id="save-slots">
      <tbody>
        {Array(MAX_SLOTS)
          .fill(null)
          .map((x, i) => i)
          .map((i) => (
            <SaveSlot key={i} />
          ))}
      </tbody>
    </table>
  );
};

export default SaveSlots;
