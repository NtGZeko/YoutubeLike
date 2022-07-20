import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --primary-color: #1F203E;
  --secondary-color: #726395;
  --tertiary-color: #2D2E46;
  --hover-color: #31295C;
  --font-family: 'Lato', sans-serif;
  --white: #F8F8FF;
  background-color: var(--primary-color);
}  
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
  color: var(--white);
}
h1{
  font-size: 2em;
  font-weight: bolder;
}
h2{
  font-size: 1.5em;
  font-weight: bolder;
}
h3{
  font-size: 1.17em;
  font-weight: bolder;
}
h4{
  font-size: 1em;
  font-weight: bolder;
}
h5{
font-size: .83em;
font-weight: bolder;
}
h6{
  font-size: .67em;
  font-weight: bolder;
}
main{
  margin-top: 5vh;
  margin-left: 15%;
}
@media screen and (max-width: 700px) {
    width: 90vw;
}
 `;
export default GlobalStyle;
