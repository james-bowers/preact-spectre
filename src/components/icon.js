import { h } from 'preact'
import * as helper from './helper'

export let Icon = (props) => {
	let classes = helper.buildClassList(props, ['icon'], {
		arrowUp: 'icon-arrow-up',
		arrowDown: 'icon-arrow-down',
		arrowLeft: 'icon-arrow-left',
		arrowRight: 'icon-arrow-right',
		upward :'icon-upward',
		forward :'icon-forward',
		downward :'icon-downward',
		back :'icon-back',
		caret :'icon-caret',
		menu :'icon-menu',
		apps :'icon-apps',
		moreHoriz :'icon-more-horiz',
		moreVert :'icon-more-vert',
		resizeHorix :'icon-resize-horiz',
		resizeVert :'icon-resize-vert',
		plus :'icon-plus',
		minus :'icon-minus',
		cross :'icon-cross',
		check :'icon-check',
		stop :'icon-stop',
		shutdown :'icon-shutdown',
		refresh :'icon-refresh',
		search :'icon-search',
		flag :'icon-flag',
		bookmark :'icon-bookmark',
		edit :'icon-edit',
		delete :'icon-delete',
		share :'icon-share',
		download :'icon-download',
		upload :'icon-upload',
		mail :'icon-mail',
		people :'icon-people',
		message :'icon-message',
		photo :'icon-photo',
		time :'icon-time',
		location :'icon-location',
		link :'icon-link',
		emoji :'icon-emoji',

		// scale
		icon2x: 'icon-2x',
		icon3x: 'icon-3x',
		icon4x: 'icon-4x'
	})

	return <i class={classes.join(' ')} />
}