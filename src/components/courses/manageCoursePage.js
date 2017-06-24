import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class manageCoursePage extends React.Component{
  constructor(props, context){
      super(props, context);
      this.state = {
        course: Object.assign({}, this.props.course),
        errors: {}
      };
      this.updateCourseState = this.updateCourseState.bind(this);
  }
  
  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  
  render(){
    return(
        <CourseForm 
          course={this.state.course} 
          onChange={this.updateCourseState}
          errors={this.state.errors}
          allAuthors={this.props.authors}
        />
    );
  }
}

manageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  const authorsFormated = state.authors.map(author => {
    return({
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    });
  });
  
  return ({
    course: course,
    authors: authorsFormated
  });
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(manageCoursePage);