import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { token } from '../Common/CommonConst'

const useProtectedRoute = () => {
    const history = useHistory();

    useEffect(() => {
        if(token === null) {
          history.push("/login");
        }
      }, [history]);

  return token;
};

export default useProtectedRoute;