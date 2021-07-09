import { registerHtml, useGlobalStore } from 'tram-one'
import RegularDice from './regular-dice'

/**
 * Component that will hold each of the rolled dice for the round
 * Each Row will populate with a maximum of 4 regular dice that are selected from the
 * the dicePicker
 */

const html = registerHtml()

export default (props, children) => {
	return html`
		<div>
			<hr>
		</div>
	`
}