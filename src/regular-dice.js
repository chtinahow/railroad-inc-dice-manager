import { registerHtml, useGlobalStore } from 'tram-one'

/**
 * Simple component that uses children in the rendered tag.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml()

export default (props, children) => {
	const regularDice = useGlobalStore('regularDice')
	console.log(regularDice.length)

	const usedClassName = props.used ? 'used' : ''

	return html`
		<img 
			class="regular-dice ${usedClassName}" 
			style="background-position-x: ${95 * props.diceType}px; background-position-y: 0;" 
			src="https://i.imgur.com/Vp0MV75_d.png"
			onclick=${props.useDice}
		>
	`
}
