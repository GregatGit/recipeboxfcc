import React from 'react'
import data from '../data/recipes.json'
import Recipe from './recipe'

class MainBoard extends React.Component {
  constructor (props) {
    super(props)

    if (localStorage['myRecipes']){
      console.log('recipes in local')
    }else{
      console.log('loading local storage')
      localStorage.setItem('myRecipes', JSON.stringify(data))
    }
    this.state = {
      recipes: []
    }
  }

  addRecipeToState = (newRecipe) => {
    
  }

  componentDidMount () {
    const myData = JSON.parse(localStorage.myRecipes)
    console.log('my Data ', myData)
    this.setState({recipes: myData})
  }
  render () {
    const titles1 = Object.keys(this.state.recipes)
    const recipeCards = this.state.recipes.map((recipe) => {
      let name = Object.keys(recipe)
      return (
        <div>
          <Recipe 
            details={name[0].toUpperCase()}
            ingredientsArr={recipe[name]}
          />          
        </div>
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
