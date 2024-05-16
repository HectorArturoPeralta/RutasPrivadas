
import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<Link to='/p4'>Ruta Privada1</Link>
						<Link to='/p5'>Ruta Privada2</Link>
						<Link to='/p6'>Ruta Privada3</Link>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						<Link to='/p1'>Ruta Publica1</Link>
						<Link to='/p2'>Ruta Publica2</Link>
						<Link to='/p3'>Ruta Publica3</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};
