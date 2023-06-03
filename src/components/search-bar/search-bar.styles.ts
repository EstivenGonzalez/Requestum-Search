import styled from 'styled-components/native'

export const StyledSearchBar = {
  SearchBar: styled.TextInput`
    height: 44px;
    padding-left: 13px;
    padding-right: 46px;
    border-radius: 22px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    font-size: 15px;
  `,
  Loader: styled.ActivityIndicator`
    position: absolute;
    right: 12px;
    top: 12px;
  `,
}
