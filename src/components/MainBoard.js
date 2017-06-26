import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from '../data/recipes.json'
import Recipe from './recipe'

class MainBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    console.log(data)
    data.forEach((recipe) => {
      this.setState(recipe)
    })
  }
  render () {
    const titles = Object.keys(this.state)
    const recipeCards = titles.map((name) => {
      return (
        <MuiThemeProvider>
          <Recipe details={name.toUpperCase()}/>          
        </MuiThemeProvider>
      )
    })
    console.log('rec',recipeCards)
    return (
      <div>
        <h1>Recipes</h1>
        {recipeCards}
      </div>
    )
  }
}

export default MainBoard
