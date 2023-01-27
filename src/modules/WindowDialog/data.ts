import { Attachments } from '../../interfaces';

interface IDialogs {
	his: boolean;
	date: string;
	isReaded: boolean;
	isTyping: boolean;
	smile?: string[];
	attachments?: Attachments[];
	text?: string;
}
export const dialogs: IDialogs[] = [
	{
		his: true,
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
		isReaded: false,
		text: 'bla',
		smile: undefined,
		isTyping: false,
		attachments: [
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://www.fxmag.pl/images/articles/chinska-gospodarka-w-2021-r-i-jej-perspektywy-na-kolejne-lata-raport-millenium.jpg',
			},
		],
	},
	{
		his: true,
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
		isReaded: true,
		smile: undefined,
		isTyping: false,
		attachments: [
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://www.fxmag.pl/images/articles/chinska-gospodarka-w-2021-r-i-jej-perspektywy-na-kolejne-lata-raport-millenium.jpg',
			},
		],
	},
	{
		his: false,
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
		isReaded: false,
		smile: undefined,
		isTyping: false,
		text: 'Hi',
		attachments: [
			{
				filename: 'namefile',
				url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
			},
			{
				filename: 'namefile',
				url: 'https://www.fxmag.pl/images/articles/chinska-gospodarka-w-2021-r-i-jej-perspektywy-na-kolejne-lata-raport-millenium.jpg',
			},
		],
	},
	{
		his: false,
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
		isReaded: false,
		smile: undefined,
		isTyping: false,
		text: 'Hi',
	},
	{
		his: false,
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
		isReaded: false,
		smile: undefined,
		isTyping: false,
		text: 'Hi',
	},
	{
		his: false,
		date: 'Thu Jan 20 2023 16:44:00 GMT+0300',
		isReaded: true,
		smile: undefined,
		isTyping: false,
		text: 'Hi how are you',
	},
	{
		his: false,
		date: 'Thu Jan 26 2021 16:00:11 GMT+0300',
		isReaded: false,
		smile: undefined,
		isTyping: false,
		text: 'Hi',
	},
	{
		his: true,
		date: 'Thu Jan 27 2023 18:53:11 GMT+0300',
		isReaded: false,
		smile: undefined,
		isTyping: true,
	},
	{
		his: false,
		date: 'Thu Jan 26 2023 16:39:11 GMT+0300',
		isReaded: false,
		smile: undefined,
		isTyping: true,
	},
];
