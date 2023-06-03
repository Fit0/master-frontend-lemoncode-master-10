import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Card>
          <CardHeader title={character.name} />
          <CardContent>
            <div className={classes.content}>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{ height: 0, paddingTop: '56.25%' }}
              />
              <Typography variant="subtitle1" gutterBottom>
                Estado: {character.status}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Especie: {character.species}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Tipo: {character.type}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Género: {character.gender}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Fecha creación: {character.created}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
