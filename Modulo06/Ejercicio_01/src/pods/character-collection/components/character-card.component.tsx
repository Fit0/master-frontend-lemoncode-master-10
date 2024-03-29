import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';;
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
    character: CharacterEntityVm;
    onOpen: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
    const { character, onOpen } = props;

    return (
        <Card>
            <CardHeader 
                title={character.name}
            />
            <CardContent>
                <div className={classes.content}>
                    <CardMedia
                        image={character.image}
                        title={character.name}
                        style={{ height: 0, paddingTop: '56.25%' }}
                    />
                    <Typography variant="subtitle1" gutterBottom>
                        {character.species}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
        <IconButton onClick={() => onOpen(character.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
        </Card>
    );
}