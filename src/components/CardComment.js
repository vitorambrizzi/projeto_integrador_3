const CardComment = ({initial, name, children}) => {

    const {avatar, box, card, text, userName} = style

    return (
        <div style={card}>
            <div style={avatar}>{initial}</div>
            <div style={box}>
                <h1 style={userName}>{name}</h1>
                <p style={text}>{children}</p>
            </div>
        </div>
    )
}

const style = {
    avatar: {
        background: '#CCCCCC',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px 0 0'
    },
    
    box: {
        width: '235px'
    },

    card: {
        width: '300px',
        background: '#EEEEEE',
        display: 'flex',
        padding: '10px',
        borderRadius: '10px',
        margin: '15px'
    },

    text: {
        margin: 0
    },

    userName: {
        margin: 0,
        fontSize: '1rem'
    }
}

export default CardComment