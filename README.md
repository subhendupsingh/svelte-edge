# A Drizzle ORM + Sveltekit + Planetscale + Typescript starter
1. [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)
2. [Sveltekit](https://kit.svelte.dev/)
3. [Planetscale](https://planetscale.com/)

### Commands
1. **To create migration**

```npx drizzle-kit generate:mysql --out migrations-folder --schema src/lib/db/schema.ts```

[Docs](https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/mysql-core/README.md#automatic-sql-migrations-generation-with-drizzle-kit)

2. **Create drizzle.config.json** at the root of the project

```
{
  // path to introspect output
  "out": "./migrations", // needed only for introspect
  // path to schema file (or several schema files)
  "schema": "./db", 
  // you could specify array for several schema files
  // "schema": ["./db", "./core-db", "./core/**/*.ts"],
  "connectionString": "mysql://root:password@127.0.0.1:3306/my_db"
}
```
[Docs](https://github.com/drizzle-team/drizzle-orm/blob/db-push-docs/docs/db-push.preview.md)

3. **To push to the db**

```npx drizzle-kit push:mysql```

[Docs](https://github.com/drizzle-team/drizzle-orm/blob/db-push-docs/docs/db-push.preview.md)

### Note:

1. DB push is currently in preview and only works for mysql (Planetscale is mysql)
2. There is bug in Drizzle ORM with planestcale serverless driver that prevents the sveltekit app from building. This has been fixed in the beta branch so use the beta branch of drizzle ORM [Link to discord discussion](https://discord.com/channels/1043890932593987624/1083890278466846802)

```npm install drizzle-orm@beta```

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
