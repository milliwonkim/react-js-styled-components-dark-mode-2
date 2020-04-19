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
            <S.Main>
                <Button
                  title={theme ==='light'? '일반모드로 테마 변경하기' : '다크모드로 테마 변경하기' }
                  click={toggleTheme}
                />
            </S.Main>
        </ThemeProvider>
    );
}

export default App;

const S = {};
S.Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.bgColor};
`;