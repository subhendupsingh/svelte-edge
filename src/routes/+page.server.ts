import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { users } from '$lib/db/schema';
import type { InferModel } from 'drizzle-orm/mysql-core';

type User = InferModel<typeof users>;

export const load = (async () => {
    const newUser: User = {
        id: 1,
        fullName: 'Andrew',
        phone: "9999",
    };

    db.insert(users).values(newUser);
    db.select().from(users);
    return {};
}) satisfies PageServerLoad;