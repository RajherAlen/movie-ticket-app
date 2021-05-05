import React, { useRef } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const registerUser = (e) => {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="l--login">
			<div className="logo logo--center">
				Movie Ticket
				<i className="logo__img"></i>
			</div>

			<div className="signUp__header">SignUp</div>

			<form>
				<div className="signUp__form">
					<input type="text" placeholder="Email" ref={emailRef} />
					<input
						type="password"
						placeholder="Passwor"
						ref={passwordRef}
					/>
				</div>

				<button
					className="btn btn--primary btn--full"
					onClick={registerUser}
				>
					SignUp
				</button>
			</form>
		</div>
	);
};

export default SignUp;
