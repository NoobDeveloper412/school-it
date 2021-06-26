import { TypedUseSelectorHook, useSelector } from "react-redux";

import store from "@redux/store";

// Infer the `RootState` type from the store itself
type RootState = ReturnType<typeof store.getState>;

// Used throughout app instead of plain and `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
