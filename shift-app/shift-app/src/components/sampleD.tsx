import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const SampleD = () => {
	return (
		<div>
			<ul>
				<li>
					<Fragment>sampleDページ</Fragment>
				</li>
				<li>
					<Link to="/samplea">sampleAページ</Link>
				</li>
			</ul>
		</div>
	)
}

export default SampleD
