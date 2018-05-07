# Veil: GuildHub (Back-end)
Back-end for https://github.com/vikandagonzales/veil

#### Installation

- Fork and clone
- `npm install`
- Add your own .env file with a `SECRET` environment variable

#### Database Setup

- Make sure you have PostgreSQL
- Create a database on your local called veil_dev
- `run knex migrate:latest`
- `run knex seed:run`
