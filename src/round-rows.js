import { registerHtml } from 'tram-one'
import RoundRow from './round-row'

/**
 * Component that will hold each of the rolled dice for the round
 * Each Row will populate with a maximum of 4 regular dice that are selected from the
 * the dicePicker
 */

const html = registerHtml({
	'round-row': RoundRow,
})

export default (props, children) => {
	return html`
		<div class="round-rows">
			<round-row round=1 />
			<round-row round=2 />
			<round-row round=3 />
			<round-row round=4 />
			<round-row round=5 />
			<round-row round=6 />
			<round-row round=7 />
		</div>
	`
}