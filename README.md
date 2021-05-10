<div align="center">
  <br />
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




## Table of Contents
<ol>
  <li>
    <a href="#built-with">Built with</a>
    <ul>
      <li><a href="#testing-libraries">Testing libraries</a></li>
    </ul>
  </li>
  <li>
    <a href="#how-to-use-the-application">How to use the application?</a>
  </li>
  <li>
    <a href="#getting-started">Getting started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#testing">Testing</a></li>
  <li>
    <a href="#api-documentation">API documentation</a>
    <ul>
      <li><a href="#other-operations">Other operations</a></li>
    </ul>
  </li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
</ol>



## Built with
* [PHP](https://www.php.net) - backend responsible for user authentication, login / signup, searches, image upload / deletion, etc.
* [MySQL](https://www.mysql.com) - storage solution for holding existing users and image upload information
* [React / JS](https://reactjs.org) - frontend responsible for UI/UX interface to perform actions

### Testing libraries
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




## API documentation
```GET``` ```/api/feed/recent.php``` returns all public uploads ordered by time

```GET``` ```/api/feed/search.php``` returns all public uploads with exact search query in the title

```GET``` ```/api/feed/user.php``` returns uploads for a user (provided you are authenticated)

<br />

```POST``` ```/api/feed/upload.php``` uploads an image (provided you are authenticated) to the repository

```POST``` ```/api/feed/delete.php``` deletes an image (provided you are the owner) from the repository

<br />

```POST``` ```/api/user/login.php``` returns a JWT token if user has the correct credentials

```POST``` ```/api/user/signup.php``` returns a JWT token if user does not exist

```POST``` ```/api/user/validate.php``` returns whether a given JWT token is valid

### Other operations
```/api/google/auth.php``` redirects user to Google OAuth flow

```/api/google/return.php``` return point after user is authenticated by Google (redirects back to frontend)




## Future features
* Cropping prior to upload
* Direct download for each image
* Albums / collections for user organization
* Tagging system for uploads
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
