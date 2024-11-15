<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lat0s/FlossophyREST">
    <img src="assets/flossophy.png" alt="Logo" width="256" height="256">
  </a>

<h3 align="center">Flossophy Rest API</h3>

  <p align="center">
    🪶RESTAPI for Flossophy using Koa.js and MongoDB.
    <br />
    <a href="https://github.com/lat0s/FlossophyREST"><strong>Explore the docs (!WIP!) »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lat0s/FlossophyREST">View Demo (!WIP!) </a>
    ·
    <a href="https://github.com/lat0s/FlossophyREST/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/lat0s/FlossophyREST/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Node.js][Node]][Node-url]
- [![Koa][Koa]][Koa-url]
- [![MongoDB][Mongo]][Mongo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Following the guide with steps listed below will help you run this application.

### Prerequisites

- [Node.js](https://nodejs.org/en) Latest Version
- [MongoDB](https://www.mongodb.com/) Locally hosted or Atlas (please look elsewhere for details on how to install them.)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lat0s/FlossophyREST.git
   ```

<br>

2. Navigate to `/app` directory, open a new terminal and write the following command

   ```sh
   npm install
   ```

<br>

3. Create a new empty file named `.env`

<br>

4. Enter the following in `.env`
   ```js
   SMTP_SERVICE=<YOUR_SERVICE>
   SMTP_USER=<YOUR_EMAIL>
   SMTP_PASS=<YOUR_PASS>
   EMAIL_FROM=<YOUR_EMAIL>
   MONGODB_URI=<YOUR_MONGODB_URI>";
   ```

<br>

5. Look [here](https://medium.com/@deepbag/how-to-send-mail-using-nodemailer-for-free-f8e3df6f7cf6) for more information. I personally used Gmail and followed the instructions on the link. If u follow the guide then the password in `SMPT_PASS` should be the one u copied from the App Password. The `SMTP_USER` should be the Gmail address and the `SMTP_SERVICE=gmail`.

<br>

6. Run the application
   ```sh
   node app.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This REST API is intented for usage within the Flossophy Full-Stack Project (!WIP!).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] N/A

See the [open issues](https://github.com/lat0s/FlossophyREST/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star⭐! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Apache 2.0 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

X - [@lat0ss](https://twitter.com/lat0ss)
Discord - [@lesbiathan](https://discord.com/users/989771998899109951)

Project Link: [https://github.com/lat0s/FlossophyREST](https://github.com/lat0s/FlossophyREST)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

<hr>

## <!-- Footer -->

<p align="center">
<img src="./assets/footer.svg">
</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Mongo]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat-square
[Mongo-url]: https://www.mongodb.com/
[Node]: https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=flat-square
[Node-url]: https://nodejs.org/en
[Koa-url]: https://koajs.com/
[Koa]: https://img.shields.io/badge/Koa-33333D?logo=koa&logoColor=fff&style=flat-square
[contributors-shield]: https://img.shields.io/github/contributors/lat0s/FlossophyREST.svg?style=for-the-badge
[contributors-url]: https://github.com/lat0s/FlossophyREST/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lat0s/FlossophyREST.svg?style=for-the-badge
[forks-url]: https://github.com/lat0s/FlossophyREST/network/members
[stars-shield]: https://img.shields.io/github/stars/lat0s/FlossophyREST.svg?style=for-the-badge
[stars-url]: https://github.com/lat0s/FlossophyREST/stargazers
[issues-shield]: https://img.shields.io/github/issues/lat0s/FlossophyREST.svg?style=for-the-badge
[issues-url]: https://github.com/lat0s/FlossophyREST/issues
[license-shield]: https://img.shields.io/github/license/lat0s/FlossophyREST.svg?style=for-the-badge
[license-url]: https://github.com/lat0s/FlossophyREST/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/latosgeorge
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
