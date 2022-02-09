import Link from 'next/link';
import Image from 'next/image';
import { Button, Navbar, Nav, Row, Col, Container } from 'react-bootstrap';

import customStyles from '@/styles/Home.module.scss';
import imgFooterGraphics from '../images/uifocus/img-footer-graphics.svg';

export default function Footer() {
	return (
		<footer id='sectionContact' className='page-footer'>
			<Container>
				<Row>
					<Col lg={6}>
						<h2 className='footer-brand__logo'>
							<a href='/landing'>
								<span className='visually-hidden'>UI.Focus</span>
							</a>
						</h2>
						<p className='footer-desc footer-desc--lg'>
							A unique experience of inspiration, motivation, learning, hands-on,
							competition and beyond..
						</p>
						<ul className='footer-nav'>
							<li>
								<Link href='/pub'>
									<a className='footer-nav__item'>P.U.B</a>
								</Link>
							</li>
							<li>
								<Link href='/big-event'>
									<a className='footer-nav__item'>Lightning Talks</a>
								</Link>
							</li>
							<li>
								<Link href='/workshop'>
									<a className='footer-nav__item'>Workshops</a>
								</Link>
							</li>
							<li>
								<Link href='/newsletter'>
									<a className='footer-nav__item'>Newsletter</a>
								</Link>
							</li>
						</ul>
						<p className='footer-copyrights'>
							© {new Date().getFullYear()}, UI.FOCUS. An initiative by like minded
							folks from IDC Bangalore
						</p>
					</Col>
					<Col lg={6}>
						<Row>
							<Col xl={6}>
								<h3 className='footer-section-title'>Join our hands</h3>
								<p className='footer-desc spacer-out-bottom-lg'>
									Being a member of UI.Focus Committee provides you with an opportunity
									to contribute in shaping, directing, organizing the UI.Focus events
								</p>
								<Link href='https://docs.google.com/forms/d/e/1FAIpQLSfKZWBFSdgZcj9OeEoNnH2ls-YTFzchfuSzYCgiSfkv_85Y4w/viewform'>
									<a className='btn btn-default' target='_blank'>
										<span className='btn__label'>Join UI.Focus</span>
										<span className='btn__icon'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='19.141'
												height='7.995'>
												<path
													d='M18.711 2.913L16.469.283a.786.786 0 00-1.2 1.016l1.584 1.913H.807a.807.807 0 000 1.614h16.081L15.3 6.739a.743.743 0 00.09 1.106.611.611 0 00.478.149.707.707 0 00.628-.329l2.242-2.63a1.564 1.564 0 00-.027-2.122z'
													fill='#ffc107'
												/>
											</svg>
										</span>
									</a>
								</Link>
							</Col>
							<Col xl={6}>
								<hr className='spacer-out-v-lg d-xl-none' />
								<h3 className='footer-section-title'>Talk to us</h3>
								<p className='footer-desc spacer-out-bottom-lg'>
									Got any questions? Like to talk to UI.Focus Team? Just a click away :)
								</p>
								<Link href='https://docs.google.com/forms/d/e/1FAIpQLSdyG5Fgt4930kZLsMrnQ3hajt9VwFABuKXYFssSGCGCLb_VnQ/viewform'>
									<a target='_blank' className='btn btn-default'>
										<span className='btn__label'>Get in Touch</span>
										<span className='btn__icon'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='19.141'
												height='7.995'>
												<path
													d='M18.711 2.913L16.469.283a.786.786 0 00-1.2 1.016l1.584 1.913H.807a.807.807 0 000 1.614h16.081L15.3 6.739a.743.743 0 00.09 1.106.611.611 0 00.478.149.707.707 0 00.628-.329l2.242-2.63a1.564 1.564 0 00-.027-2.122z'
													fill='#ffc107'
												/>
											</svg>
										</span>
									</a>
								</Link>
							</Col>
						</Row>
						<div className='footer-graphics'>
							<Image src={imgFooterGraphics} alt='footer' />
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
