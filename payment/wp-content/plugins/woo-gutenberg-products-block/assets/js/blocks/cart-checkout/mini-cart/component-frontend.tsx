/**
 * External dependencies
 */
import { renderFrontend } from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */
import MiniCartBlock from './block';
import './style.scss';

const renderMiniCartFrontend = () => {
	// Check if button is focused. In that case, we want to refocus it after we
	// replace it with the React equivalent.
	let focusedMiniCartBlock: HTMLElement | null = null;
	/* eslint-disable @wordpress/no-global-active-element */
	if (
		document.activeElement &&
		document.activeElement.classList.contains(
			'wc-block-mini-cart__button'
		) &&
		document.activeElement.parentNode instanceof HTMLElement
	) {
		focusedMiniCartBlock = document.activeElement.parentNode;
	}
	/* eslint-enable @wordpress/no-global-active-element */

	renderFrontend( {
		selector: '.wc-block-mini-cart',
		Block: MiniCartBlock,
		getProps: ( el: HTMLElement ) => ( {
			isDataOutdated: el.dataset.isDataOutdated,
			isInitiallyOpen: el.dataset.isInitiallyOpen === 'true',
		} ),
	} );

	// Refocus previously focused button if drawer is not open.
	if (
		focusedMiniCartBlock instanceof HTMLElement &&
		! focusedMiniCartBlock.dataset.isInitiallyOpen
	) {
		const innerButton = focusedMiniCartBlock.querySelector(
			'.wc-block-mini-cart__button'
		);
		if ( innerButton instanceof HTMLElement ) {
			innerButton.focus();
		}
	}
};

renderMiniCartFrontend();
