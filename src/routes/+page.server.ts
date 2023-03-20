import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
//import type { InferModel } from 'drizzle-orm/mysql-core';

//type User = InferModel<typeof users>;

export const load = (async () => {
   /*  const newUser: User = {
        id: 1,
        fullName: 'Andrew',
        phone: "9999",
    }; */

    //db.insert(users).values(newUser);
    //db.select().from(users);
    const { id } = await db
    .insertInto('person')
    .values({ first_name: 'Jennifer', gender: 'female' })
    .returning('id')
    .executeTakeFirstOrThrow()

  await db
    .insertInto('pet')
    .values({ name: 'Catto', species: 'cat', owner_id: id })
    .execute()

  const person = await db
    .selectFrom('person')
    .innerJoin('pet', 'pet.owner_id', 'person.id')
    .select(['first_name', 'pet.name as pet_name'])
    .where('person.id', '=', id)
    .executeTakeFirst()

  if (person) {
    person.pet_name
  }
    return {};
}) satisfies PageServerLoad;