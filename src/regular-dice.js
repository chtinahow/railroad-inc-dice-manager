import { registerHtml, useGlobalStore } from 'tram-one'
import transparentPixel from './images/img_trans.gif'
import regularRailroadDiceMap from './images/regular-railroad-dice.png'


/**
 * Simple component that uses children in the rendered tag.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml()

export default (props, children) => {
	const regularDice = useGlobalStore('regularDice')

	const usedClassName = props.used ? 'used' : ''

	const findOffset = () => {
		const position = 95 * props.diceType
		if(position > 1200) return position - 3
		if (position > 800) return position - 2
		return position
	}

	return html`
		<img 
			class="regular-dice ${usedClassName}" 
			style="background-position-x: ${findOffset()}px; background-position-y: 0; background-image: url(${regularRailroadDiceMap})" 
			src=${transparentPixel}
			onclick=${props.useDice}
		>
	`
}
