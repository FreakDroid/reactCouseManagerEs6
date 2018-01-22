import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthorsList from './AuthorsList';
import * as authorActions from '../../actions/authorActions';
import {browserHistory} from 'react-router'; 
import toastr from 'toastr';

class AuthorsPage extends React.Component{
  constructor(props, context){
    super(props, context);
    
    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }
  
  redirectToAddAuthorPage(){
    browserHistory.push('/author');
  }
  redirect(){
    browserHistory.push('/authors');
  }
  
  deleteAuthor(author){
    this.props.actions.deleteAuthor(author).then(()=> this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
  }
  
  render(){
    const authors = this.props.authors;
    return(
      <div>
        <h1>Authors</h1>
        <input type="submit"
        value="Add Author"
        className="btn btn-primary"
        onClick={this.redirectToAddAuthorPage} />
        <AuthorsList Authors={authors} deleteAuthor={this.deleteAuthor}/>
      </div>
    );
  }
}


AuthorsPage.propTypes ={
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);