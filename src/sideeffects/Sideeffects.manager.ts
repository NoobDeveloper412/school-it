import { toast } from "react-toastify";

const sideeffects = {
  login: {
    success: () => toast.success("Log in successful."),
    failed: () => toast.error("Log in failed. Try again."),
  },
  refreshAccessToken: {
    success: () => toast.info("Your session has been refreshed."),
    failed: () => toast.error("Your session has expired. Please log in."),
  },
};

export default sideeffects;
