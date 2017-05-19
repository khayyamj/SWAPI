import React from 'react'
import PropTypes from 'prop-types'

const ProfileCard = (props) => {
  let [name, birthYear, homeworld, image] = props
  console.log(props)
  return (
    <div className='profile-card'>
      <img src={image || `../images/blank-profile.jpg`} />
      <h3>Name: {name}</h3>
      <h4>Born: {birthYear}</h4>
      <h4>Planet: {homeworld}</h4>
    </div>
  )
}
ProfileCard.PropTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired
}
export default ProfileCard
