<div align="center">
  <a href="https://joshuajadaniel.com/image-repository/build">
    <img src="https://joshuajadaniel.com/image-repository/showcase/logo.png" alt="Image Repository" width="auto" height="80">
  </a>
  <h3>Image Repository</h3>
  A web-based repository for images built on PHP / MySQL / React. Features include searching, public / private uploads, upload deletions, Google OAuth sign-in, and much more!
  <br />
  <br />
  <p> 
    <a href="https://joshuajadaniel.com/image-repository/build">View Live Demo</a>
    ·
    <a href="https://github.com/joshuajadaniel/image-repository/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/joshuajadaniel/image-repository/issues/new">Request Feature</a>
  </p>

  <a href="https://linkedin.com/in/joshuajadaniel">
    <img alt="License" src="https://img.shields.io/badge/-LinkedIn-gray.svg?logo=linkedin" />
  </a>
  <a href="https://github.com/joshuajadaniel/image-repository/graphs/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/joshuajadaniel/image-repository?color=green" />
  </a>
  <a href="https://github.com/joshuajadaniel/image-repository/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/joshuajadaniel/image-repository" />
  </a>
  <br />
  <br />
</div>

[![Image Repository Screenshot](https://joshuajadaniel.com/image-repository/showcase/image-repository.jpg)](https://joshuajadaniel.com/image-repository/build)




## Built with
* [PHP](https://www.php.net) - backend responsible for user authentication, login / signup, searches, image upload / deletion, etc.
* [MySQL](https://www.mysql.com) - storage solution for holding existing users and image upload information
* [React / JS](https://reactjs.org) - frontend responsible for UI/UX interface to perform actions

### Testing Libraries
* [Jest Testing Library](https://jestjs.io)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)




## How to use the application?
Go the [Live Demo](https://joshuajadaniel.com/image-repository/build) and signup for an account either with Google or with a custom username and password. If you would prefer not to create a new account, you can use the test account with username `demo` and password `demo`.

The homepage displays the most recent public uploads by users (including your own public uploads!)

Once logged in, you will be able to upload images and access your profile page via the account icon in the menu bar. On the profile page, you have options to view your public uploads, private uploads, and upload / delete images.




## Getting started
To get a local copy up and running follow these simple example steps.

### Prerequisites
NPM and Composer are required for installing the needed dependencies of this project.
```sh
composer --version
```
```sh
npm --version
```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/joshuajadaniel/image-repository.git
   ```
2. Install Composer dependencies in `/api`
   ```sh
   composer install
   ```
3. Follow the instructions in `/api/configSkeleton.php` to create `config.php`
4. Have a PHP / MySQL enabled server running `/api`
5. Install NPM packages
   ```sh
   npm install
   ```
6. Update `basename` and `homepage` if needed in `/src/App.jsx` and `package.json` respectively.
7. Update `/api` links in `/utils`
8. Start a local server for React
   ```sh
   npm start
   ```




## Testing
Frontend testing is conducted using Jest and RTL (React Testing Library) and backend testing is conducted using Postman.

```sh
# Frontend testing (components shown below)
npm run test -- --coverage --watchAll=false
```
![Frontend Testing](https://joshuajadaniel.com/image-repository/showcase/frontend-testing.png)

<br />

```sh
# Example backend testing (recent feed shown below)
```
![Backend Testing](https://joshuajadaniel.com/image-repository/showcase/backend-testing.png)




## Future features
* Cropping prior to upload
* Direct download for each image
* Albums / collections for user organization
* Edits to previous uploads




## License
Distributed under the MIT License. See `LICENSE` for more information.




## Contact
Joshua J. A. Daniel

Email: joshuajadaniel@gmail.com

LinkedIn: [https://linkedin.com/in/joshuajadaniel](https://linkedin.com/in/joshuajadaniel)




## Acknowledgements
* [Axios](https://github.com/axios/axios)
* [Material UI](https://material-ui.com)
* [Cloudinary](https://cloudinary.com)
* [@egjs/infinite-grid](https://github.com/naver/egjs-infinitegrid)
