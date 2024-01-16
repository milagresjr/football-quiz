import './styles.css';

interface Props {
    verifyQuestion: (event: React.MouseEvent<HTMLButtonElement>) => void;
    nameOptionQuestion: string;
    letters: string;
}

const QuestionOption: React.FC<Props> = ({verifyQuestion,nameOptionQuestion, letters}: Props) => {
  return (
        <>
            <div>
                <button onClick={verifyQuestion}>
                {letters}- {nameOptionQuestion}
                </button>
            </div>
        </>
  );
}

export default QuestionOption;