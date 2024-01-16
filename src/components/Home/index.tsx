import './styles.css';

const Home: React.FC = () => {
    return (
        <>
            <div className="containerHome">
                {/* <div className="img">
                    <h2>Logo</h2>
                </div> */}
                <div className="buttons">
                    <a href="#">Iniciar Jogo</a>
                    <a href="#">Contra-Relogio</a>
                    <a href="#">Maior Pontuacao</a>
                </div>
            </div>
        </>
    );
}

export default Home;