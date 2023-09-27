export const checkUsername = (username) => {

    // check if contains only letters and numbers 
    const regex = /^[a-zA-Z0-9]+$/;

    // return true if the username is valid
    return regex.test(username);
};