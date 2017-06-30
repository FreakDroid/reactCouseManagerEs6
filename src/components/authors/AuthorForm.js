import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const AuthorForm = ({author, onSave, errors, saving, onChange}) =>{
  return(
    <form>
      <h1>Author Manage</h1>
      <TextInput
        name="firstName"
        label="First name"
        value={author.firstName}
        onChange={onChange}
        error={errors.firstName}/>
        
     <TextInput
          name="lastName"
          label="Last Name"
          value={author.lastName}
          onChange={onChange}
          error={errors.lastName}/>
          
      <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={onSave}/>
    </form>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default AuthorForm;
