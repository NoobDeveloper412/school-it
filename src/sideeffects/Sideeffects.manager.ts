import { toast } from "react-toastify";

/**
 * ATTENTION: Side effects which take places within reducers body will be exchanged to rxjs/react-observables soon.
 * Placing side effects inside reducers is commonly known as anti pattern - reducers should be pure functions with no logic other than state 'mutation'
 */
const sideeffects = {
  login: {
    success: () => toast.success("Log in successful."),
    failed: () => toast.error("Log in failed. Try again."),
  },
  logout: {
    success: () =>
      toast.success("You have been logged out from app successfully."),
  },
  refreshAccessToken: {
    success: () => toast.info("Your session has been refreshed."),
    failed: () => toast.error("Your session has expired. Please log in."),
  },
};

export default sideeffects;
