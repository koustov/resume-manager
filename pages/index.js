import Container from '@/components/Container';
import HomeComponent from '@/components/home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faNote } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Home() {
	return (
		<Container title='Resume Builder' description='Learn | Build'>
			<div className='home-container'>
				<div className='glass-panel'>
					<div className='logo'></div>
					<h1>Resume Manager</h1>
					<p>The fastest way to build your resume with professional quality.</p>
					<div className='glass-toolbar'>
						<Link href='create'>
							<a className='glass-button'>Build My Resume</a>
						</Link>
						<Link href='account'>
							<a className='glass-button'>My Account</a>
						</Link>
						{/* <button className='glass-button'>Build My Resume</button>
						<a
							href='https://superdevresources.com/glassmorphism-ui-css/'
							target='_blank'
							className='glass-button'>
							Go to my account
						</a> */}
					</div>
				</div>
				<div className='card-container'>
					<div className='glass-card'>
						<span>
							<FontAwesomeIcon icon={faStar} style={{ color: '#ffffff' }} />
						</span>
						<span>Hundreds of resume template</span>
					</div>
					<div className='glass-card'>Create your own</div>
					<div className='glass-card'>Entirely Free</div>
					<div className='glass-card'>Manage your account</div>
				</div>
			</div>
		</Container>
	);
}
