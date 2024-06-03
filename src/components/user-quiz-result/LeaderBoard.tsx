import * as React from 'react';
import WinnerUser from "./WinnerUser";
import Card from "./Card";
import morkData from "../../morkData.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { UserQuizResult } from '../../types/Quiz';
import WeeklyMonthlySwitch from './WeeklyMonthlySwitch';
import NavBar from './NavBar';
export default function LeaderBoard() {
    const [usersQuizResult, setUsersQuizResult] = React.useState<UserQuizResult[]>([]);

    React.useEffect(() => {
        setUsersQuizResult(morkData.users_quiz_result);
    }, []);

    const getFirstThreeUsers = () => {
        return usersQuizResult.slice(0, 3);
    };

    const getRemainingUsers = () => {
        return usersQuizResult.slice(3);
    };

    const firstThreeUsers = getFirstThreeUsers();
    const remainingUsers = getRemainingUsers();

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        background: '#6A5AE0',
        paddingBottom:'60px',
    };
    const containerAfterStyle: React.CSSProperties = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#FFF',
        clipPath: 'ellipse(52% 2.8rem at bottom center)',
      };
      
    return (
        <div>
            <div className='container' style={containerStyle}>
                <NavBar />
                <WeeklyMonthlySwitch />
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <WinnerUser user={firstThreeUsers[0]} />
                    </Grid>
                    <Grid item container direction="row" justifyContent="space-between" sx={{ px: 2 }}>
                        <Grid item>
                            <WinnerUser user={firstThreeUsers[1]} />
                        </Grid>
                        <Grid item>
                            <WinnerUser user={firstThreeUsers[2]} />
                        </Grid>
                    </Grid>
                </Grid>
                <div className='container-after' style={containerAfterStyle} />
            </div>
            <List>
                {remainingUsers.map(user => (
                    <ListItem key={user.id}>
                        <Card user={user} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
