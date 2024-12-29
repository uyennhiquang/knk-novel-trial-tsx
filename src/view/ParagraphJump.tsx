import React, {FC} from "react";

const ParagraphJump: FC = () => {
  return (
    <form>
      <label htmlFor="novel">jump to novel</label>
      <input type="text" name="novel" id="novel" required />

      <label htmlFor="chapter">jump to chapter</label>
      <input type="text" name="chapter" id="chapter" required />

      <label htmlFor="paragraph">jump to paragraph</label>
      <input type="text" name="paragraph" id="paragraph" required />

      <input type="button" value="submit" id="button--paragraph" />
    </form>
  );
};

export default ParagraphJump;
