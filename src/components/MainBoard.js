import React from 'react'
import data from '../data/recipes.json'
import Recipe from './recipe'
import MyModal from './MyModal'
// import Modal from './Modal'

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

  deleteRecipe = (recipeIndex) => {
    const updatedRecipes = this.state.recipes
    updatedRecipes.splice(recipeIndex, 1)
    this.setState({recipes: updatedRecipes})
    localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes))
  }

  addRecipeToState = (newRecipe) => {
    console.log(newRecipe)
  }

  componentDidMount () {
    const myData = JSON.parse(localStorage.myRecipes)
    console.log('my Data ', myData)
    this.setState({recipes: myData})
  }
  render () {
    const recipeCards = this.state.recipes.map((recipe, index) => {
      let name = Object.keys(recipe)
      return (
        <div>
          <Recipe            
            id={index.toString()}
            details={name[0].toUpperCase()}
            ingredientsArr={recipe[name]}
            deleteRecipe={() => this.deleteRecipe(index)}
          />      
        </div>
      )
    })
    console.log('rec',recipeCards)
    return (
      <div>
        <h1>Recipes</h1>
        {recipeCards}
        <div>
          <MyModal 
            buttonOpen='Add Recipe'
            addRecipe={this.addRecipeToState}
          />
        </div>
      </div>
    )
  }
}

export default MainBoard

deleteRecipeFactory = (index) => {
  return function () {
    //delete recipe with in dex
    index
  }
}

const deleteRecipe = deleteRecipeFactory(index);
<Recipe            
  id={index.toString()}
  details={name[0].toUpperCase()}
  ingredientsArr={recipe[name]}
  deleteRecipe={deleteRecipe}
/>   