import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { logout } from '../../../stores/actions/auth';
import { MdMenu } from 'react-icons/md';
import { Logo } from '../../commons';
import useSidebar from '../../../hooks/use-sidebar';
import { NAV_MENU } from '../../../contants/layout';
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
	const { toggleSidebar } = useSidebar();

	const dispatch = useDispatch();

	const onClickLogout = () => {
		dispatch(logout());
	};

	return (
		<header className='header'>
			<div className='relative flex flex-row justify-between items-center px--default max-w-screen-2xl mx-auto w-full h-full space-x-4 hide-mobile'>
				<div className='flex flex-row justify-start items-center'>
					<Logo className='object-contain h-14' />
				</div>
				<div className='flex flex-row justify-start items-center space-x-6'>
					{NAV_MENU.map((item, index) => (
						<NavLink key={index} to={item.href}>
							{({ isActive }) => (
								<div
									className={clsx(
										'group flex flex-col space-y-1 cursor-pointer',
										isActive ? 'text-primary' : 'text-white hover:text-primary'
									)}
								>
									<span className='text-sm transation duration-300'>{item.label}</span>
									<div className='relative w-4/5 h-[2px]'>
										<div
											className={clsx(
												'absolute h-full transation-[width] duration-300 bg-primary',
												isActive ? 'w-full' : 'w-0 group-hover:w-full'
											)}
										/>
									</div>
								</div>
							)}
						</NavLink>
					))}
					<NavLink
						className='group flex flex-col space-y-1 cursor-pointer text-white hover:text-danger'
						onClick={onClickLogout}
					>
						<span className='text-sm transation duration-300'>Logout</span>
						<div className='relative w-4/5 h-[2px]'>
							<div className='absolute h-full w-0 group-hover:w-full transation-[width] duration-300 bg-danger'></div>
						</div>
					</NavLink>
				</div>
			</div>
			<div className='flex flex-row justify-between items-center px--default max-w-screen-xl mx-auto w-full h-full space-x-4 hide-website'>
				<div className='flex flex-row justify-start items-center'>
					<Logo />
				</div>
				<button type='button' onClick={toggleSidebar}>
					<MdMenu className='text-2xl text-white hover:text-primary on-hover' />
				</button>
			</div>
		</header>
	);
}

export default HeaderNavbar;
