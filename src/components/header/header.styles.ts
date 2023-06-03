import styled from 'styled-components/native'

export const StyledHeader = {
  Header: styled.View`
    margin-top: 30px;
    align-items: center;
  `,
  Wrapper: styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `,
  CompanyName: styled.View`
    margin-left: 20px;
  `,
  Delimiter: styled.View`
    margin-top: 30px;
    height: 1px;
    background-color: ${({ theme }) => theme.primary};
    width: 100%;
  `,
}
