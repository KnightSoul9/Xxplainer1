import { useSelector } from "react-redux";

const useAuthService = () => {
  const { currentUser, isLoading } = useSelector((state) => state.user);
  let isAuthenticated = currentUser === null ? false : true;

  return {
    isAuthenticated: isAuthenticated,
    currentUser,
    isLoading,
  };
};

export default useAuthService;
