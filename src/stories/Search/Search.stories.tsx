import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Search } from './Search';

export default {
	title: 'Library/Search',
	component: Search,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	parameters: {
		backgrounds: {
			values: [
				{ name: 'red', value: '#f00' },
				{ name: 'green', value: '#0f0' },
				{ name: 'blue', value: '#00f' },
			],
		},
	},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Main = Template.bind({});
Main.args = {};
