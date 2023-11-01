import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const SampleD = () => {
	return (
		<div>
			<h1>sampleDページ</h1>
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
