import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";
import { Section } from "./UIContext";

export interface UIState {
  activeSection: string;
  sections: Section[];
}

const UI_INITIAL_STATE: UIState = {
  activeSection: "",
  sections: [
    { href: "", name: "Home", id: "Home" },
    { href: "about", name: "About", id: "About" },
    { href: "services", name: "Services", id: "Services" },
    { href: "portafolio", name: "Portafolio", id: "Portafolio" },
    { href: "reviews", name: "Reviews", id: "Reviews" },
    {
      href: "works",
      name: "Works",
      id: "Works",
    },
    {
      href: "journey",
      name: "Journey",
      id: "Journey",
    },
    { href: "contact", name: "Contact", id: "Contact" },
  ],
};

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setActiveSection = (activeSection: string) => {
    dispatch({
      type: "[UI] - Set Active Section",
      payload: activeSection,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setActiveSection,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
