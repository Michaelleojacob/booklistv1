import './flair.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function myfooter(parent) {
	'use strict';
	(function () {
		const footer = {
			init: function () {
				this.footerwrapper();
			},
			footerwrapper: function () {
				this.fwrapper = document.createElement('div');
				this.fwrapper.classList.add('fwrapper');
				this.parent.appendChild(this.fwrapper);
				this.renderElements();
			},
			renderElements: function () {
				this.createCopyRight();
				this.createEmailWrapper();
				this.createSocialsWrapper();
			},
			createCopyRight: function () {
				this.cc = document.createElement('div');
				this.cc.classList.add('copyright');
				this.cc.innerHTML = 'copyright <i class="far fa-copyright"></i> 2021';
				this.fwrapper.append(this.cc);
			},
			createEmailWrapper: function () {
				this.emailwrapper = document.createElement('div');
				this.emailwrapper.classList.add('emailwrapper');
				this.fwrapper.append(this.emailwrapper);
				this.emailwrapper = this.emailwrapper;
				this.email();
			},
			email: function () {
				this.myEmail = document.createElement('a');
				this.myEmail.classList.add('email');
				this.myEmail.target = '_blank';
				this.myEmail.href =
					'mailto:michaelleojacob@gmail.com?subject=Hello&body=I%20saw%20your%20app!';
				this.myEmail.title = 'email';
				this.myEmail.innerHTML = 'michaelleojacob@gmail.com';
				this.emailwrapper.append(this.myEmail);
				this.myEmail = this.contentmyEmail;
			},
			createSocialsWrapper: function () {
				this.socialwrapper = document.createElement('div');
				this.socialwrapper.classList.add('socials');
				this.fwrapper.append(this.socialwrapper);
				this.socialwrapper = this.socialwrapper;
				this.myGithub();
				this.myLinkedin();
				this.myRepo();
			},
			myGithub: function () {
				this.githubatag = document.createElement('a');
				this.githubatag.classList.add('githubatag');
				this.githubatag.target = '_blank';
				this.githubatag.innerHTML = `<i class="fab fa-github"></i> github`;
				this.githubatag.title = 'github';
				this.githubatag.href = 'https://github.com/Michaelleojacob';
				this.socialwrapper.appendChild(this.githubatag);
			},
			myLinkedin: function () {
				this.linkedinatag = document.createElement('a');
				this.linkedinatag.classList.add('linkedinatag');
				this.linkedinatag.target = '_blank';
				this.linkedinatag.innerHTML = `<i class="fab fa-linkedin"></i> linkedin`;
				this.linkedinatag.title = 'linkedin';
				this.linkedinatag.href =
					'https://www.linkedin.com/in/michael-leo-jacob/';
				this.socialwrapper.appendChild(this.linkedinatag);
			},
			myRepo: function () {
				this.repoatag = document.createElement('a');
				this.repoatag.classList.add('repoatag');
				this.repoatag.target = '_blank';
				this.repoatag.innerHTML = `<i class="far fa-file"></i> repo`;
				this.repoatag.title = 'repo';
				this.repoatag.href =
					'https://github.com/Michaelleojacob/restaurantpage';
				this.socialwrapper.appendChild(this.repoatag);
			},
		};
		footer.init();
	})();
}
