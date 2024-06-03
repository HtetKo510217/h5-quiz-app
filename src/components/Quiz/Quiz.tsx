import * as React from 'react';
import morkData from "../../morkData.json";
import QuestionCard from './QuestionCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { QuizData } from '../../types/Quiz';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Quiz() {
    const [quiz, setQuiz] = React.useState<QuizData>(morkData.quiz);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [showAnswer, setShowAnswer] = React.useState(false);

    React.useEffect(() => {
        setQuiz(morkData.quiz);
    }, []);

    const handleNextQuestion = () => {
        setShowAnswer(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const questionKeys = Object.keys(quiz) as Array<keyof QuizData>;
    const currentQuestionKey = questionKeys[currentQuestionIndex];
    const currentQuestion = quiz[currentQuestionKey];

    if (!currentQuestion) {
        return <div>Quiz Completed!</div>;
    }

    const progress = ((currentQuestionIndex + 1) / questionKeys.length) * 100;

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Card sx={{ padding: '20px', maxWidth: '400px', textAlign: 'center', boxShadow: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
                    <Typography variant="h6" component="div" sx={{ color: '#05A43C' }}>
                        {currentQuestionIndex < 9 ? `0${currentQuestionIndex + 1}` : currentQuestionIndex + 1}
                    </Typography>
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={progress} size={60} thickness={4} />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography variant="h6" component="div" color="textPrimary">
                                {currentQuestionIndex + 1}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ color: '#E36D2F' }}>
                        {currentQuestionIndex < questionKeys.length - 1 ? `0${currentQuestionIndex + 2}` : questionKeys.length}
                    </Typography>
                </Box>
                <Typography variant="h5" component="div" sx={{ margin: '20px 0', color: '#A42FC1' }}>
                    Question {currentQuestionIndex + 1}/{questionKeys.length}
                </Typography>
                <QuestionCard
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    answer={currentQuestion.answer}
                    showAnswer={showAnswer}
                    setShowAnswer={setShowAnswer}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextQuestion}
                    disabled={!showAnswer}
                    sx={{ marginTop: '20px' }}
                >
                    Next Question
                </Button>
            </Card>
        </Box>
    );
}
