
interface IQuestion {
    question: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;
    optionRight: string;
}

export const questions: IQuestion[] = [
    {
        question: 'Qual clube venceu a liga dos campeões da UEFA na temporada 2020-2021 ?',
        optionOne: 'Bayer de Munique',
        optionTwo: 'Real Madrid',
        optionThree: 'Manchester City',
        optionRight: 'Chelsea',
    },
    {
        question: 'Quem foi o artilheiro da Premier League na temporada 2020-2021 ?',
        optionOne: 'Bruno Fernandes',
        optionTwo: 'Cristiano Ronaldo',
        optionThree: 'Harry Kane',
        optionRight: 'Mohamed Salah',
    },
    {
        question: 'Qual seleção venceu a Eurocopa-2020 (realizada em 2021) ?',
        optionOne: 'Inglaterra',
        optionTwo: 'França',
        optionThree: 'Portugal',
        optionRight: 'Itália',
    },
    {
        question: 'Quem foi eleito o melhor jogador do mundo pela FIFA em 2021 ?',
        optionOne: 'Lionel Messi',
        optionTwo: 'Cristiano Ronaldo',
        optionThree: 'Kylian Mbappé',
        optionRight: 'Robert Lewandowski',
    },
    {
        question: 'Quem é o jogador com mais golos marcados pela seleção ?',
        optionOne: 'Leonel Messi',
        optionTwo: 'RObert Lewandowski',
        optionThree: 'Platini',
        optionRight: 'Cristiano Ronaldo',
    }

];
