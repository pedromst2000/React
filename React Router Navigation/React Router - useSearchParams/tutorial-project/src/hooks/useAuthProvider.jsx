import AuthContext from "../context/AuthProvider";
import { useContext } from "react";

export default function useAuthProvider() {
  return useContext(AuthContext);
}
