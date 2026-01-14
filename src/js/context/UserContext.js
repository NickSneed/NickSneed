import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const generateUserID = () => {
    const min = 10000000;
    const max = 99999999;
    const range = max - min + 1;
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = min + (randomBuffer[0] % range);
    const userID = `U${randomNumber}`;

    return userID;
};

const SECURITY_CONFIG = {
    MAX_ID_LENGTH: 9, // 'U' + 8 digits
    ALLOWED_CHARS: /^[U\d]+$/
};

// Add validation function
const isValidUserID = (id) => {

    // Check if the ID is a string and meets length and character requirements
    if (!id || typeof id !== 'string') return false;
    if (id.length > SECURITY_CONFIG.MAX_ID_LENGTH) return false;
    if (!SECURITY_CONFIG.ALLOWED_CHARS.test(id)) return false;

    // Check if the ID starts with 'U' and is followed by 8 digits
    const userIDPattern = /^U\d{8}$/;
    return userIDPattern.test(id);
};

// Utility functions to get value in localStorage with error handling
const getFromStorage = (key) => {
    try {
        let item = localStorage.getItem(key);
        if (item) {
            item = decodeURIComponent(item);
        }
        return isValidUserID(item) ? item : generateUserID();
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return generateUserID();
    }
};

// Function to set a value in localStorage with error handling
const setToStorage = (key, value) => {
    try {
        if (isValidUserID(value)){
            localStorage.setItem(key, encodeURIComponent(value));
        } else {
            localStorage.setItem(key, generateUserID());
        }
    } catch (e) {
        console.error('Error writing to localStorage:', e);
    }
};

export const UserProvider = ({ children }) => {

    // Check localStorage on initial render and return the userID
    const [userID] = useState(() => {
        const savedUserID = getFromStorage('userID');
        return savedUserID;
    });

    // Update localStorage when userID changes
    useEffect(() => {
        // Validate before saving to localStorage
        setToStorage('userID', userID);
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