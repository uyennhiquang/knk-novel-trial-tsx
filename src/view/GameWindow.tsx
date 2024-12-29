const GameWindow = (): JSX.Element => {
  return (
    <div id="window--text" onClick={() => console.log("hi")}>
      <div id="container--text"><p>hi</p></div>
    </div>
  );
};

export default GameWindow;