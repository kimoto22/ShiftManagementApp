import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const buttonContainerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh'
}

const largeButtonStyle = {
	width: '200px',
	height: '60px',
	margin: '10px'
}

export const Login: React.FC = () => {
	return (
		<div style={buttonContainerStyle}>
			<div>
				<Link to="/sampleB">
					<Button variant="info" style={largeButtonStyle}>
						Go to Sample B
					</Button>
				</Link>
				<Link to="/sampleC">
					<Button variant="warning" style={largeButtonStyle}>
						Go to Sample C
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default Login
