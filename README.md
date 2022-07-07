# DigitalCrafts Full Stack React App Template

This template has been configured with a lot of the common technologies taught at DigitalCrafts.

## Backend

The backend is using Express and has Sequelize configured with PostgreSQL.

## Frontend

The frontend was created with the `create-react-app` tool.

# Starting the project

Once you have created a new repository with this project, you will want to install
the packages using npm:

```
npm install
```

Next, you will want to configure the `.env` file to match your development
settings. To start, you can create a copy of the `.env.example` file and then
edit the settings inside:

```
cp .env.example .env
```

After this you will want to initialise the database with the settings you edited
in the `.env` file. You can do this using the `db:init` script:

```
npm run db:init
```

Finally, to start the project, you can use the `dev` script. This has been
configured to automatically start both the frontend and backend simultaneously.

```
npm run dev
```