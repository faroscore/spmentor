import React from "react";

import "./blank.sass"

class BlankView extends React.Component {
	render() {
		let {
			company,
			date,
			director_name,
			director_role,
			email,
			initials,
			parsedName,
			role,
			section
		} = this.props;
		return (
			<div className="blank">
				<div className="header">
					{director_role} {company}
					<br/> {director_name}
					<br/>
					от {parsedName}
				</div>
				<h1 className="title">Заявление</h1>
				<p>Прошу принять меня на работу в {section} {company} на должность {role} с {date}.</p>
				<div className="sign"></div>
				<p>{initials}</p>
				<br/>
				<span>Email для связи: {email}</span>
			</div>

		)
	}
}

export default BlankView;