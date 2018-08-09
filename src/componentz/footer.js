import React from 'react';
import './footer.css';

export default function Footer() {
	return (
		<footer className="footer-style">
      <p>Made with love by the MERNtalists™</p>
      {/* <p>Contact Us</p> */}
			<ul>
				<li>
					<a href="https://github.com/jeffreymahmoudi" target='_blank'>Jeffrey</a>
					<img
            src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>

				<li>
					<a href="https://github.com/forgiv" target='_blank'>Hiram</a>
					<img
            src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>

				<li>
					<a href="https://github.com/neillsom" target='_blank'>Neill</a>
					<img
            src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>

				<li>
					<a href="https://github.com/codeNinja27" target='_blank'>Tharaka</a>
					<img
            src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>
			</ul>

		</footer>
	)};