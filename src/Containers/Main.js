import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './Main.scss'

import ProfileCard from '../Components/profile_card'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      birthYear: '',
      homeworld: '',
      image: ''
    }
  }
  componentDidMount () {
    axios.get(`http://swapi.co/api/people/1/`)
    .then(response => {
      console.log(response.data)
      this.setState({
        name: response.data.name,
        birthYear: response.data.birth_year
      })
      axios.get(response.data.homeworld)
      .then(response => {
        console.log('Planet data: ', response.data)
        this.setState({ homeworld: response.data.name })
      })
    })
  }
  render () {
    console.log('State: ', this.state)
    return (
      <div className='swapi-page-container'>
        <h1>Welcome</h1>
        <p>to</p>
        <div className='star-wars-logo' />
        <div className='swapi-begin-button'>Begin</div>
        <ProfileCard
          profile={{
            name: this.state.name,
            birthYear: this.state.birth_year,
            homeworld: this.state.homeworld,
            image: this.state.image
          }}
        />
      </div>
    )
  }
}
Main.propTypes = {
  name: PropTypes.string,
  birthYear: PropTypes.string,
  homeworld: PropTypes.string,
  image: PropTypes.string
}
export default Main
