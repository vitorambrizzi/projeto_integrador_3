import styled from 'styled-components'
import Loader from './Loader'

const ButtonLoading = ({type = 'button', onClick, isLoading, children}) => {
    return (
        <LoadingButton onClick={onClick} type={type} disabled={isLoading}>
            {children}
            {isLoading && <Loader />}
        </LoadingButton>
    )
}

const LoadingButton = styled.button`
    position: relative;
    background-color: #fd8d5c;
    color: #ffffff;
    border-radius: 10px;
    font-weight: bold;
    padding: 5px 20px;
    height: 35px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #c13a00;
    }
    &:disabled {
        background-color: #fd8d5c;
        color: #fd8d5c;
        cursor: default;
    }
`

export default ButtonLoading