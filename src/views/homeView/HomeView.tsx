import './HomeView.css'
export const HomeView = () => {
    return (
        <div className='HomeViewWrapper'>
            <button className='buttonOne'>LOGGA IN</button>

            <div className='CreateAccount'>
                <span>INTE MEDLEM? SKAPA GRATIS KONTO HÄR</span></div>

            <br /><button className='buttonTwo'>VÄLJ TRÄNINGSFORM</button>

            <button className='buttonThree'>FAQ</button>
        </div>
    )
}
