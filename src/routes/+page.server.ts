import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/db';
import type { InferModel } from 'drizzle-orm/mysql-core';
import { users } from '$lib/schemas/users';

type User = InferModel<typeof users, 'insert'>;

export const load = (async ({ cookies }) => {
  const allUsers = await db.select().from(users);
  return {
    status: 200,
    message: "done",
    allUsers: allUsers
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const name = formData.get("name")?.toString();
    const product = formData.get("product")?.toString();
    const link = formData.get("link")?.toString();

    if(!name || !product || !link){
      return {
        status: 400,
        message: "All fields are mandatory"
      };
    }

    const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');
    
    const newUser: User = {
      link: link,
      name: name,
      product: product,
      city: city
    };

    await db.insert(users).values(newUser);
    //const allUsers = await db.select().from(users);
    
    return {
      status: 200,
      message: "done",
    };
  }
};