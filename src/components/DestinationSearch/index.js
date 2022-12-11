// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'
import {each} from 'immer/dist/internal'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const results = destinationsList.filter(eachitem =>
      eachItem.name.includes(searchInput),
    )
    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          className="input-style"
        />
        <ul className="list-container">
          {results.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
