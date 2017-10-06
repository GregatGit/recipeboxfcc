import React, { Component } from 'react'
import ReactModal from 'react-modal'

class MyModal extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
   
  }
  
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>{this.props.buttonOpen}</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>X</button>
        </ReactModal>
      </div>
    )
  }
}

export default MyModal
