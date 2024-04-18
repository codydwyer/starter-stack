import { connection } from '../../db/connection.js';

const { schema } = connection;

await schema.dropTableIfExists('user');

await schema.createTable('user', (table) => {
  table.text('id').notNullable().primary();
  table.text('username').notNullable().unique();
});

await connection.table('user').insert([
  {
    id: 'AcMJpL7b413Z',
    username: 'testuser',
  },
]);

process.exit();
