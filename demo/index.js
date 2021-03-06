import './style';
import {
	Button, Card, Checkbox, Img, Form, TextArea, Icon,
	Menu, Switch, TextInput, Grid, Tile, Tooltip, Header, Anchor,
	Modal, Toast, Calendar, Time, DateTimeInput, ModalDateTimeInput
} from '../dist/bundle.js';

export default function render(){

	function addToast(){
		Toast.showToast({
			children: (
				<div>
					<h5>A message!</h5>
					<p>yo yo yo</p>
				</div>
			)
		});
	}

	let card = (<a><Card.Container>
		<Card.ImageContainer height="200px">
			<Img.Img src="https://ticketbuddy.co.uk/static/logo/blue_1024.png" />
		</Card.ImageContainer>
		<Card.Header title="Title" subtitle="subtitle" />
		<Card.Body>
			<p>This is the main content of the card component.</p>
			<a>a link</a>
		</Card.Body>
		<Card.Footer>
			<Button.Button full>Tickets</Button.Button>
		</Card.Footer>
	</Card.Container></a>);

	return (
		<div>
			<section>
				<h2>Modal</h2>
				<a href="#example-modal">Show default modal</a>
				<br />
				<a href="#example-modal-small">Show small modal</a>
				<br />
				<a href="#example-modal-large">Show large modal</a>
				<Modal.Container id="example-modal">
					<Modal.Header title="This is the example modal!" />
					<Modal.Body>
						<p>This is some content in the modal!</p>
					</Modal.Body>
					<Modal.Footer>
						<Button.Button><Icon.Icon people /> people!</Button.Button>
					</Modal.Footer>
				</Modal.Container>
				<Modal.Container small id="example-modal-small">
					<Modal.Header title="This is the example modal!" />
					<Modal.Body>
						<p>This is a small modal!</p>
					</Modal.Body>
					<Modal.Footer>
						<Button.Button><Icon.Icon people /> people!</Button.Button>
					</Modal.Footer>
				</Modal.Container>
				<Modal.Container large id="example-modal-large">
					<Modal.Header title="This is the example modal!" />
					<Modal.Body>
						<p>This is a large modal!</p>
					</Modal.Body>
					<Modal.Footer>
						<Button.Button><Icon.Icon people /> people!</Button.Button>
					</Modal.Footer>
				</Modal.Container>
			</section>
			<section>
				<h2>Buttons</h2>
				<Button.Button>default</Button.Button>
				<Button.Button primary>primary</Button.Button>
				<Button.Button link>link</Button.Button>
				<Button.Button success>success</Button.Button>
				<Button.Button error>error</Button.Button>
				<Button.Button circle><Icon.Icon plus /></Button.Button>
				<Button.Button square><Icon.Icon menu /></Button.Button>
				<Button.Button disabled>disabled</Button.Button>
				<Button.Button loading>loading</Button.Button>
				<Button.Button small>small</Button.Button>
				<Button.Button large>large</Button.Button>
				<Button.Button full>full width</Button.Button>
				<Button.Button><Icon.Icon people /> People</Button.Button>
				<Button.Button><Icon.Icon plus /> Add</Button.Button>
			</section>
			<section>
				<h2>Cards</h2>
				{card}
			</section>
			<section>
				<h2>Form elements</h2>
				<Form.Container id="example-form" submitTxt="save" onSubmit={(values) => console.log(values)}>
					<Form.Group>
						<TextInput.TextInput name="checkbox" value="my text input value" />
					</Form.Group>
					<Form.Group>
						<Checkbox.Checkbox name="checkbox" label="my checkbox (value isfalse)" value={false} />
					</Form.Group>
					<Form.Group>
						<Checkbox.Checkbox name="checkbox" label="my checkbox (value istrue)" value={true} />
					</Form.Group>
					<Form.Group>
						<TextArea.TextArea name="textarea" placeholder="my textbox" value="text value" />
					</Form.Group>
					<Form.Group>
						<Switch.Switch name="my-switch" label="off!?" />
					</Form.Group>
					<Form.Group>
						<Switch.Switch name="my-switch-default-on" label="on!?" value={true} />
					</Form.Group>
				</Form.Container>
			</section>
			<section>
				<h2>Icons</h2>
				<h1>A big <Icon.Icon plus /> 1 for spectre CSS</h1>
				<p>A not so big <Icon.Icon plus /> 1 for spectre CSS</p>
			</section>
			<section>
				<h2>Menu</h2>
				<Menu.Container>
					<Menu.Item>
						<Tile.Container compact>
							<Tile.IconWrapper>
								<Icon.Icon people />
							</Tile.IconWrapper>
							<Tile.Content title="James Bowers" />
						</Tile.Container>
					</Menu.Item>
					<Menu.Divider />
					<Menu.Item>Bonjour</Menu.Item>
					<Menu.Item>Cya</Menu.Item>
					<Menu.Item>Chow</Menu.Item>
				</Menu.Container>
				<Menu.Container>
					<Menu.Item>Hello</Menu.Item>
					<Menu.Divider text="divider text" />
					<Menu.Item>Bonjour</Menu.Item>
					<Menu.BadgeItem badgeText="5">Cya</Menu.BadgeItem>
					<Menu.Item>Chow</Menu.Item>
				</Menu.Container>
			</section>
			<section>
				<h2>Grid</h2>
				<Grid.Container>
					<Grid.Column class="p-1" small="12" medium="6" large="4">
						<div style={{ background: 'red' }}>
							{card}
						</div>
					</Grid.Column>
					<Grid.Column class="p-1" small="12" medium="6" large="4">
						<div style={{ background: 'red' }}>
							{card}
						</div>
					</Grid.Column>
					<Grid.Column class="p-1" small="12" medium="6" large="4">
						<div style={{ background: 'red' }}>
							{card}
						</div>
					</Grid.Column>
				</Grid.Container>
			</section>
			<section>
				<h2>Tile</h2>
				<h5>Normal</h5>
				<Tile.Container>
					<Tile.IconWrapper>
						<Icon.Icon people />
					</Tile.IconWrapper>
					<Tile.Content title="James Bowers" subtitle="Owner" />
					<Tile.Action>
						<Button.Button link>
							<Icon.Icon moreVert />
						</Button.Button>
					</Tile.Action>
				</Tile.Container>
				<h5>Compact</h5>
				<Tile.Container compact>
					<Tile.IconWrapper>
						<Icon.Icon people />
					</Tile.IconWrapper>
					<Tile.Content title="James Bowers" subtitle="Owner" />
					<Tile.Action>
						<Button.Button link>
							<Icon.Icon moreVert />
						</Button.Button>
					</Tile.Action>
				</Tile.Container>
			</section>
			<section>
				<h2>Tooltip</h2>
				<Tooltip.Wrapper text="hello there - right!" right>
					<Button.Button>tooltip right</Button.Button>
				</Tooltip.Wrapper>
				<Tooltip.Wrapper text="hello there - left!" left>
					<Button.Button>tooltip left</Button.Button>
				</Tooltip.Wrapper>
				<Tooltip.Wrapper text="hello there - top!" top>
					<Button.Button>tooltip top</Button.Button>
				</Tooltip.Wrapper>
				<Tooltip.Wrapper text="hello there - bottom!" bottom>
					<Button.Button>tooltip bottom</Button.Button>
				</Tooltip.Wrapper>
			</section>
			<section>
				<h2>Header</h2>
				<Header.Container>
					<Header.Section>
						<Anchor href="#">
							<Button.Button link>One</Button.Button>
						</Anchor>
						<Anchor href="#">
							<Button.Button link>Two</Button.Button>
						</Anchor>
					</Header.Section>
					<Header.Section centered>
						<Anchor href="#">link one</Anchor>
					</Header.Section>
					<Header.Section>
						<Anchor href="#">
							<Button.Button link>
								<Icon.Icon menu />
							</Button.Button>
						</Anchor>
					</Header.Section>
				</Header.Container>
			</section>
			<section>
				<h2>Toast</h2>
				<Button.Button onClick={addToast}>show toast</Button.Button>
				<Toast.Wrapper />
			</section>
			<section>
				<h2>Calendar</h2>
				<Calendar />
				<Time onChange={(timeValues) => console.log('timeValues', timeValues)} />
			</section>
			<section>
				<h2>Date time input</h2>
				<DateTimeInput name="datetime" />
				<Card.Container>
					<Card.Body>
						<ModalDateTimeInput value={new Date('2018-07-17T03:25:00')} name="datetime-2">
							<Button.Button>Change date (has date value)!</Button.Button>
						</ModalDateTimeInput>
						<ModalDateTimeInput name="datetime-3">
							<Button.Button>Change date (has no value)!</Button.Button>
						</ModalDateTimeInput>
					</Card.Body>
				</Card.Container>
			</section>
		</div>
	);
}