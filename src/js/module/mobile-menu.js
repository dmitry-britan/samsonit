//
// CLASS - Mobile Menu
// =================================================================
class Menu {
	constructor() {
		this.closeMobileMenuOnOutOfClick();
		this.toggleSubMenu();
		$('.js-nav-toggle').on('click', () => {
			this.toggleMenuVisibility();
			this.toggleMenuTriggerClass();
			this.toggleBodyBackground();
		});
	}
	/* eslint class-methods-use-this: ["error", { 
		"exceptMethods": [
			"toggleMenuVisibility",
			"toggleBodyBackground",
			"toggleMenuTriggerClass",
			"toggleSubMenu",
			"closeMobileMenuOnOutOfClick",
		] }] 
	*/
	toggleMenuVisibility() {
		$('.mobile-nav').toggleClass('is--visible');
	}
	toggleBodyBackground() {
		$('body').toggleClass('is--menu-active');
	}
	toggleMenuTriggerClass() {
		$('.js-nav-toggle').toggleClass('is-active');
	}
	toggleSubMenu() {
		$('.mobile-nav__block-title').on('click', 'i', (event) => {
			let $this = $(event.currentTarget);

			$this.parents('.mobile-nav__block-nav').toggleClass('is--opened');
		});
	}
	closeMobileMenuOnOutOfClick() {
		$('body').mouseup((e) => {
			let subject = $('.is--visible');

			if (subject.length
				&& !$(e.target).hasClass('js-nav-toggle')
				&& !$(e.target).hasClass('hamburger__inner')
				&& e.target.className !== subject.attr('class')
				&& !subject.has(e.target).length) {
				this.toggleMenuVisibility();
				this.toggleBodyBackground();
				this.toggleMenuTriggerClass();
			}
		});
	}
}
function initMenu() {
	return new Menu();
}
initMenu();
