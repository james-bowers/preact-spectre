import { h } from 'preact'

export let Title = ({ children }) => (
	<th>{children}</th>
)

export let Head = ({ children }) => (
	<thead>{children}</thead>
)

export let Body = ({ children }) => (
	<tbody>{children}</tbody>
)

export let Row = ({ children }) => (
	<tr>{children}</tr>
)

export let Cell = ({ children }) => (
	<td>{children}</td>
)

export let Wrapper = ({ children }) => (
	<table class="table table-striped table-hover">
		{children}
	</table>
)