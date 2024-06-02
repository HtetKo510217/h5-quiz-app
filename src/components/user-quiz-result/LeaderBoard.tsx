import * as React from 'react';
import WinnerUser from "./WinnerUser";
import Card from "./Card";
import morkData from "../../morkData.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { UserQuizResult } from '../../types/UserQuizResult';

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

    return (
        <div>
            <h1>Winner Users</h1>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <WinnerUser user={firstThreeUsers[0]} />
                </Grid>
                <Grid item container direction="row" justifyContent="space-between">
                    <Grid item>
                        <WinnerUser user={firstThreeUsers[1]} />
                    </Grid>
                    <Grid item>
                        <WinnerUser user={firstThreeUsers[2]} />
                    </Grid>
                </Grid>
            </Grid>
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
