import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Recipe = (props) => {
  let myIngredients = props.ingredientsArr.map((ingredient) => {
    return (
      <li>
        {ingredient}
      </li>
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
      <ul>
        {myIngredients}
      </ul>
      <CardActions>
      <FlatButton label="Delete" />
      <FlatButton label="Edit" />
    </CardActions>
    </CardText>
  </Card>
)};

export default Recipe;