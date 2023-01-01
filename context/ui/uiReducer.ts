import { UIState } from "./";

type UIActionType = { type: "[UI] - Set Active Section"; payload: string };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - Set Active Section":
      return {
        ...state,
        activeSection: action.payload,
      };

    default:
      return state;
  }
};
