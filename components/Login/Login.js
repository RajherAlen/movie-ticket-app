import React from "react";

const Login = () => {
	return (
		<div className="l--login">
			<div className="logo logo--center">
				Movie Ticket
				<i className="logo__img"></i>
			</div>

			<div className="login__header">Login</div>

			<form>
				<div className="login__form">
					<input type="text" placeholder="Email" />
					<input type="password" placeholder="Passwor" />
				</div>
			</form>
		</div>
	);
};

export default Login;
