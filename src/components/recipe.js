import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

const Recipe = (props) => {
  const myIngredients = props.ingredientsArr.map((ingredient) => {
    return (
      <div>
        <TextField value={ingredient} style={style} underlineShow={false} />
        <Divider />
      </div>
    )
  })
  return (
  <Card key={props.id}>
    <CardHeader
      title={props.details}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <Paper zDepth={2}>
        {myIngredients}
      </Paper>
      <CardActions>
      <FlatButton label="Delete" onClick={props.deleteRecipe} />
      <FlatButton label="Edit" />
    </CardActions>
    </CardText>
  </Card>
)};

export default Recipe;