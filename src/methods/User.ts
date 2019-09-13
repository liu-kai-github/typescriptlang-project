import querysql from '../querysql';

interface IParams {
    add: { name: string; };
}

interface IReturn {
    add: string;
}

interface IUser {
    add: (params: IParams['add']) => Promise<IReturn['add']>;
}

class User implements IUser {
    public async add({name}: IParams['add']): Promise<IReturn['add']> {
        await querysql('INSERT INTO user (name) VALUES (?)', [name]);
        return 'Hello ' + name;

    }
}

export default User;
