import React from 'react';
import Button from "./Button";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { dark, light} from "./theme";
import { useTheme } from "./useTheme"; // 환경별 테마 정보 가져오기

function App() {

    const [themeMode, toggleTheme] = useTheme();
    const theme = themeMode === 'light' ? light : dark;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Main>
            <Nav>
              <Button
                title={theme === light ? '일반모드로 테마 변경하기' : '다크모드로 테마 변경하기' }
                click={toggleTheme}
              />
            </Nav>
            <Div2>
              <Div><h3>Instagram founders launch COVID-19 dashboard tracking how fast the virus is growing in each state</h3></Div>
              <Div><h3>iPhone SE vs iPhone XR comparison: Which should you buy?</h3></Div>
              <Div><h3>Making the Grade: How do you choose between iPad, Chromebook, and laptop?</h3></Div>
              <Div><h3>Early hands-on videos provide close-up look at new Magic Keyboard with trackpad for iPad Pro</h3></Div>
              <Div><h3>iPhone SE shipping times slip beyond April 24 launch day delivery and into May</h3></Div>
              <Div><h3>Instagram founders launch COVID-19 dashboard tracking how fast the virus is growing in each state</h3></Div>
              <Div><h3>iPhone SE vs iPhone XR comparison: Which should you buy?</h3></Div>
              <Div><h3>Making the Grade: How do you choose between iPad, Chromebook, and laptop?</h3></Div>
              <Div><h3>Early hands-on videos provide close-up look at new Magic Keyboard with trackpad for iPad Pro</h3></Div>
              <Div><h3>iPhone SE shipping times slip beyond April 24 launch day delivery and into May</h3></Div>
              <Div><h3>Instagram founders launch COVID-19 dashboard tracking how fast the virus is growing in each state</h3></Div>
              <Div><h3>iPhone SE vs iPhone XR comparison: Which should you buy?</h3></Div>
              <Div><h3>Making the Grade: How do you choose between iPad, Chromebook, and laptop?</h3></Div>
              <Div><h3>Early hands-on videos provide close-up look at new Magic Keyboard with trackpad for iPad Pro</h3></Div>
              <Div><h3>iPhone SE shipping times slip beyond April 24 launch day delivery and into May</h3></Div>
              <Div><h3>Instagram founders launch COVID-19 dashboard tracking how fast the virus is growing in each state</h3></Div>
              <Div><h3>iPhone SE vs iPhone XR comparison: Which should you buy?</h3></Div>
              <Div><h3>Making the Grade: How do you choose between iPad, Chromebook, and laptop?</h3></Div>
              <Div><h3>Early hands-on videos provide close-up look at new Magic Keyboard with trackpad for iPad Pro</h3></Div>
              <Div><h3>iPhone SE shipping times slip beyond April 24 launch day delivery and into May</h3></Div>
              <Div><h3>Instagram founders launch COVID-19 dashboard tracking how fast the virus is growing in each state</h3></Div>
              <Div><h3>iPhone SE vs iPhone XR comparison: Which should you buy?</h3></Div>
              <Div><h3>Making the Grade: How do you choose between iPad, Chromebook, and laptop?</h3></Div>
              <Div><h3>Early hands-on videos provide close-up look at new Magic Keyboard with trackpad for iPad Pro</h3></Div>
              <Div><h3>iPhone SE shipping times slip beyond April 24 launch day delivery and into May</h3></Div>
              <Div><h3>Instagram founders launch COVID-19 dashboard tracking how fast the virus is growing in each state</h3></Div>
              <Div><h3>iPhone SE vs iPhone XR comparison: Which should you buy?</h3></Div>
              <Div><h3>Making the Grade: How do you choose between iPad, Chromebook, and laptop?</h3></Div>
              <Div><h3>Early hands-on videos provide close-up look at new Magic Keyboard with trackpad for iPad Pro</h3></Div>
              <Div><h3>iPhone SE shipping times slip beyond April 24 launch day delivery and into May</h3></Div>
            </Div2>
          </Main>
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Oswald', sans-serif;
  }
`;

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  justify-content: center;
  ${'' /* align-items: center; */}
  background-color: ${props => props.theme.colors.bgColor};
`;

const Div = styled.div`
  positon: absolute;
  margin: 10px 0;
  font-family: 'Roboto Mono', monospace;
  max-width: 600px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 5px solid ${props => props.theme.colors.titleColor}; ${'' /* 테마 변경 컬러 지정 */}
  color: ${props => props.theme.colors.titleColor}; ${'' /* 테마 변경 컬러 지정 */}
`;

const Div2 = styled.div`
  display: flex;
  position: relative;
  align-self: flex-start;
  z-index: 1;
  top: 50px;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Nav = styled.div`
  z-index: 2;
  max-width: 620px;
  display: flex;
  position: sticky;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.navColor}; ${'' /* 테마 변경 컬러 지정 */}
  border: 8px solid ${props => props.theme.colors.titleColor}; ${'' /* 테마 변경 컬러 지정 */}
  top: 0;
  margin: 0 auto;
  justify-content: center;
`;