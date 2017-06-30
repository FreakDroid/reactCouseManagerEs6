import React, {PropTypes} from 'react';
import AuthorRow from './AuthorRow';

const AuthorsList = ({Authors}) =>{
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Firts Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
      {Authors.map(author=>
          <AuthorRow key={author.id} author={author} />)}
      </tbody>
    </table>
  );
};

AuthorsList.propTypes ={
  Authors: PropTypes.array.isRequired
};

export default AuthorsList;