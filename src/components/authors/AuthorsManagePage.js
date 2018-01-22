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
  
  componentWillReceiveProps(nextProps) {
    if (this.props.author.id != nextProps.author.id) {
      const author = Object.assign({}, nextProps.author);
      this.setState({author }); // fíjate que habías escrito 'authors'
    }
  }
  
  updateAuthorState(event) {
    // const field = event.target.name;
    // let author = this.state.author;
    // author[field] = event.target.value;
    // return this.setState({author: author});
    
    const hasSubField = event.target.name.split('.');
    if (hasSubField.length > 1) {
      let author = this.state.author;
      author[hasSubField[0]][hasSubField[1]] = event.target.value;
      return this.setState({author:author});
    }
    // else if(hasSubField.length > 2){
    //     // let user = this.state.user;
    //     // user.address.geo.lat = event.target.value;
    //     // return this.setState({user:user});
    //     
    //     
    //     let user = Object.assign({}, this.state.user);
    //     user.address.geo.lat = event.target.value;
    //     return this.setState({user:user});
    // 
    // }
    else {
      const field = event.target.name;
      let author = this.state.user;
      author[field] = event.target.value;
      return this.setState({author:author });
    }
  }
  
  redirect() {
    this.setState({saving: false});
    toastr.success('Author saved');
    this.context.router.push('/authors');
  }
  
  saveAuthor(event){
    event.preventDefault();
    
    this.setState({saving: true});
    const autor = Object.assign({}, this.state.author); 
    this.props.actions.saveAuthor(autor).then(() => this.redirect())
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

function getAuthor(authors, authorId){
  const author = authors.filter(author => author.id === authorId);
  if(author.length) return author[0];
  return null;
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
  let authorId = ownProps.params.id;
  
  let author = {id: '', firstName: '', lastName: '', address: { city: ''}};
  
  if (authorId && state.authors.length > 0) {
      author = getAuthor(state.authors, authorId);
  }

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