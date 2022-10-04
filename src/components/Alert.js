import {TiTick} from 'react-icons/ti'
import {CgClose} from 'react-icons/cg'
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
    success: '#c2ffb6',
    error: '#ffbfbf',
    warning: '#fff7bf',
    info: '#bff3ff'
}

const AlertBox = styled.div`
    display: ${props => props.opened ? 'block' : 'none'};
    width: 100%;
    padding: 17px;
    border-radius: 8px;
    background-color: ${props => types[props.type]};
    margin: 15px 0;
`

const SuccessIcon = styled(TiTick)`
    height: 15px;
    width: 15px;
    color: darkgreen;
`

const ErrorIcon = styled(CgClose)`
    height: 15px;
    width: 15px;
    color: darkred;
`

export default Alert