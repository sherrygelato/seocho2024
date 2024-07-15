import mysql from 'mysql2/promise';
import { parseArgs } from 'util';

const {
  DB_HOST: host,
  DB_USER: user,
  DB_PASS: password,
  DB_SCHEMA: database,
} = process.env;

export const config = {
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 3,
  maxIdle: 3,
  idleTimeout: 60000,

  //   connectionLimit: 10,
  //   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  //   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  //   queueLimit: 0, // 무한대
  //   enableKeepAlive: true, // 연결을 close할 때까지
  //   keepAliveInitialDelay: 0,
};

const pool = mysql.createPool(config);

// key point: release to pool
export const query = async (sql: string, params: unknown[]) => {
  const conn = await pool.getConnection();

  try {
    const [rows, fields] = await conn.query(sql, params);
    console.table({ rows });
    return [rows, fields];
  } catch (error) {
    console.table({ error });
    throw error;
  } finally {
    conn.release();
  }
};
