import { createContext, Dispatch, SetStateAction } from "react";

interface FormContextType {
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
