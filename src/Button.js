import React from 'react';
import styled from 'styled-components';

import Switch from '@material-ui/core/Switch';

function Button({title, click}) {

    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
      <>
        <ButtonColor><h1>LIGHT</h1></ButtonColor>
          <S.Button 
            onClick={click}
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          >
              <h1>{title}</h1>
          </S.Button>
        <ButtonColor><h1>DARK</h1></ButtonColor>
      </>
    );
};

export default Button;

// ----------------------------------------------

const ButtonColor = styled.div`
  color: ${props => props.theme.colors.titleColor};  ${'' /* 테마 변경 컬러 지정 */}
`;

const S = {};

S.Button = styled(Switch)`
  margin: 25px 10px 0 10px;
  width: 300px;
  height: 70px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  span{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;