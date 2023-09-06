import usersData from '../data/users.json';

export const usersNewData = usersData.map((user) => {

    let encryptPassword = user.password.split('').map((letter) => {
        return '*';
    }).join('');

    return {
        ...user,
        password: encryptPassword
    }

});