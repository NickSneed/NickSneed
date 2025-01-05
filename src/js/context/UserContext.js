import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const generateUserID = () => {
    const min = 10000000;
    const max = 99999999;
    const userID = 'U' + (Math.floor(Math.random() * (max - min + 1)) + min);
    return userID;
};

export const UserProvider = ({ children }) => {

    // Check localStorage on initial render and return the userID
    const [userID] = useState(() => {
        const savedUserID = localStorage.getItem('userID');
        return savedUserID || generateUserID();
    });

    
    // Update localStorage when userID changes
    useEffect(() => {
        localStorage.setItem('userID', userID);
    }, [userID]);

    return (
        <UserContext.Provider value={{ userID }}>
            {children}
        </UserContext.Provider>
    );
};

// Define the prop types for the component
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);