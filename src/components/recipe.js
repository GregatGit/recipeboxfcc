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
  let myIngredients = props.ingredientsArr.map((ingredient) => {
    return (
      <TextField value={ingredient} style={style} underlineShow={false} />
    )
  })
  return (
  <Card>
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
      <FlatButton label="Delete" />
      <FlatButton label="Edit" />
    </CardActions>
    </CardText>
  </Card>
)};

export default Recipe;