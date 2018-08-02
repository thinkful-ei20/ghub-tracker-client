// import React from 'react';

// import './footer.css';

// export default (props) => {
//   return (
//     <footer>
//       <p>Created by HVNJ &copy; 2018</p>
//     </footer>
//   );
// }




import React from 'react';
import './footer.css';

export default function Footer() {
	return (
		<footer className="footer-style">
      <p>Made with love by the MERNtalists™</p>
      {/* <p>Contact Us</p> */}
			<ul>
				<li>
					<a href="https://github.com/jeffreymahmoudi">Jeffrey</a>
					<img
						src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>

				<li>
					<a href="https://github.com/forgiv">Hiram</a>
					<img
						src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>

				<li>
					<a href="https://github.com/neillsom">Neill</a>
					<img
						src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>

				<li>
					<a href="https://github.com/codeNinja27">Tharaka</a>
					<img
						src='https://cdn.iconscout.com/public/images/icon/free/png-128/github-logo-brand-development-tools-318f14f5797bb6cc-128x128.png'
						alt='Github logo'
					/>
				</li>
			</ul>

		</footer>
	)};