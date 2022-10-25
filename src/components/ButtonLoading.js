import styled, {keyframes} from 'styled-components'
import {BiLoaderAlt} from 'react-icons/bi'

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
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const Loader = styled(BiLoaderAlt)`
    color: #ffffff;
    animation: ${rotate} 0.5s linear infinite;
    width: 24px;
    height: 24px;
    position: absolute;
    left: calc(50% - 12px);
    top: calc(50% - 12px);
`

export default ButtonLoading