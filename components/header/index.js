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
import imgFooterGraphics from '../../images/uifocus/img-footer-graphics.svg';

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
			<header className='header'>
				{/* <div className='social-call'>
					<div className='social'>
						<a href='https://www.facebook.com/mohd.sanu1'>
							<i className='fab fa-facebook'></i>
						</a>
						<a href='youtube.com/DjNaddy'>
							<i className='fab fa-youtube'></i>
						</a>
						<a href='instagram.com/mohammad_sanu'>
							<i className='fab fa-instagram'></i>
						</a>
						<a href='https://twitter.com/Mohammadsanu_'>
							<i className='fab fa-twitter'></i>
						</a>
					</div>
					<div className='phone'>
						<span>Call +91 786 996 1901</span>
					</div>
				</div> */}
				<div className='container'>
					<div className='row v-center'>
						<div className='header-item item-left'>
							<div className='logo'>
								<a href='#'>Shopit</a>
							</div>
						</div>
						<div className='header-item item-center'>
							<div className='menu-overlay'></div>
							<nav className='menu'>
								<div className='mobile-menu-head'>
									<div className='go-back'>
										<i className='fas fa-angle-left'></i>
									</div>
									<div className='current-menu-title'></div>
									<div className='mobile-menu-close'>&times;</div>
								</div>
								{/* <ul className='menu-main'>
									<li>
										<a href='#'>Pricing</a>
									</li>

									<li className='menu-item-has-children'>
										<a href='#'>
											Shop <i className='fas fa-angle-down'></i>
										</a>
										<div className='sub-menu mega-menu mega-menu-column-4'>
											<div className='list-item text-center'>
												<a href='#'>
													<img
														className='show-img'
														src='https://raw.githubusercontent.com/Mohammadsanu/hosted-assets/main/showcase1.png'
														alt=''
													/>
													<h2 className='title'>Poster</h2>
												</a>
											</div>

											<div className='list-item text-center'>
												<a href='#'>
													<img
														className='show-img'
														src='https://raw.githubusercontent.com/Mohammadsanu/hosted-assets/main/showcase2.png'
														alt=''
													/>
													<h2 className='title'>Photoshop</h2>
												</a>
											</div>

											<div className='list-item text-center'>
												<a href='#'>
													<img
														className='show-img'
														src='https://raw.githubusercontent.com/Mohammadsanu/hosted-assets/main/showcase3.png'
														alt=''
													/>
													<h2 className='title'>Design</h2>
												</a>
											</div>

											<div className='list-item text-center'>
												<a href='#'>
													<img
														className='show-img'
														src='https://raw.githubusercontent.com/Mohammadsanu/hosted-assets/main/showcase4.png'
														alt=''
													/>
													<h2 className='title'>Social Media</h2>
												</a>
											</div>

											<div className='list-item text-center'>
												<a href='#'>
													<img
														className='show-img'
														src='https://raw.githubusercontent.com/Mohammadsanu/hosted-assets/main/showcase7.png'
														alt=''
													/>
													<h2 className='title'>Logo Design</h2>
												</a>
											</div>
										</div>
									</li>

									<li className='menu-item-has-children'>
										<div className='sale-design'>
											<span className='sale-label'>Sale</span>
										</div>

										<a href='#'>
											Products <i className='fas fa-angle-down'></i>
										</a>
										<div className='sub-menu mega-menu mega-menu-column-4'>
											<div className='list-item'>
												<h2 className='title'>SEO</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>

												<h2 className='title'>Fashion</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>
											</div>
											<div className='list-item'>
												<h2 className='title'>Photoshop</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>

												<h2 className='title'>Social Media</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>
											</div>
											<div className='list-item'>
												<h2 className='title'>Web Design</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>
												<h2 className='title'>Graphic Design</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>
											</div>

											<div className='list-item'>
												<h2 className='title'>UI/Ux</h2>
												<ul>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
													<li>
														<a href='#'>Mohammad Sanu</a>
													</li>
												</ul>
											</div>
											<div className='list-item'>
												<img
													src='https://raw.githubusercontent.com/Mohammadsanu/hosted-assets/main/showcase5.png'
													alt=''
												/>
											</div>
										</div>
									</li>

									<li>
										<a href='#'>Support</a>
									</li>

									<li>
										<a href='#'>Discover</a>
									</li>
								</ul> */}
							</nav>
						</div>
						<div className='header-item item-right'>
							<a href='#' className='search'>
								<i className='fas fa-search'></i>
							</a>
							<a href='#' className='user'>
								<i className='far fa-user'></i>
							</a>
							<a href='#'>
								<i className='fas fa-shopping-cart'>
									<span className='num-cart-product'>0</span>
								</i>
							</a>

							<div className='mobile-menu-trigger'>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</header>
		</Navbar>
	);
}
