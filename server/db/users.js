import { connection } from './connection.js';
import { generateId } from './ids.js';

const getUserTable = () => connection.table('user');

export async function getUsers() {
  return await getUserTable().select();
}

export async function getUser(id) {
  const user = await getUserTable().first().where({id});
  
  if (!user) {
    throw new Error(`User not found: ${id}`)
  }
  return user;
}

export async function createUser({username}) {
  const user = {
    id: generateId(),
    username,
    createdAt: new Date().toISOString(),
  }

  await getUserTable().insert(user)
  return user;
}

export async function deleteUser({id}) {
  const user = await getUserTable().first().where({id});

  if (!user) {
    throw new Error(`User not found: ${id}`)
  }

  await getUserTable().delete().where({id})

  return user;
}

export async function updateUser({ id, username }) {
  const user = await getUserTable().first().where({id});

  if (!user) {
    throw new Error(`User not found: ${id}`)
  }

  const updatedFields = { username }

  await getUserTable().update(updatedFields).where({id})

  return {...user, ...updatedFields};
}