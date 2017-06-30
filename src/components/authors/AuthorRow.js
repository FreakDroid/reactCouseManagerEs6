import React, {PropTypes} from 'react';

const AuthorRow = ({author}) =>{
  return (
    <tr>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
    </tr>
  );
};

AuthorRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorRow;