import { RootState } from "@redux/store";
import { ReduxKey } from "@typing/redux";
import { useSelector } from "react-redux";

export const useGetRedux = (key: ReduxKey) => {
  const redux = useSelector((state: RootState) => state[key]);

  return { redux };
};
