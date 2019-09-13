import * as mysql from 'mysql';

const config = {
    host: '172.81.210.92',
    user: 'root',
    password: 'LiuKai@#&**&#@',
    database: 'test',
};
// const connection = createConnection();
const pool = mysql.createPool(config);

/**
 * 进行 SQL 查询
 * @param options 带有『?』的 SQL 语句
 * @param values 参数字符串数据
 * @return 查询结果的 Promise
 */
function querysql(options: string, values: Array<string | number>): Promise<{ results: any | any[], fields: object | undefined }> {

    return new Promise((resolve, reject) => {
        // connection.connect();
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            connection.query(options, values, (error, results, fields) => {
                connection.release();
                if (error) {
                    return reject(error);
                }
                return resolve({results, fields});
            });
        });

    });

}

// pool.on('acquire', (connection) => {
//     console.log('Connection %d acquired', connection.threadId);
// });
//
// pool.on('connection', (connection) => {
//     console.log('Connection %d connection', connection.threadId);
// });
//
// pool.on('enqueue', () => {
//     console.log('Waiting for available connection slot');
// });
//
// pool.on('release', (connection) => {
//     console.log('Connection %d released', connection.threadId);
// });

export default querysql;


