import {TiTick as SuccessIcon} from 'react-icons/ti'
import {CgClose as ErrorIcon} from 'react-icons/cg'
import styled from 'styled-components'

const Alert = ({children, opened, type}) => {
    return (
        <AlertBox opened={opened} type={type}>
            {type === 'success' && <SuccessIcon />}
            {type === 'error' && <ErrorIcon />}
            {children}
        </AlertBox>
    )
}

const types = {
    success: {
        background: '#c2ffb6',
        color: '#2b6c27'
    },
    error: {
        background: '#ffbfbf',
        color: '#8b0000'
    },
    warning: '#fff7bf',
    info: '#bff3ff'
}

const AlertBox = styled.div`
    display: ${props => props.opened ? 'flex' : 'none'};
    align-items: center;
    width: 100%;
    padding: 17px;
    border-radius: 8px;
    background-color: ${props => types[props.type]['background']};
    margin: 15px 0;
    & svg {
        height: 21px;
        width: 21px;
        padding-right: 10px;
        color: ${props => types[props.type]['color']};
    }
`

export default Alert