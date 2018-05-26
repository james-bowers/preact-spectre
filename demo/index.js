import './style';
import {
	Button, Card, Checkbox, Img, Form, Textarea //  Icon, Select, Radio, Switch, , Menu
} from 'preact-spectre';

export default function render(){
	return (
		<div>
			<section>
				<h2>Buttons</h2>
				<Button.Button>default</Button.Button>
				<Button.Button primary>primary</Button.Button>
				<Button.Button link>link</Button.Button>
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
					<Textarea.Textarea name="textarea" label="my textbox" />
				</Form.Group>
			</section>
		</div>
		
	);
}