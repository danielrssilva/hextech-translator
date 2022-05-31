import { useState } from "react";

/**
 * useBoolean
 * helper hook to make using boolean state easier
 *
 * @param initialState the initial value of the state
 * @example
 *
 * const [isModalOpen, toggleModalOpen] = useBoolean(false)
 */

const useBoolean = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const toggleState = () => setState((current) => !current);
  return [state, toggleState];
};

export { useBoolean };
