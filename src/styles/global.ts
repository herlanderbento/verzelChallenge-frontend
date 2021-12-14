import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }

  :root {
    --background: #121414;
    --blue: #0060fe;
    --green: #04d361;
    --green-light: #26C6DA;
    --green-low: #1c2a24;
    --green-darker: #0f3924;
    --success-low: #051b0d;
    --semi-dark: #1a1b2e;
    --semi-dark-2: #212235;
    --red: #ce4a4a;
    --red-light: #eb3223;
    --red-darker: #3d1b23;
    --error: #e83f5b;
    --roxo: #BD63F9;
    --orange: #ff7a29;
    --orange-darker: #412c17;
    --orange-darkness: #593918;
    --yellow: #ffcd1e;
    --primary: #8257e5;
    --primary-darker: #28203e;
    --primary-hover: #9466ff;
    --primary-border: #6833e4;
    --primary-shape: #734bd1;
    --primary-light: #996dff;
    --gray: #e1e1e6;
    --gray-bg: #29292e;
    --card-bg: #1b1b1c;
    --text: #a8a8b3;
    --base-text: #c4c4cc;
    --support: #737380;
    --shape: #202024;
    --shape-dark: #3c3c42;
    --shape-hover: #29292e;
    --icons: #41414d;
    --attention: #fd951f;
    --borders: #323238;
    --experts: #db3a2c;
    --sign-in: #1F2729;
    --dowhile: #ff068a;
    --black: #09090a;
    --white: #fff;
    --scrollbar: #4d4d57;
    --scrollbar-background: transparent;
    --primary-gradient-top: linear-gradient(180deg,#1d1929,rgba(18,18,20,0));
    --orange-gradient-left: linear-gradient(90deg,#fd951f,rgba(253,149,31,0.25));
    --border-gradient: linear-gradient(270deg,#323238,rgba(50,50,56,0.25));
    --darker-gradient-top: linear-gradient(180deg,#202024,rgba(32,32,36,0.25));
    --darker-gradient: linear-gradient(90deg,#202024,rgba(32,32,36,0.25));
    --blue-gradient-left: linear-gradient(90deg,#29292e,rgba(41,41,46,0));
    --blue-gradient-right: linear-gradient(90deg,#202024,rgba(32,32,36,0.25));
    --menu-mobile-active: linear-gradient(90deg,#09090a,rgba(9,9,10,0));
    --font-text: 16px;
    --card-height: 40vw;
    --card-margin: 4vw;
    --card-top-offset: 1em;
    --numcards: 4;
    --outline-width: 0px;

    --primary-font: "Roboto", sans-serif;
    --secondary-font: "Rubik", sans-serif;
    --third-font: 'Playfair Display', sans-serif !important;
}

  html, body{
    font-size: 14px;
    background: var(--background);
    font-family: 'Roboto', sans-serif;
    color: var(--text);
  }
  /* Start adding margin */
.my-0,
.m-0,
.mt-0 {
    margin-top: 0px !important;
}
.my-10,
.m-10,
.mt-10 {
    margin-top: 10px !important;
}
.my-20,
.m-20,
.mt-20 {
    margin-top: 20px !important;
}
.my-30,
.m-30,
.mt-30 {
    margin-top: 30px !important;
}
.my-40,
.m-40,
.mt-40 {
    margin-top: 40px !important;
}
.my-50,
.m-50,
.mt-50 {
    margin-top: 50px !important;
}
.my-auto,
.m-auto,
.mt-auto {
    margin-top: auto !important;
}
.mx-0,
.m-0,
.mr-0 {
    margin-right: 0px !important;
}
.mx-10,
.m-10,
.mr-10 {
    margin-right: 10px !important;
}
.mx-20,
.m-20,
.mr-20 {
    margin-right: 20px !important;
}
.mx-30,
.m-30,
.mr-30 {
    margin-right: 30px !important;
}
.mx-40,
.m-40,
.mr-40 {
    margin-right: 40px !important;
}
.mx-50,
.m-50,
.mr-50 {
    margin-right: 50px !important;
}
.mx-auto,
.m-auto,
.mr-auto {
    margin-right: auto !important;
}
.my-0,
.m-0,
.mb-0 {
    margin-bottom: 0px !important;
}
.my-10,
.m-10,
.mb-10 {
    margin-bottom: 10px !important;
}
.my-20,
.m-20,
.mb-20 {
    margin-bottom: 20px !important;
}
.my-30,
.m-30,
.mb-30 {
    margin-bottom: 30px !important;
}
.my-40,
.m-40,
.mb-40 {
    margin-bottom: 40px !important;
}
.my-50,
.m-50,
.mb-50 {
    margin-bottom: 50px !important;
}
.my-auto,
.m-auto,
.mb-auto {
    margin-bottom: auto !important;
}
.mx-0,
.m-0,
.ml-0 {
    margin-left: 0px !important;
}
.mx-10,
.m-10,
.ml-10 {
    margin-left: 10px !important;
}
.mx-20,
.m-20,
.ml-20 {
    margin-left: 20px !important;
}
.mx-30,
.m-30,
.ml-30 {
    margin-left: 30px !important;
}
.mx-40,
.m-40,
.ml-40 {
    margin-left: 40px !important;
}
.mx-50,
.m-50,
.ml-50 {
    margin-left: 50px !important;
}
.mx-auto,
.m-auto,
.ml-auto {
    margin-left: auto !important;
}
/* end adding margin */
/* Start adding padding */
.py-0,
.p-0,
.pt-0 {
    padding-top: 0px !important;
}
.py-10,
.p-10,
.pt-10 {
    padding-top: 10px !important;
}
.py-20,
.p-20,
.pt-20 {
    padding-top: 20px !important;
}
.py-30,
.p-30,
.pt-30 {
    padding-top: 30px !important;
}
.py-40,
.p-40,
.pt-40 {
    padding-top: 40px !important;
}
.py-50,
.p-50,
.pt-50 {
    padding-top: 50px !important;
}
.py-auto,
.p-auto,
.pt-auto {
    padding-top: auto !important;
}
.px-0,
.p-0,
.pr-0 {
    padding-right: 0px !important;
}
.px-10,
.p-10,
.pr-10 {
    padding-right: 10px !important;
}
.px-20,
.p-20,
.pr-20 {
    padding-right: 20px !important;
}
.px-30,
.p-30,
.pr-30 {
    padding-right: 30px !important;
}
.px-40,
.p-40,
.pr-40 {
    padding-right: 40px !important;
}
.px-50,
.p-50,
.pr-50 {
    padding-right: 50px !important;
}
.px-auto,
.p-auto,
.pr-auto {
    padding-right: auto !important;
}
.py-0,
.p-0,
.pb-0 {
    padding-bottom: 0px !important;
}
.py-10,
.p-10,
.pb-10 {
    padding-bottom: 10px !important;
}
.py-20,
.p-20,
.pb-20 {
    padding-bottom: 20px !important;
}
.py-30,
.p-30,
.pb-30 {
    padding-bottom: 30px !important;
}
.py-40,
.p-40,
.pb-40 {
    padding-bottom: 40px !important;
}
.py-50,
.p-50,
.pb-50 {
    padding-bottom: 50px !important;
}
.py-auto,
.p-auto,
.pb-auto {
    padding-bottom: auto !important;
}
.px-0,
.p-0,
.pl-0 {
    padding-left: 0px !important;
}
.px-10,
.p-10,
.pl-10 {
    padding-left: 10px !important;
}
.px-20,
.p-20,
.pl-20 {
    padding-left: 20px !important;
}
.px-30,
.p-30,
.pl-30 {
    padding-left: 30px !important;
}
.px-40,
.p-40,
.pl-40 {
    padding-left: 40px !important;
}
.px-50,
.p-50,
.pl-50 {
    padding-left: 50px !important;
}
.px-auto,
.p-auto,
.pl-auto {
    padding-left: auto !important;
}
 
`;
