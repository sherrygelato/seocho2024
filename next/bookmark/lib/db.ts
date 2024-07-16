import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

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
};

const pool = mysql.createPool(config);

// key point: release to pool
export const query = async <T extends RowDataPacket>(
  sql: string,
  params: unknown[]
) => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query<T[]>(sql, params);
    console.table({ rows });
    return [rows];
  } catch (error) {
    console.table({ error });
    throw error;
  } finally {
    conn.release();
  }
};

// to write
export const execute = async (sql: string, params: unknown[]) => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query<ResultSetHeader>(sql, params);
    console.log(rows.insertId);
    console.table({ rows });
    return rows;
  } catch (error) {
    console.table({ error });
    throw error;
  } finally {
    conn.release();
  }
};
