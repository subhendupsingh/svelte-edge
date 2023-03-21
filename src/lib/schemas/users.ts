import {
    mysqlTable,
    serial,
    text,
    varchar,
  } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: serial('id').autoincrement().primaryKey(),
    name: text('name'),
    product: varchar('product', { length: 256 }),
    city: varchar('city', { length: 256 }),
    link: varchar('link', { length: 512 }),
});