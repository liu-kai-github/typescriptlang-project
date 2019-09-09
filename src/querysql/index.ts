import {createConnection} from 'mysql';

const connection = createConnection({
    host: '172.81.210.92',
    user: 'root',
    password: 'LiuKai@#&**&#@',
    database: 'test',
});

/**
 *
 */
function querysql(options: string, values: string[]): Promise<{ results: object | object[], fields: any }> {

    return new Promise((resolve, reject) => {
        connection.connect();

        connection.query(options, values,
            (error, results, fields) => {
                // console.log(error, results, fields);
                if (error) {
                    return reject(error);
                }
                resolve({results, fields});
                // console.log('The solution is: ', results[0].solution);
            });

        connection.end();
    });

}

export default querysql;


