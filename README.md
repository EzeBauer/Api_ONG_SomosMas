# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```
Generates 10 standard account users and 10 administrator account users with the credentials:

| Email | Password | Name | RoleId |
| ------------- | ------------- | ------------- | ----------- |
| standard-test-@test.com  | TestPassword123!  | Standard Test | 1 |
| standard-test-Eduardo@Corgniali.com  | TestPassword123!  | Eduardo Corgniale | 1 |
| standard-test-Ezequiel@Baruer.com  | TestPassword123!  | Ezequiel Baruer | 1 |
| standard-test-Gimena@Rivoira.com  | TestPassword123!  | Gimena Rivoira | 1 |
| standard-test-Gonzalo@Ortiz.com  | TestPassword123!  | Gonzalo Ortiz | 1 |
| standard-test-Manuel@Francisco.com  | TestPassword123!  | Manuel Francisco | 1 |
| standard-test-Matias@Marin.com  | TestPassword123!  | Matias Marin | 1 |
| standard-test-Mauro@Omiñuka.com | TestPassword123!  | Mauro Omiñuka | 1 |
| standard-test-Valentin@Tarayre.com  | TestPassword123!  | Valentin Tarayre | 1 |
| standard-test-Victor@Sanabria.com  | TestPassword123!  | Victor Sanabria | 1 |
-------------------------------------------------------------------------
| Email | Password | Name | RoleId |
| ------------- | ------------- | ------------- | ----------- |
| admin-test-user@test.com  | TestPassword123!  | Admin Test User | 2 |
| admin-test-Eduardo@Corgniali.com  | TestPassword123!  | Eduardo Corgniale | 2 |
| admin-test-Ezequiel@Baruer.com  | TestPassword123!  | Ezequiel Baruer | 2 |
| admin-test-Gimena@Rivoira.com  | TestPassword123!  | Gimena Rivoira | 2 |
| admin-test-Gonzalo@Ortiz.com | TestPassword123!  | Gonzalo Ortiz | 2 |
| admin-test-Manuel@Francisco.com | TestPassword123!  | Manuel Francisco | 2 |
| admin-test-Matias@Marin.com | TestPassword123!  | Matias Marin | 2 |
| admin-test-Mauro@Omiñuka.com  | TestPassword123!  | Mauro Omiñuka | 2 |
| admin-test-Valentin@Tarayre.com  | TestPassword123!  | Valentin Tarayre | 2 |
| admin-test-Victor@Sanabria.com  | TestPassword123!  | Victor Sanabria | 2 |


## Start local server

``` bash
npm start
```
