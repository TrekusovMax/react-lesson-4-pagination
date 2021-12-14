import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ status, ...rest }) => {
  return (
    <button
      className={
        'btn border border-1 border-secondary btn-sm bi ' +
        (status === true ? 'bi-bookmark-fill' : 'bi-bookmark')
      }
      onClick={() => rest.handleToggleBookMark()}
    ></button>
  )
}

Bookmark.propTypes = {
  status: PropTypes.bool
}

export default Bookmark
