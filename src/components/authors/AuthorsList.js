import React, {PropTypes} from 'react';
import AuthorRow from './AuthorRow';

const AuthorsList = ({Authors, deleteAuthor}) =>{
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Firts Name</th>
          <th>Last Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {Authors.map(author=>
          <AuthorRow key={author.id} author={author} deleteAuthor={deleteAuthor}/>)}
      </tbody>
    </table>
  );
};

AuthorsList.propTypes ={
  Authors: PropTypes.array.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

export default AuthorsList;