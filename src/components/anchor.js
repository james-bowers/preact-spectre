import { h, Component } from 'preact'
import { Link } from 'preact-router';

export default (props) => {

	if (/^https?:\/\//.test(props.href) || props.forceNative) return <a target={props.target} href={props.href} native>{props.children}</a>

	return <Link target={props.target} href={props.href}>{props.children}</Link>
}