import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorRow = ({author, deleteAuthor}) =>{
  return (
    <tr>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td><Link to={'/author/' + author.id}>Edit</Link></td>
      <td>
      <button onClick={deleteAuthor.bind(this, author)} className="btn btn-danger">
        Delete
      </button>
      </td>
        
        
    </tr>
  );
};

AuthorRow.propTypes = {
  author: PropTypes.object.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

export default AuthorRow;