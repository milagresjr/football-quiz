
interface IQuestion {
    question: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;
    optionRight: string;
}

export const questions: IQuestion[] = [
    {
        question: 'Quem é o camisa 19 do Real Madrid ?',
        optionOne: 'Camavinga',
        optionTwo: 'Brahim',
        optionThree: 'Bellingham',
        optionRight: 'Ceballos',
    },
    {
        question: 'Qual é a cor da segunda camisa do Real Madrid ?',
        optionOne: 'Branca',
        optionTwo: 'Verde',
        optionThree: 'Castanha',
        optionRight: 'Preta',
    },
    {
        question: 'Quantas UCL tem o Real Madrid ?',
        optionOne: '13',
        optionTwo: '15',
        optionThree: '12',
        optionRight: '14',
    },
    {
        question: 'Qual equipa jogava Jude Bellingham antes do Real Madrid ?',
        optionOne: 'Chelsea',
        optionTwo: 'Bayer Munchen',
        optionThree: 'Ajax',
        optionRight: 'Dortmund',
    },
    {
        question: 'Qual é o clube com mais liga dos campeões da história ?',
        optionOne: 'AC Milan',
        optionTwo: 'Bayer Munchen',
        optionThree: 'Barcelona',
        optionRight: 'Real Madrid',
    }

];
