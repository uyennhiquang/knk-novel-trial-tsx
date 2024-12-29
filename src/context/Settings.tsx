import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type Settings = {
  language: "en" | "jp";
  setLanguage: (language: "en" | "jp") => void;
}

const SettingsContext = createContext<Settings>(undefined as unknown as Settings);

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Settings["language"]>("en");

  return <SettingsContext.Provider value={{ language, setLanguage }}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  if (!SettingsContext) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return useContext(SettingsContext);
}
