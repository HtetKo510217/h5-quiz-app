import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface QuestionCardProps {
    question: string;
    options: string[];
    answer: string;
    showAnswer: boolean;
    setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuestionCard({ question, options, answer, showAnswer, setShowAnswer }: QuestionCardProps) {
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [questionImage, setQuestionImage] = React.useState<string>('');
    const [optionsImages, setOptionsImages] = React.useState<string[]>([]);

    React.useEffect(() => {
        const createTextImage = (text: string) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const maxWidth = 380;
                const lineHeight = 24;

                const wrapText = (context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
                    const words = text.split(' ');
                    let line = '';
                    const lines = [];

                    for (let n = 0; n < words.length; n++) {
                        const testLine = line + words[n] + ' ';
                        const metrics = context.measureText(testLine);
                        const testWidth = metrics.width;
                        if (testWidth > maxWidth && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                        } else {
                            line = testLine;
                        }
                    }
                    lines.push(line);

                    for (let k = 0; k < lines.length; k++) {
                        context.fillText(lines[k], x, y + k * lineHeight);
                    }

                    return lines.length;
                };

                ctx.font = '18px Arial';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';

                const numberOfLines = wrapText(ctx, text, 10, 10, maxWidth, lineHeight);

                canvas.width = maxWidth + 20;
                canvas.height = numberOfLines * lineHeight + 20;

                ctx.font = '18px Arial';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'black';
                wrapText(ctx, text, 10, 10, maxWidth, lineHeight);

                return canvas.toDataURL();
            }
            return '';
        };

        setQuestionImage(createTextImage(question));
        setOptionsImages(options.map(option => createTextImage(option)));
    }, [question, options]);

    const handleSelectOption = (value: string) => () => {
        setSelectedOption(value);
        setShowAnswer(true);
    };

    return (
        <div>
            <Card sx={{ maxWidth: '100%', marginBottom: '20px', padding: '10px' }}>
                <img src={questionImage} alt="Question" style={{ maxWidth: '100%' }} />
                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {options.map((value, index) => {
                        const isCorrect = showAnswer && value === answer;
                        const isSelected = selectedOption === value;

                        return (
                            <ListItem key={value} disablePadding>
                                <ListItemButton
                                    onClick={handleSelectOption(value)}
                                    sx={{
                                        border: '1px solid',
                                        borderColor: isSelected ? 'primary.main' : 'divider',
                                        borderRadius: '8px',
                                        marginBottom: '10px',
                                        pointerEvents: showAnswer ? 'none' : 'auto',
                                    }}
                                >
                                    <img src={optionsImages[index]} alt={value} style={{ maxWidth: '95%' }} />
                                    {showAnswer && (
                                        isCorrect ? <CheckCircleIcon color="success" /> : isSelected ? <CancelIcon color="error" /> : <RadioButtonUncheckedIcon />
                                    )}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Card>
        </div>
    );
}
