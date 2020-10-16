import  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { token } from '../Common/CommonConst'

const useCheckLoginLogout = async () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            if (token) {
                history.push("/")
            }
        },3000)
    },[history])

  return token;
}

export default useCheckLoginLogout;