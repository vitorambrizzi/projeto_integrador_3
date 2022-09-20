import './MainContainer.css'

const MainContainer = ({children}) => {
    return (
        <main id='main-container'>
            <div className='container'>
                {children}
            </div>
        </main>
    )
}

export default MainContainer