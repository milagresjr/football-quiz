import { useNavigate } from 'react-router-dom';
import { questions } from '../../helpers/QuestionsOfSecondFase';
import Header from '../Header';
import QuestionOption from '../QuestionOption';
// import './styles.css';
import { useEffect, useState } from 'react'


const RoundTwo: React.FC = () => {

    const [indexQuestion, setIndexQuestion] = useState<number>(0);
    const [countQuestionOld, setCountQuestionOld] = useState<number[]>([]);
    const [countTotRight, setCountTotRight] = useState<number>(0);

    const navigate = useNavigate();


    let countInterval = 0;

    const verifyQuestion = (event: React.MouseEvent<HTMLButtonElement>) => {

        const target = event.target as HTMLButtonElement;
        const rightOption = questions[indexQuestion].optionRight;
        const option = target.innerHTML.substring(3);
        // console.log(option, rightOption);

        const interval = setInterval(() => {
            target.classList.toggle('yellow');
            countInterval += 1;
            if (countInterval === 6) {
                // target.classList.remove('yellow');
                clearInterval(interval);

                if (option === rightOption) {
                    // alert('RESPOSTA CERTA!');
                    setTimeout(() => {
                        target.classList.toggle('green');
                    }, 1000);

                    setTimeout(() => {

                        alert('RESPOSTA CERTA!');
                        // clearInterval()
                        target.classList.toggle('green');
                        setCountTotRight(countTotRight => countTotRight = countTotRight+1);
                        newQuestion();

                    }, 1500);



                    // newQuestion();
                } else {

                    setTimeout(() => {
                        target.classList.toggle('red');
                    }, 1000);

                    setTimeout(() => {
                        alert('RESPOSTA ERRADA!');
                        // clearInterval()
                    }, 1500);
                }

            }
        }, 500);

    }

    const newQuestion = () => {

        const numberQuestion = generateRandomNumber();

        if (countQuestionOld.includes(numberQuestion)) {

            if (!(countQuestionOld.length >= 2)) {
                newQuestion();
            } else {
                //Ir a segunda fase
                alert('Bem-vindo a segunda fase!');
                navigate('/second-fase');
            }

        } else {
            setIndexQuestion(numberQuestion);
            setCountQuestionOld(countQuestionOld => [...countQuestionOld, numberQuestion]);
        }

    }

    const generateRandomNumber = (): number => {
        return Math.floor(Math.random() * questions.length) + 0;
    }

    useEffect(() => {
        const numberAle = generateRandomNumber();
        setIndexQuestion(numberAle);

        setCountQuestionOld([numberAle])
    }, []);

    const ListQuestionsArray = [
        questions[indexQuestion].optionOne,
        questions[indexQuestion].optionTwo,
        questions[indexQuestion].optionThree,
        questions[indexQuestion].optionRight
    ];

    //Funcao que retorna um array com as posicoes em ordem aleatoria
    const shuffledArray = (array: any[]): any[] => {

        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;

    }

    const ListQuestions = shuffledArray(ListQuestionsArray);

    const letters = ['A','B','C','D'];

    return (
        <>
        <Header totRights={countTotRight} max={10} />
            <div className="container-quiz">
        {/* <h1>{countInterval}</h1> */}
        <div className="container-question">
          <h2>{questions[indexQuestion].question}</h2>
        </div>
        {
          ListQuestions.map((option, index) => (
            <QuestionOption key={index} letters={letters[index]} verifyQuestion={verifyQuestion} nameOptionQuestion={option} />
          ))
        }
      </div>

        </>
    );
}

export default RoundTwo;