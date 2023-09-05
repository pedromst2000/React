const validEmail = (email) => {

    const re = /\S+@\S+\.\S+/;
    return re.test(email);

};

export default validEmail;