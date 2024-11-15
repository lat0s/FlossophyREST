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
- [![Nodemailer][Nodemailer]][Nodemailer-url]

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

[Nodemailer-url]: https://www.nodemailer.com/
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
[Nodemailer]: https://img.shields.io/badge/Nodemailer-green?style=flat-square&logo=data%3Aimg%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAZAAAAC%2FCAYAAADQMoqbAAAABGdBTUEAALGPC%2FxhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAAB3RJTUUH6AsPFQgjaSOI6QAAG9dJREFUeNrt3XlsVNe9B%2FDvvXd2GxMDzWvSbKVb2r5uZKNhC%2FuOQ4AsJGEz2GOoRBW1ivqiSnmV8iSeIvU1qrqoIm0SNdCWPBKlLaHJa9I0xinYgMGBGLPYrLYzGO%2Be9d73h%2B%2BFMfEytmfmnDv3%2B5H4I%2FYw%2Fnkg8%2BX6nHu%2Byoun%2FzF%2B%2FeenXwaRQK%2Be6vStmpgfdyuIi56FiIb2%2FOFL47SaeRP%2BY1LhHZHbAuPPiR6InOvXH7cvrgpFJj5wkz8MoF30PEQ0sF0nL0%2F94YcX1miFj3%2F37%2B801dw48zNfbZvgHVMnejBypr%2Be697y57Pdk8a41YJvjfeeBNAjeiYi%2BrR3zrUuKX2%2FYWvUwHoVADrjkfnFldvLWqJds0UPR441HsD0bdWtj%2B1rCi8QPQwRfdrJ1p75wX%2FUl3UlMA%2BAopof9zSG2%2BaUVL4YDCdi00QPSY51owHcvbUitL62NbpY9DBEdE1LOD7z4bdqg6GoMQuABwDUpM%2F7DrU2LHjq8KubdEP%2FjuhhyZEUAFpX3JgaLA9tbOyOzxQ9EBEBcd2YsuiNo8HT3cY8AF4ABtA3QAAgf2%2FT0cXP1%2B5ZDeAW0UOT4yjo%2FTvpaepJzA6Wh4rDCf1e0UMROdy3l7350abjHfpCAP7kT6j9PHjcr0%2B%2F%2B9Cuc%2FuXiZ6aHEsBkHeiLbbg6f0ta3TD%2BKrogYgc6ubvvXtydXlz92JFVfOv%2F6Q6wG%2Ba%2BEzNrjUHr9SvEj09OUYc5mUxegNEAVD49oWepT%2BtaVsB4EbRAxI5ze%2BONS35fW3zckVzTzA%2FpCR%2FfqAAQdzQ7y6pfLG0vusTLmZSNlxCb4BYv6wQuW17bcfK%2F63vWih6QCInefdc64of%2FqNureHxfxHX%2FnHXhzrI79euxLqnbziwPdgS7Zol%2BpuhnNeA3quQxHUf1wF8%2FdmqlnX7msIPih6SyAlOtvYsfuTPR4Mxj%2F9e9P3JQB%2FqEM%2FjbugOzS6pfHFTTE9wMZMy6TSAGNDnKBPrKkSNG5i8tSK0qaEjNl%2F0oES5rDuuz5mxs2pzxOWbAUXVzA8r%2FT12qAABAP%2Bh1oaFz9TsWgeAi5mUKcYAH7dCxNMVNx4oLQ9tvBJJzBA9LFGOum%2FKjqqSTkObrWgul%2FkxZaAHpxIgADD2tfMHin516u8Pg4uZlH1WiPjOdsbnbS4PFcd04y7RQxHlmNsf%2BvNHT55uD8%2BHx%2Bs1P6YM9htSDRAAuPn52j2PvNV4hIvqJIIVIvnVLdEFz1a1PArgc6KHIsoVP65oePD%2FTjcvgy%2BvQFEUayPLoIYTIDBg3PnU4VeLD16pf0j0N0uOZIXIhN0N3UU%2FP9bGf8wQpcHvjjU99sKBU0%2FAn3%2BrGR4pGVaAAFAienxySeWLZZd6WheJ%2FqbJsQwAX%2FjFsfYn%2F3a%2Be6XoYYjsrKq548Hvv3OsFB7%2FJEVzDbjjqj%2FDDRDA3N5bXLm9pCMW5llFlG3WVQgA3Pv0%2FpbSw5cjS0UPRWRHFzojCxfuOlRmaK4pisdn%2FX%2BVUngAIwsQAPDUdlyau%2BXgSxt1Q%2BdiJmWbFSKuiG5M3Vwe2tTYHZ8jeigiO4nEEzOn7KgqiyT0mfAFBt2uO5CRBggABMov1y187vibj4EHL1L2Xd3e2xrVZwXLQ8WdMX2K6KGIbOKeB%2F50uORKd3gOfPlupbfZY1jhAYwuQACg8Hf1%2F1z%2B2zPv8%2BBFEsEKEf%2BJttiCrRWhtTHd%2BIbooYgkd%2BvqPccfP9bcthC%2BgE%2FRtJR2XPVntAECABOfO%2F7mmg9CJ3jwIolghUhBRXNk8XOHW1cC%2BKzooYhk9dOD55b95cSlBw2XZ6zi9gIjDA8gPQECA8bdWw6%2BVPpx%2B8Ulol8cciQrRG7%2B4%2BnOFS%2FXdXCHIFE%2FXj8VeuTZf558Eqp6u%2BILjPr50hIgALTOeGR6ceX2Uvaqk0A6gK9uq25dt68pvFz0MEQyqQl1LV3%2F15oSwJgEXz5SvVlwMOkKEABws1edBLq6vdcAJm%2BtCJXWtkZ5BDwRgJZwbN6cP1WV6bo%2BDb6AazTrHsnSGSAAe9VJLCtEtK64MSNYHiphrzo5XVzXp9%2B%2FoyrYE43PNtw%2B92jXPZKlO0AA9qqTWFe397JXnQiT5u8%2BuulSe%2Fd8qJpH8fqANIUHkJkAAdirTmJZIcJedXKyz33v73WrK89fXgQoAfjzDEVJW3YAyFyAAOxVJ7HYq06O9ssjF5e%2BcvTccgDj4AtAUbX0pgcyGyBWr3qwvusTbu8lEdirTo707rkrK3%2F0Xu1aABPh8UFxe1I%2BYXc4Mhog6D14cdqGA9uDHbEwt%2FeSKOxVJ8eou9KzZNUbR8oMw7gHmgvwpHfdI1mmAwTo7VWfteXgSxtjeoIHL1K2sVedHKM7lpj7wB%2BqNscSielQFA2%2BPKR73SNZNgIEAPzll%2BvmP1OziwcvkgjsVScnmDpl58HSzkh0FgAXfHlQ1My%2BxWcrQACg8LXzB5b%2F6tTfuTOLREjuVZ%2B%2FuTy0KaYb94keiihNvln0Rk3x6ZaOBQC88PihuNwZ%2F6LZDBAAmPh87Z61bzUeeSTLX5cISNreW90SXfhsVcsaAHeKHopolG768b4zj75X37wEQB5cbsDjzcoXznaAwIBx91OHXw1%2B3H6RVyIkghUiN%2Bxu6F7682NtD4Hbe8nGfnescckLB86sADABigr4Ahld90iW9QABoEb0%2BNTiyu3BSz2tXMwkEawQufUXx9pX%2Fe189wLRAxGNRFVzx%2FLvv3N8LYAvA0DvzYLZe1sXESAA4GoMt80qrtweZK86CaQD%2BPen97esO3w5witishWzzzxoGMZkAIDXD0VzZefSwyQqQADAW9txaZ7Zqz5J4BzkTFe390Z047uby0Mb2atOdnG1zzwWnwlAg8sNpfd%2Bj6wSGSDAtV71R8EWOcq%2B63vVN7JXnWzA6jOfC8BtrXuIIDpAALNX%2FfdnK3jcCYmQ3Ks%2Bf2tFaENMN1hFQLK6dfWe408ca25bCKD3ksOfh2yueySTIUAA4Is%2F%2BWj3%2Bg9CJ1aIHoQc6fpe9ccBfEn0UETXM%2FvMiwCMBdC740pzCZtHlgBB3NDv23LwpSB71UkQK0Q%2B88fTnctfrut4SPRARMnMPvM1AG4HAMPlgVkOJYw0AQL2qpN4VohM3Fbd%2Bui%2BpvBK0QMRAUBNqGvZ%2Br%2FWlAJG73mCqmoogtY9kskUIADgSepVnyp6GHIs3QC%2BYfaqLxY9DDmb2Wce1HV9GgANAODLV7J1s%2BBgZAsQ4FqvejGAb4gehhzHugpRzF71Mm7vJVGS%2B8wB9C52%2BAJQNE30aADkDBCgt1d9yc%2Fq9j4K4GbRw5DjWCHiNnvVS8IJ%2FX7RQ5HjXOszBzwAYLh9wtc9kskaIAAw4YW6t1fuOrd%2FqehByJGsnw%2F4zF71Dbph8IqYsiWpzxy9ix2qBsWb%2FZsFByNzgADAl5%2Bp2bWOveok2BizV503vFJW9OkzBwAo5v0e4tc9kskeIIgb%2Bj3sVScJ3Gj2qvPvIWVUnz5ziy8ARZVj3SOZ9AEC9qqTPL78bFXLusOXI8tFD0K5qU%2BfucXjg%2BL2iB6tX3YIEIC96iSJuIH7NpeHShs6YjwCntKqPRq%2F1mdubdfVXICAQxJTZZcAAdirTnJwtUb1maXloeCVSOIB0cNQzph8%2F46qkqt95gCgKIBPvnWPZHYKEIC96iQHz9nO%2BNzN5aGNMd3gFTGN1h1Fb9SsOdfaNR%2FAtT26vjwoqtxv0XJP1z%2F2qpMMAtUt0UXPVrU8Dl4R0yj8eN%2BZB9%2Brb14KYMzVD3r8UFxu0aMNyY4Bwl51kkXh7obuB3%2FzcXuR6EHInnbWNj%2F2woEzTyD5HyGaC%2FDIc7PgYGwZIGCvOsnj8%2F9T07bmb%2Be7eUVMw7LvYtuDZXs%2FCgK41j%2BjqNKveySza4AA7FUnSRjA3U%2FvbwmyV51SdaEzsrBo9%2BHNumHcj%2BT3Yb%2F86x7J7DNp%2F9irTjJQI7oxdXN5KNjYHZ8nehiSm9VnHo0nHoC14woAvH6h5VAjYfcAAdirTnJwmb3qJZ0xfZroYUhaffvMLS43FInv9xhILgQIwF51koP3RFtswdaK0CbdMO4WPQxJ57a1b33ct88cMNc9xJdDjUSuBAjAXnWSQ15Fc2TJtuq2tQC%2BInoYksdz%2F2ooer324rU%2Bc4s%2FD4piz7die049APaqkyQKXznZsfzluo5VACaIHobEe%2F1U6JH%2F%2FvDUkzD7zK%2FyBWy37pEspwIE7FUneXxuW3XrI%2FuawgtFD0JiXeszR59TCwyXR6pyqJHItQAB2KtOkjCAr2%2BtCG2obY3yitihruszv%2FZ%2Bq6pQbLrukSwXAwRgrzrJQemKG1OC5aHSK5HELNHDUHbphvHpPnOLL982NwsOJlcDBGCvOsnB3dSTmL25t1f9u6KHoayZNOe16j595lf5AlA0%2BcqhRiKXAwRgrzrJwV%2FdEl3IXnXH%2BFzpOycer7rQshhWn7nFbf91j2S5HiAAe9VJDgVvX%2BhZxl713PfLIxeX7fzo%2FHIAhX0%2BoWqA1%2F7rHn2%2BJdEDZAN71UkS7FXPcWaf%2BRoAn%2B%2F7GcW838P%2B6x7JHBEgYK86yYO96jmqvi28ZNUbR4J9%2BswtvgAUNTfWPZI5JUAA9qqTJNirnnvao%2FE503ZWlvXpMzcZbh8Ut2eEzyw3JwUIwF51kgN71XPL5Pt3VJW2h6OzkXxAIgBoLihe%2Bx2SmCqnBQjAXnWSA3vVc0P%2FfeYAoCi2KocaCScGCMBedZIDe9Vtrt8%2Bc4vPXuVQI5Hb390g2KtOkmCvuk3122du8fihuNzDf1KbcWyAgL3qJA%2F2qttMv33mFs0FeHLnZsHBODlAAPaqkyTYq24fA%2FaZA2Y5VG6veyRzeoAA7FUnObBX3QYG7DO3%2BHN%2F3SOZc77TwbFXnWTAXnW59d9nbvH6bV0ONRIMkGvYq04y8J5oi83fWhEq1g3j26KHoav67zO3uNxQPLl7v8dAGCB9sVedZJBv9qo%2FBlYRSGHAPnPAXPfIrUMSU8UAuQ571UkS41852bHi5boOLqoLNmCfucWfB0Vx5lupM7%2FrwbFXnWTxhW3VrWv3NYVXih7EqQbqM7cYvoDj1j2SMUD6x151koIB3LO1IlRa2xpdLHoWp2nujs6f86eqsk%2F1mZsMlwdqDpVDjQQDZGDsVScZaF1xYwZ71bNLN4wZ979aWdYTjc9Cf9t1VRWKQ9c9%2BrwMogeQHHvVSQbupp7EHPaqZ82kOa9Vb%2FqkKzwX1%2FeZW3z5jrlZcDAMkKGxV51kwF717LD6zBfh%2Bj5ziy8ARcu9cqiRYICkhr3qJAP2qmfYgH3mFrcHisPXPZIxQFLEXnWSBHvVM2TPmcurfvRe7Vp8qs%2FcpGqAl%2BseyRggqWOvOsmCveppVt8WXvL4n48GDcO4u%2F9HKOb9Hlz3SMYAGR72qpMU2KuePlafeaJ3u27%2Fixu%2BABSV6x7XY4AMn7%2F8ct38%2Fzy2m73qJBJ71dNj6v07qoL99pmbDLcPitszzKd1BgbIyBTuOPvh8t%2BeeZ%2FHTJBI7FUfnW8VvVGz8Vxr1wJc32du0VxQvM47JDFVDJCRm%2Fjc8TfZq06isVd9ZG76wfunHnuvvnkJgLx%2BH6EojiqHGgkGyCiwV50kwV71YdpZ27zkN4caVgAYP%2BCDfM4qhxoJvjqjY%2FWqb77U07pQ9DA2pwPgP%2FVGjr3qKdp3sW1F2d6P1gP44oAP8vihuNypP6mzKNYvBsjouRrDbQ8UV24vDSdi7FUnYQzgrqf3t5SyV31gFzoji4p2Hw7qhnHvgA%2FSXICHNwumggGSHt7ajktznzr86kbd0LmYSaJoZq96aWN3fK7oYWQTiSdmmX3mMzDQdl2uewwLAyR9AnubjrJXnURzm73qGztj%2BmTRw0jknml%2FOLTpSnd4DgbYrguA6x7DxFcqvdirTjLwmb3qT%2BqG8fnRP53t3b56z7EnakPt%2FfeZW7xc9xguBkj6feEnH%2B1e90HoxEOiByFHG1vRHFm2rbrN8cedPPevhqK%2FnGjsv8%2Fc4nJD8fB%2Bj%2BFigGRA3NAnbzn4UhkPXiTBbnnlZMcTL9d1PCF6EFFePxV6bNA%2Bc6B3LxHLoUaEAZIZWmc8MmPDge1lLdEuLmaSSN%2FaVt1auq8p7Lgr4ppQV5HZZz5p0Af686BwQ%2BqI8FXLHHdDd2h2SeWLZeFEbIboYcixVAOYvLUiFKxtjS4SPUy2NHdHF5h95lMwyPuc4QtA0VzDeGZKxgDJLO%2Bh1ob5Zq%2F6N0UPQ47lSupVz%2Fl7lcw%2B82BPND4T%2FfWZmwyXByrLoUaFAZJ5gb1NRxf9rG7vIwD%2BTfQw5Fges1d9UziR09t7J815rXrjoH3mAKCqULjuMWoMkOwY%2F0Ld2yveajyyWPQg5GiB6pbooqf3t6zXDeProofJgFtK3zmxuupCy2IM1Gdu8eXzZsE0YIBkz1eeOvzqhoNX6leKHoQcbWyu9qqbfeYPYaA%2Bc4svAEVjOVQ6MECyKKLHJ5dUvlhW3%2FUJzyoikT6ba73qe85cfnjQPnOT4fJA4bpH2jBAsku7EuuevuHA9rKOWHie6GHI0b6SK73q9W3hpWaf%2BeDn0Kka1z3SjAGSfa6G7tDMLQdf2hTTE%2FeIHoYcSzF71UsaOmLzRQ8zUu3R%2BNwh%2B8x7v13zfg%2Bue6QTA0QMb%2Fnlurlmr%2Fqtoochx7J61Us6Y%2Fo00cMMl24YVp%2F5LAyyXRdA77qHynWPdGOAiDN2x9kPi3575n22yJFI3rOd8XlbK0LFMd34juhhhuFbS14%2FuvFca9d8DNRnbjLcPihuT4pPS8PBABFr4nPH31zzVuORR0UPQo6WX9EcWfJsVctq2KNX%2FaYfvH%2Fq0fKzocUYqM%2FcompQvDwkMVMYIIIZMO4ye9UfFD0LOdr43Q3dD9mhV31nbfNSs898wqAPVLjukWkMEPHUiB6fUly5PchedRJsouy96maf%2BToAXxrywb48rntkGANEDuxVJymYveolta1R6e4RqW8LLy7afbhs0D5zi4flUNnAAJEHe9VJBlpEN6YFe3vV54gexhKJJ2ZP21lZFo0npmPQ7boANBfg4c2C2cAAkQt71UkG7qaexOxg7%2FbeKaKHAfDdaX84VNIejs7GYH3mQO%2B6h4%2FrHtnCAJEPe9VJBv4TbbEFWytCxbphiKwi%2BPrqPcfWD9lnbvHlQVH5tpYtfKXlxF51ksGYiubIkm3VbY8BuFnA1%2F%2Fsc%2F9qeOQvJxqXAhgz5KO9XPfINgaIpNirTpL4zCsnO1bsPN2Z9b%2BHO2ubl%2Fz3h6dWIZUf57rcUDy83yPbGCDyYq86yeJL%2F3Xoyrp9TeEV2fqCNaGu5eZ23a8M%2BWBFBXhIohAMELmxV52kEDdw79aKUGk2etXNPvOgbhj3ARh6NdyfB0XhW5kIfNXlx151koGWjV71pD7zBzDUAYlA77qHNvTDKDMYIPbAXnWSQXKv%2Bn0ZeP7U%2BswtLg%2FXPQRjgNgHe9VJBld71QF8LY3Pe0vx3z5%2BPKU%2BcwBQue4hAwaIvbBXnWQw9u0LPUU%2FP9aWtiviXx65uGzX8YvLMVSfucWXz5sFJcAAsRn2qpMkPvuLY%2B2r0tGrnmqf%2BVW%2BABSNhyTKgAFiP%2BxVJ1ncOdpe9ZT7zE2GywPFzXOuZMEAsSf2qpMMlLiBySPtVU%2B9z9ykalC47iEVBoh9sVedZDCiXvVh9ZkDAFgOJSMGiL2xV51kMNxe9ZT7zK%2FyBVgOJSEGiP2xV51kkGqveup95ibD7YPiHvq2EMo%2BBkgOYK86SWLIXvWU%2B8wtqgbFy5sFZcUAyQ3sVSdZDNirvu9i28qU%2B8yB3nIorntIjQGSO9irTlIwe9VLa1ujV69E6tvCy4p2Hw6m1Gdu8eVx3UNyPIUst1i96l0%2Fn%2FRku6qoVaIHIkeyetWxY%2BaNdxZ6FEzbWbkgGk9MRSrbdQHAw3IoO2CA5B6rV%2F3ij79WdAFAo%2BiByJFcTT2JmcHy0F2ftFxCezhakPLvVF1c97AJ%2FggrN7FXnaRwoi1WcEkfk3p4mOseZA8MkNzFXnWSgs%2FtxdhxKVaq%2B%2FKgqHxbsgv%2BSeUw9qqTLPL9eQiMHT%2FoYwwv1z3shgGS29irTtK4Ia8Q3sCY%2Fj%2FpckNlOZTtMEByH3vVSQqKomDcDTfC5fFf9wmWQ9kVA8QZ2KtOUlAVFRPG3wQ1uc%2FDnwdF4VuRHfFPzTnYq05S0FQN4ybcAkABvH4oGu8msCsGiLOwV52k4HV5MO4zt0DhuoetMUCch73qJAW%2Fx4d8L9c%2B7IwB4kDsVSdZFHgD8LOi1rYYIM7EXnWSxg2%2BfLi5DmJLDBDnYq86SUFRFIzzF0DjHei2wz8xZ2OvOklBU1WM94%2BFAnZ%2F2AkDhKxeda6HkFAuTUPhQHeqk5QYIASYveofhE48LHoQcjafy4MbfPmix6AUMUAIQG%2Bv%2BpaDL5V%2B3H6xaPTPRjRyAY8Pedcfd0JSYoCQReuMR6aZveoLRA9DzlbgDcDn8ogeg4bAAKFk7sZw28ziyu1B9qqTSIqioNA%2FBi52okuNAULXs3rVS3RD5%2FZeEkZRFIwPFEDlQYvS4p8M9Sewt%2Bnogudr9zwO4DbRw5BzaaqG8YECbu%2BVFAOEBnLDr0%2B%2FW7Tr3H5u7yWh3JqL23slxQChwdzxTM2uJz8InVglehByNp%2FLgwIvt%2FfKhgFCg4ob%2Bl1bDr5Uyl51Ei3f64Ofx79LhQFCQ9E645HpGw5sD7ZEu%2BaIHoac7QZvHryaW%2FQYZGKAUCqsXvVNMT0xWfQw5FyKoqAwwO29smCAUKp8h1obFjxTs2stgK%2BJHoacS1VUc3svd2aJxgCh4Sh47fyBZT%2Br2%2FswgBtFD0POpakaxvkLRI%2FheAwQGq6bX6h7%2B%2BG3Go9wUZ2E8rjcKPRze69IDBAaiTvNXvUVogchZ%2FO7vexVF4gBQiOhWL3ql3pa03Ulwh9o04jw4EVxGCA0UtqVWPf04srtpR2xcDq2934RgBsAy7Fp2Ar9Y9irLgADhEbDXdtxaXaaetXvAKCZv4iGhb3qYvDVptHyl1%2Bum5eGXvWb0fv3UQF%2FnEUjwF717GOAUDrckIZedQ0MDhol9qpnFwOE0mW0veoMD0oLn8uDsexVzwoGCKUNe9VJFnkeH%2FJ48GLGMUAondirTtIo8OZxe2%2BGMUAo3dirTlJgr3rmMUAoE9irTlJgr3pm8VWlTGGvOknB6lWn9GOAUCaxV52k4NZcPHgxAxgglGnsVScp%2BN1e9qqnGQOEMo696iQL9qqnFwOEsoG96iQN9qqnDwOEsoW96iQFq1edBy%2BOHl9Byib2qpMUVKX34EX2qo8OA4SybaBedf6fTFnl0tirPloMEBLB6lVfav53PtgDQgKwV310WOFFonz1qcOvbrzxvoL8SYV3AL0BEgMg0%2BFFvCpyAL%2Fbi5ieQGekW%2FQotsMAIWEievw7JZUvht%2Bc%2BtRZ80Nt6A0SWa6Mud%2FTIQq8AcQTcYTjUdGj2AoDhERSr8S6leLK7Xm3qU%2FqAM4DMAAEIEeIMEAcpNA%2FBqHuNsQScdGj2Mb%2FA%2FD%2F3GpSVs9yAAAAAElFTkSuQmCC&labelColor=green
