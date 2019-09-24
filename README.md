# Starwars API

This is a simple Javascript REST API that provides fictitious data from elements of the Starwars universe, such as people, spaceships, planets, and vehicles.

> This application was inspired by the following web star wars api: https://swapi.co/

## Getting started
##### In your prefer local path:
- `git clone https://github.com/wallacesat/Starwars-api-heroku`
- `cd Starwars-api-heroku`
- `yarn install`
- `yarn start`
> If you prefer, use `npm` instead of `yarn`

After the server starts successfully, you can make requests to the end points of this api.

##### You will need a rest tool to make GET requests.
> I recommend the  [Insomnia](https://insomnia.rest/download/).

##### GET request example:
Request
- `http://localhost:3001/api/people`

Response
 ``` json
 {
 "count": 40,
 "results": [
    {
      "createdAt": "2019-03-28T22:05:56.493Z",
      "_id": "5c9d45440b15835380f9d4ea",
      "name": "Walter Obrien",
      "avatar": "http://i.pravatar.cc/40?img=0.2983651814934496",
      "height": 73,
      "mass": 127,
      "hair_color": "tewope",
      "skin_color": "veraep",
      "eye_color": "ejesof",
      "birth_year": "29BBY",
      "gender": "Female"
    },
    {
      "createdAt": "2019-03-28T22:05:56.493Z",
      "_id": "5c9d45440b15835380f9d4e9",
      "name": "Jeffery French",
      "avatar": "http://i.pravatar.cc/40?img=0.8316213567279407",
      "height": 170,
      "mass": 139,
      "hair_color": "pekedu",
      "skin_color": "bezegj",
      "eye_color": "vadilf",
      "birth_year": "18BBY",
      "gender": "Female"
    },
  ]
 }
 ```

> The result content contains an array of 10 items or less.

Use page parameter to fetch more data.
##### For example:
- `http://localhost:3001/api/people/page=2`

> #### NOTE
> You will need internet access, because even if the API is running locally, the data collection is stored in an online database.

##  Frameworks

#### [ExpressJS](https://expressjs.com/)
For management of routing system, routes, HTTP requests and responses.

#### [Mongoose](https://mongoosejs.com/)
To manage database connections.

##  Database

#### [MongoDB Atlas](https://cloud.mongodb.com/)
For the storage of dummy data to be accessed by api, whose data follow the paradigm of the nonrelational model.

##  Languages

- Javascript - [w3school: JS tutorial](https://www.w3schools.com/js/)
- ES6 - [ECMAScript 2015: Specification](https://www.ecma-international.org/ecma-262/6.0/)

## License
MIT ©  [wallacesat](https://github.com/wallacesat/)
