import React, {
	Component
}
from 'react';
import ProjectItem from './ProjectItem';

class AddProjects extends React.Component {

		constructor() {
			super();
			this.state = {
				newProject: {}
			}
		}

		static defaultProps = {
			categories: ['Tutorials', 'Challenges', 'Assignments']
		}
		handleSubmit(e) {
			if (this.refs.title.value === '') {
				alert('You cannot submit with an empty Title');
			} else {
				this.setState({
					newProject: {
						title: this.refs.title.value,
						category: this.refs.category.value
					}
				}, function() {
					console.log(this.state);
				});
			}
			e.preventDefault();
		}
		render() {
			let categoryOptions = this.props.categories.map(category => {
					return <option key = {category} value = "category"> {
						{category} </option>
					});
				return ( 
					<div>
						<h3>Add Projects</h3>   
						<form onSubmit = {this.handleSubmit.bind(this)} 
							<div>
								<label>Title</label><br/>
								<input type = "text" ref = "title"/>
							</div><br/>
								<div>
									<label>Category</label><br/>
									<select ref = "category"> {categoryOptions} 
									</select>  
								</div>  <br/>
									<input type = "submit" value = "Submit"/> <br/>
						</form><br/>
					</div>
				);
			}
		}

		export default AddProjects;
