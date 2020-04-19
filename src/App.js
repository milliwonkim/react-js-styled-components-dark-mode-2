import React, { useState } from 'react';
import Button from "./Button";
import styled, { ThemeProvider } from 'styled-components';
import { dark, light } from "./theme"; // 환경별 테마 정보 가져오기

function App() {
    const [themeMode, setThemeMode] = useState('light'); // 테마 모드 세팅
    const theme = themeMode === 'light' ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.

    const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // 테마 변경하기 이벤트

    return (
        <ThemeProvider theme={theme}>
          <Main>
            <Div3>
              <Button
                title={theme === light ? '일반모드로 테마 변경하기' : '다크모드로 테마 변경하기' }
                click={toggleTheme}
              />
            </Div3>
            <Div2>
              <Div><h3>1</h3></Div>
              <Div><h3>2</h3></Div>
              <Div><h3>3</h3></Div>
              <Div><h3>4</h3></Div>
              <Div><h3>5</h3></Div>
              <Div><h3>6</h3></Div>
              <Div><h3>7</h3></Div>
              <Div><h3>8</h3></Div>
            </Div2>
          </Main>
        </ThemeProvider>
    );
}

export default App;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  justify-content: center;
  ${'' /* align-items: center; */}
  background-color: ${props => props.theme.colors.bgColor};
`;

const Div = styled.div`
  margin: 10px 0;
  width: 50vw;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 5px solid ${props => props.theme.colors.titleColor}; ${'' /* 테마 변경 컬러 지정 */}
  color: ${props => props.theme.colors.titleColor}; ${'' /* 테마 변경 컬러 지정 */}
`;

const Div2 = styled.div`
  display: flex;
  margin: 250px 0 0 0;
  ${'' /* width: 50vw; */}
  height: 50vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Div3 = styled.div`
  display: flex;
  position: sticky;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.navColor}; ${'' /* 테마 변경 컬러 지정 */}
  border: 8px solid ${props => props.theme.colors.titleColor}; ${'' /* 테마 변경 컬러 지정 */}
  top: 0;
  margin: 5px 5px 0 5px;
  justify-content: center;

`;