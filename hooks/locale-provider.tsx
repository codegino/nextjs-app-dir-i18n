"use client";

import { createContext, useContext } from "react";
import { FALLBACK_LANG, Locales } from "../i18n/settings";

const Context = createContext<Locales>(FALLBACK_LANG);

export function LocaleProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Locales;
}) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useLocale() {
  const context = useContext(Context);

  return context;
}

export default Context;
