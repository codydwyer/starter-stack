import { connection } from './connection.js';

const getUserTable = () => connection.table('user');

export async function getUsers() {
  return await getUserTable().select();
}

export async function getUser(id) {
  return await getUserTable().first().where({ id });
}

