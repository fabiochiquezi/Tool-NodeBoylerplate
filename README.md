# Node Boylerplate
A complete boilerplate to development in backend with **Node.js**, below is a list with all the technologies inside of this project and how to use it.
<br>


## Technologies

##### Dependencies
   - Express
   - Dotenv
   - Nodemon

##### Dev Dependencies
   - typescript
   - ts-node-dev
   - ts-node
   - eslint
   - prettier
   - jest
   - ts-jest
   - commitizen
   - rimraf
   - husky
   - docker
   - github actions
<br>



## Process
The process to use it's quite simple

##### Start
1. Open **README.example.md** and describe your new project
2. open **CHANGELOG.md** and start describe your inital of the project

##### Install
1. **yarn:** install all dependencies
2. **yarn up:** get up the Node app, Mongo and Mongo-Express
3. **yarn down:** destroy the containers
_ps: to run the app with Docker, first run 'yarn watch' and then 'yarn up'. It was designed in this way to make Docker faster as possible_

##### Test
1. **yarn test:** test your app
2. **yarn 'test:watch':** mantain your app in stage of test
3. **yarn 'test:watch':** get the coverage of the pile of tests
<br>


## Git
The project is setted up with **Husky**, **Github Actions**, **Commitizen** and **Commitlint**.

1. In order to _commit_, just use _git commit_, this will initialize **Commitizen** to help you to make the _commit_ utilizing together the pattern that **Commitlint** need.
2. With **Husky** in the begin of each commit will be run a battery of tests
3. For _pushes_ and _pull_, **Git Hub Actions** will run tests again to make sure that everything work well