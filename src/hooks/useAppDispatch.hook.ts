import store from "@redux/store";
import { useDispatch } from "react-redux";

// Infer the `AppDispatch` type from the store itself
type AppDispatch = typeof store.dispatch;

// Use throughout app instead of plain `useDispatch`
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
