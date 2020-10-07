/* Justin Edwards
 * 10/07/2020
 * AuthDataProvider Component - Stores information about auth state
 * initially checks for auth data in localStorage or a
 * cookie (to be configured later) and sets it if found.
 * Otherwise, initializes empty context to be used in app
 */

/* #region IMPORTS/EXPORT */
import React, {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
} from "react";
// createContext essentially sets a global context for the entire
// component hierarchy.
export const AuthDataContext = createContext(null);
/* #endregion */

const initialAuthData = {}; // initial authdata empty

const AuthDataProvider = (props) => {
    /* #region USER AUTH */
    // hook for authData, starts with the empty authData initialized above
    const [authData, setAuthData] = useState(initialAuthData);

    // useEffect with an empty dependency array will run once at startup.
    // This should check if there's a cookie or something with user auth
    // information.
    useEffect(() => {
        // check if user currently signed in
        console.log("No user signed in");
    }, []);

    // set auth data to empty object on logout
    const onLogout = () => setAuthData(initialAuthData);
    // pass user information into this when user is authenticated
    const onLogin = (newAuthData) => {
        // do something with the newAuthData
        console.log(newAuthData);
    };

    // memoizes the information
    const authDataValue = useMemo(() => ({ ...authData, onLogin, onLogout }), [
        authData,
    ]);
    return <AuthDataContext.Provider value={authDataValue} {...props} />;
    /* #endregion */
};

/* #region EXPORTS */
export const useAuthDataContext = () => useContext(AuthDataContext);
export default AuthDataProvider;
/* #endregion */
