import { toast } from "react-toastify";

/**
 * On failed login:
 * - display error toast
 */
const sideeffect = () => {
  toast.error("Log in failed. Try again.");
};

export default sideeffect;
