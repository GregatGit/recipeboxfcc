import React, { Component } from 'react'
import ReactModal from 'react-modal'

class MyModal extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      ingredients: [],
      value: ''
    }
   
  }
  
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleClick = () => {
    this.props.addRecipe(this.state.value)
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>{this.props.buttonOpen}</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
          <button onClick={this.handleClick} >Test</button>
          <button onClick={this.handleCloseModal}>X</button>
        </ReactModal>
      </div>
    )
  }
}

export default MyModal
