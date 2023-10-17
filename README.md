# Ubiquibot-logging App

Frontend app that displays [ubiquibot](https://github.com/ubiquity/ubiquibot) realtime logs for debug purposes.

## How to setup:
1. Set your project's `SUPABASE_URL` and `SUPABASE_KEY` (public anon key) [here](https://github.com/ubiquity/ubiquibot-logging/blob/0517dd0e898744e5ae4fe0b66ae5941ee8d87538/scripts/constants/index.ts)
2. Enable realtime for the table
<img width="1512" alt="Screenshot 2023-10-17 at 16 41 30" src="https://github.com/ubiquity/ubiquibot-logging/assets/119500907/3629ec3f-62f2-42e8-8fde-557792b7fb2a">
3. Add a new [RLS policy](https://supabase.com/docs/guides/auth/row-level-security) with read access to the table. 

```
-- example
CREATE POLICY "Enable read access for all users" ON "public"."logs"
AS PERMISSIVE FOR SELECT
TO public
USING (true)
```
4. Now logs should be displayed in realtime

## How to start a dev server
```
yarn start
```

## How to build for production
```
yarn build:prod
```
