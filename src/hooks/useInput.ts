import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from "react";

type ReturnTypes<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

export const useInput = <T = any>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export const useInputs = <T = any>(initialData: T): ReturnTypes => {
  const [inputs, setInputs] = useState(initialData);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  return [inputs, handler, setInputs];
};
