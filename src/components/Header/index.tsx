import './styles.css';

interface Props {
    totRights: number;
    max: number;
}

const Header: React.FC<Props> = ({totRights, max}:Props) => {
    return (
        <>
            <h3>Pontuação: {totRights} / {max}</h3>
        </>
    );
};

export default Header;