import {Link} from 'react-router-dom'

const CardComment = ({avatarUrl, name, children, id}) => {

    const {avatar, box, card, text, userName} = style

    return (
//      <Link to={'/user/' + id}>
        <Link to={`/user/${id}`}>
            <div style={card}>
{
//              <img src={avatarUrl} style={avatar} alt={'Picture of ' + name}/>
}
                <img src={avatarUrl} style={avatar} alt={`Picture of ${name}`}/>
                <div style={box}>
                    <h1 style={userName}>{name}</h1>
                    <p style={text}>{children}</p>
                </div>
            </div>
        </Link>
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