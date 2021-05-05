import React from "react";
import Link from "next/link";

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

				<button className="btn btn--primary btn--full">Login</button>
			</form>

			<p className="login__signUp-link">
				Don't have account?
				<Link href="/register">
					<span>SIGN UP</span>
				</Link>
			</p>

			{/* // TODO - ADD GOOGLE SIGN */}
			{/* <div className="login__footer">
				<div>
					<p>
						<span></span> or <span></span>{" "}
					</p>

					
				</div>
			</div> */}
		</div>
	);
};

export default Login;
