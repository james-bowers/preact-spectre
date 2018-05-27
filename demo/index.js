import './style';
import {
	Button, Card, Checkbox, Img, Form, TextArea, Icon, Menu, Switch //  Icon, Select, Radio
} from 'preact-spectre';

export default function render(){
	console.log('TextArea', TextArea);
	return (
		<div>
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
				<Card.Container>
					<Card.ImageContainer>
						<Img.Img src="https://ticketbuddy.co.uk/static/logo/blue_1024.png" />
					</Card.ImageContainer>
					<Card.Header title="Title" subtitle="subtitle" />
					<Card.Body>
						<p>This is the main content of the card component.</p>
					</Card.Body>
				</Card.Container>
			</section>
			<section>
				<h2>Form elements</h2>
				<Form.Group>
					<Checkbox.Checkbox name="checkbox" label="my checkbox" />
				</Form.Group>
				<Form.Group>
					<TextArea.TextArea name="textarea" placeholder="my textbox" />
				</Form.Group>
				<Form.Group>
					<Switch.Switch name="my-switch" label="on or off!?" />
				</Form.Group>
			</section>
			<section>
				<h2>Icons</h2>
				<h1>A big <Icon.Icon plus /> 1 for spectre CSS</h1>
				<p>A not so big <Icon.Icon plus /> 1 for spectre CSS</p>
			</section>
			<section>
				<h2>Menu</h2>
				<Menu.Container>
					<Menu.Item>Hello</Menu.Item>
					<Menu.Divider text="divider text" />
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
		</div>
		
	);
}