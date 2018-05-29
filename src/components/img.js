import { h } from 'preact'
import * as helper from './helper'

export let Img = (props) => {
	let classes = helper.buildClassList(props, ['img-responsive'], {
		contain: 'img-fit-contain',
		cover: 'img-fit-cover'
	})

	return <img height={props.height} width={props.width} src={props.src} class={classes.join(' ')} alt={props.alt} />
}