import ParagraphJump from "./ParagraphJump";
import GameWindow from "./GameWindow";
import SaveAction from "./SaveAction";
import SaveSlots from "./SaveSlots";

const GameScreen = (): JSX.Element => {
  return (
    <div id="screen--game">
      <ParagraphJump />
      <SaveAction />
      <GameWindow />
      <SaveSlots />
    </div>
  );
};

export default GameScreen;