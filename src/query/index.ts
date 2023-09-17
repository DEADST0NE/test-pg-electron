import { Client } from 'pg';

const pgClient = new Client({
  port: 5432,
  host: '127.0.0.1',
  user: 'accounting_system',
  password: 'accounting_system',
  database: 'accounting_system',
});


const client = async () => {
  await pgClient.connect();

  return {
    async get() {
      const res = await pgClient.query(`SELECT * FROM account`);
      console.log(res);
      return res;
    },
    client: pgClient,
  }
};

export { client };
