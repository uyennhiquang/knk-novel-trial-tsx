import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type Position = {
  novel: number;
  setNovel: (novel: number) => void;
  chapter: number;
  setChapter: (chapter: number) => void;
  paragraph: number;
  setParagraph: (paragraph: number) => void;
  sentence: number;
  setSentence: (sentence: number) => void;
}

const CurrentPositionContext = createContext<Position>(undefined as unknown as Position);

export const CurrentPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [novel, setNovel] = useState<Position["novel"]>(0);
  const [chapter, setChapter] = useState<Position["chapter"]>(0);
  const [paragraph, setParagraph] = useState<Position["paragraph"]>(0);
  const [sentence, setSentence] = useState<Position["sentence"]>(0);

  return <CurrentPositionContext.Provider value={
    { novel, setNovel, chapter, setChapter, paragraph, setParagraph, sentence, setSentence }
  }> {children}</CurrentPositionContext.Provider>;
}

export function useCurrentPosition() {
  if (!CurrentPositionContext) {
    throw new Error("useCurrentPosition must be used within a CurrentPositionProvider");
  }
  return useContext(CurrentPositionContext);
}

// const obj = {
//   hi: 1,
//   noob: "dd",
//   bye: () => {
//     console.log("bye");
//   }
// }

// const { hi, noob, bye } = obj;
// bye();