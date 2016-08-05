Before starting make sure you have node.js installed on your machine. If you don't have node.js installed you can find
an installer here[https://nodejs.org/en/download/]. Download the latest version, v4.4.7.

How to run the app
Clone this repo and then run:

$ npm install
$ npm start

How to run the tests
$ npm test

About the app:

This app is a simple api that allows users to create and retrieve factories. It uses the express.js framework and
implements the json-fs-store library to store data.

There is currently one endpoint implemented.

/factories

GET: Retrieves an array of all of the factory objects

POST: Creates a new factory object
    Expects:
        {
            name: 'Factory Name'
        }

/factories/{id}

GET: Retrieves factory object with the id {id}



What you need to do:

Extend the factories resource to include the following fields: email, phone_number, city, state
Edit the jasmine tests to account for these new fields

Create a new resource for brands. This resource should have the endpoint /brands. The brands resource should have the
same fields as the factories resource.
Write corresponding jasmine tests

We want to store both brands and factories in a companies table. For this exercise the companies table is represented by
the json files in the /store/companies directories. A company_type property should be used to specify if the company is
a brand or factory. Change the factory and brand resources to account for these changes.
Edit the tests to account for these changes.

Push the altered application to a public repository in your github account.

Bonus
Implement a delete method on the brand and factory resources.