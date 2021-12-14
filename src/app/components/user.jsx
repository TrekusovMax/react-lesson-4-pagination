import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'
import PropTypes from 'prop-types'

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  handleDelete,
  handleToggleBookMark,
  favorite
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((q) => (
          <Qualitie name={q.name} color={q.color} key={q._id} _id={q._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark
          status={favorite}
          handleToggleBookMark={() => handleToggleBookMark(_id)}
        />
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
  favorite: PropTypes.bool
}
export default User
