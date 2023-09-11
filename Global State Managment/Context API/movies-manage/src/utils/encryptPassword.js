export const encryptPassword = (password) => {

    let encrypt = "";

    for (let i = 0; i < password.length; i++) {
        encrypt += "*";
    }

    return encrypt;

};
