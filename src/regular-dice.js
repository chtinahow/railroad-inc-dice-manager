import { registerHtml, useGlobalStore } from 'tram-one'
import transparentPixel from './images/img_trans.gif'
import regularRailroadDiceMap from './images/regular-railroad-dice.png'


/**
 * Simple component that uses children in the rendered tag.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml()

export default (props, children) => {
	const usedClassName = props.used ? 'used' : ''

	const findOffset = () => {
		const position = 95 + (48 * props.diceType) // 48 is the number of pixels that looked best when scaling down
		if(position > 1200) return position - 3
		if (position > 700) return position + 2
		return position
	}

	return html`
		<button 
			class="regular-dice ${usedClassName}" 
			style="background-position-x: ${findOffset()}px; background-position-y: 0; background-image: url(${regularRailroadDiceMap})" 
			src=${transparentPixel}
			onclick=${props.onclick}
		>
	`
}
