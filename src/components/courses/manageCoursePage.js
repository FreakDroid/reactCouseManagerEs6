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
      this.saveCourse = this.saveCourse.bind(this);
  }
  
  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  
  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push("/courses");
  }
  
  render(){
    return(
        <CourseForm 
          course={this.state.course} 
          onChange={this.updateCourseState}
          errors={this.state.errors}
          onSave={this.saveCourse}
          allAuthors={this.props.authors}
        />
    );
  }
}

manageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

manageCoursePage.contextTypes={
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if(course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id; //This id came from react Router
  
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  
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