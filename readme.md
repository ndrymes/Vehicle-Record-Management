# MotorwayTest

## Development

Libraries used
- Express
- TypeOrm
- Jest - For testing purpose

### Start development environment

-   Create `.env` file or run `cp sample.env .env`

You can look for the example in the `sample.env`

Next up you can choose to run your development environment entirely inside Docker or to run the app server directly on your local machine.

#### Running Postgres inside Docker

-   Start the development cluster

```bash

docker-compose up 

```


#### Running app server directly on your local machine's environment

- Run `npm i` or `npm install` to install all app dependencies
- Start the app at the root directory using
  - `npm run start:dev` for development
  - `npm run start` for production

## API

The endpoint to retrieve a state and vehicle Records. 
| Parameter   | Description                                 |
| ----------- | ------------------------------------------- |
| Base Url    |/                                            |
| Http Method | POST                                        |
| Path        | /v1/statelogs                               |


> These codes are custom to the app and the http status codes are still going to be sent

### Sample Request Parameters
```
    {
    "vehicleId":3,
    "timestamp": "2022-09-12 23:40:38+00"
}
```

### Sample Success Response Parameters

```
   {
    "error": false,
    "code": 200,
    "message": "Data gotten successfully",
    "data": {
    "vehicle": {
        "id": 3,
        "make": "VW",
        "model": "GOLF",
        "state": "sold"
    },
    "state": {
        "state": "sold"
    }
}
}
```

# Todo

I had a lot of fun building this but there are some improvements I can still make:

- Add migrations for database purpose
- Add an application Monitoring tool like sentry
- Add more test cases
- add open Api for proper documentation
- Have a standard response helper

# Testing

- To run the tests, simply type `npm test`
- We can also get code coverage by `npm run coverage`

Thank you 👍
