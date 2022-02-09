import Link from 'next/link';
import PropTypes from 'prop-types';
import {
	Button,
	Navbar,
	Carousel,
	Nav,
	Row,
	Col,
	Container,
} from 'react-bootstrap';

import customStyles from '@/styles/Home.module.scss';
import imgFooterGraphics from '../images/uifocus/img-footer-graphics.svg';

/**
 * Toggling navbar
 */
const navbarGlobalToggle = () => {
	if (document.body.classList.contains('global-menu--open')) {
		document.body.classList.remove('global-menu--open');
		console.log('removing');
	} else {
		document.body.classList.add('global-menu--open');
		console.log('adding');
	}
};

export default function Header({ anchors }) {
	return (
		<Navbar className='sps sps--abv' expand='lg' fixed='top' variant='main'>
			<h1 className='navbar-main-title'>
				<Link href='/'>
					<a className='navbar-main-title__link'>
						<Navbar.Brand className='visually-hidden'>UI.FOCUS</Navbar.Brand>
					</a>
				</Link>
			</h1>
			{/* <p className="navbar-main-title__tagline">An UI/UX focussed initiative celebrating <br/> 5 years product focusism</p> */}
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
				<Nav className='navbar-primary'>
					{anchors.map((a, ai) => {
						return (
							<Nav.Link key={ai} href={`#${a.name}`}>
								{a.display}
							</Nav.Link>
						);
					})}
				</Nav>
				<div className='navbar-global'>
					<Button
						className='navbar-global__menu-trigger'
						onClick={navbarGlobalToggle}>
						<span className='menu-trigger__label'>Menu</span>
						<span className='menu-trigger__icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 16 16'>
								<g id='Menu' fill='#ffffff'>
									<rect
										id='menu-shape-top'
										data-name='top'
										width='13'
										height='2'
										transform='translate(3 0)'
									/>
									<rect
										id='menu-shape-middle'
										data-name='middle'
										width='16'
										height='2'
										transform='translate(0 7)'
									/>
									<rect
										id='menu-shape-bottom'
										data-name='bottom'
										width='10'
										height='2'
										transform='translate(6 14)'
									/>
								</g>
							</svg>
						</span>
						<span className='visually-hidden'>Menu</span>
					</Button>
					<div className='navbar-global__menu'>
						<Button onClick={navbarGlobalToggle} className='menu-btn-close'>
							<div className='visually-hidden'>Close</div>
						</Button>
						<Link href='/' onClick={navbarGlobalToggle}>
							<a className='menu-btn-home'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='15.142'
									height='18.175'
									className='menu-btn-home__icon'>
									<path
										d='M14.517 5.533L8.693.447a1.666 1.666 0 00-2.273 0L.6 5.533A1.892 1.892 0 000 6.897v9.546a1.7 1.7 0 001.733 1.732h2.585a1.7 1.7 0 001.733-1.733V13.09a.209.209 0 01.227-.227h2.585a.209.209 0 01.227.227v3.324a1.7 1.7 0 001.733 1.733h2.585a1.7 1.7 0 001.733-1.733V6.896a1.815 1.815 0 00-.624-1.363zm-.909 10.909a.209.209 0 01-.227.227H10.8a.209.209 0 01-.227-.227V13.09a1.7 1.7 0 00-1.733-1.733H6.25a1.7 1.7 0 00-1.733 1.733v3.324a.209.209 0 01-.227.227H1.7a.209.209 0 01-.227-.227V6.896c0-.085 0-.142.085-.142L7.41 1.669a.223.223 0 01.313 0l5.8 5.085c.085 0 .085.085.085.142v9.546z'
										fill='#fdbc00'
									/>
								</svg>
								<span className='menu-btn-home__label'>Go to Home</span>
							</a>
						</Link>
						<div className='menu-container'>
							<ul className='menu-primary'>
								<li>
									<Link href='/pub' onClick={navbarGlobalToggle}>
										<a>P.U.B</a>
									</Link>
								</li>
								<li>
									<Link
										href='/lightingtalk'
										className='inactive'
										onClick={navbarGlobalToggle}>
										<a>Lightning Talks</a>
									</Link>
								</li>
								<li>
									<Link href='/' className='inactive' onClick={navbarGlobalToggle}>
										<a>Workshops</a>
									</Link>
								</li>
								<li>
									<Link
										href='/newsletter'
										className='inactive'
										onClick={navbarGlobalToggle}>
										<a>Newsletter</a>
									</Link>
								</li>
							</ul>
							<ul className='menu-secondary'>
								<li>
									<a href='#sectionAbout' onClick={navbarGlobalToggle}>
										About
									</a>
								</li>
								<li>
									<a href='#sectionHistory' onClick={navbarGlobalToggle}>
										History
									</a>
								</li>
								<li>
									<a
										href='https://docs.google.com/forms/d/e/1FAIpQLSfKZWBFSdgZcj9OeEoNnH2ls-YTFzchfuSzYCgiSfkv_85Y4w/viewform'
										target='_blank'
										rel='noreferrer'>
										Volunteer
									</a>
								</li>
								<li>
									<a href='#sectionContact' onClick={navbarGlobalToggle}>
										Contact
									</a>
								</li>
								<li>
									<a href='mailto:ui.focus@microfocus.com' onClick={navbarGlobalToggle}>
										ui.focus@microfocus.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
}
