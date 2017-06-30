import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthorForm from './AuthorForm';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';

export class AuthorManagePage extends React.Component{
  constructor(props, context){
    super(props, context);
    
    this.state={
      author: Object.assign({}, props.author),
      errors:{},
      saving: false
    };
    
    this.saveAuthor = this.saveAuthor.bind(this);
    this.updateAuthorState = this.updateAuthorState.bind(this);
  }
  
  updateAuthorState(event) {
    const field = event.target.name;
    let author = this.state.author;
    author[field] = event.target.value;
    return this.setState({author: author});
  }
  
  redirect() {
    this.setState({saving: false});
    toastr.success('Author saved');
    this.context.router.push('/authors');
  }
  
  saveAuthor(event){
    event.preventDefault();
    
    this.setState({saving: true});
    
    this.props.actions.saveAuthor(this.state.author).then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    }); 
  }
  
  render(){
      return(
        <AuthorForm 
          author={this.state.author}
          onSave={this.saveAuthor}
          errors={this.state.errors}
          saving={this.state.saving}
          onChange={this.updateAuthorState}
        />
      );
  }
}

AuthorManagePage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
AuthorManagePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  
  let author = {id: '', firstName: '', lastName: ''};
  return {
    author: author
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorManagePage);