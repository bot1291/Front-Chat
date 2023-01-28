import { IUser } from '../../../interfaces/IUser';

export const getUser = (): Promise<IUser> => {
	return new Promise((resolve) => {
		setTimeout(resolve, getRandom(100, 1000));
	}).then(() => {
		return {
			_id: '1',
			name: 'Ivan',
			avatar: { color: 'blue', img: '' },
			email: 'ivan.ivanov@yandex.ru',
			login: 'ivanivanov',
			dialogs: [
				{
					id: '11',
					name: 'Artem_xx_XX$NaGiBaToR$XX_XX',
					avatar: { img: '', color: 'orange' },
					lastMes: 'Let us go walk todaysssss',
					dateLastMes: 'Thu Jan 24 2023 20:39:11 GMT+0300',
					messages: [
						{
							id: '124',
							his: true,
							date: 'Thu Jan 18 2021 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Two years ago',
						},
						{
							id: '129',
							his: true,
							date: 'Thu Jan 18 2023 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'How do you do How do you do How do you do How do you doHow do you do How do you do How do you do How do you do',
						},
						{
							id: '128',
							his: true,
							date: 'Thu Jan 18 2023 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'How do you do How do you do How do you do How do you doHow do you do How do you do How do you do How do you do',
						},
						{
							id: '125',
							his: true,
							date: 'Thu Jan 18 2023 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'How do you do How do you do How do you do How do you doHow do you do How do you do How do you do How do you do',
						},
						{
							id: '126',
							his: true,
							date: 'Thu Jan 24 2023 20:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Let us go walk today',
						},
						{
							id: '118',
							his: true,
							date: 'Thu Jan 18 2021 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Two years ago',
						},
						{
							id: '121',
							his: true,
							date: 'Thu Jan 18 2023 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Hi',
						},
						{
							id: '122',
							his: true,
							date: 'Thu Jan 24 2023 20:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Let us go walk today',
						},
						{
							id: '123',
							his: true,
							date: 'Thu Jan 18 2021 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Two years ago',
						},
						{
							id: '111',
							his: true,
							date: 'Thu Jan 18 2023 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Hi',
						},
						{
							id: '112',
							his: true,
							date: 'Thu Jan 24 2023 20:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Let us go walk todaysssss',
						},
						{
							id: '115',
							his: false,
							date: 'Thu Jan 24 2023 21:39:11 GMT+0300',
							isReaded: true,
							smile: undefined,
							isTyping: false,
							text: 'Sorry, i am busy today',
						},
						{
							id: '113',
							his: false,
							date: 'Thu Jan 24 2023 21:39:11 GMT+0300',
							isReaded: true,
							smile: undefined,
							isTyping: false,
							attachments: [
								{
									filename: 'namefile',
									url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
								},
							],
						},
						{
							id: '116',
							his: false,
							date: 'Thu Jan 24 2023 21:39:11 GMT+0300',
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
							],
							text: 'Text',
						},
					],
				},
				{
					id: '12',
					name: 'Anna',
					avatar: {
						img: 'https://sun9-55.userapi.com/impg/2PNAkYD2DmquX6wa-OpGf35rm6mRol2ceaiQAg/Ibz1VqUahmk.jpg?size=720x787&quality=96&sign=46ef0ed6911f96bc580e80af5f6f26c8&type=album',
						color: 'blue',
					},
					lastMes: 'Cherry cherry lady',
					dateLastMes: 'Thu Jan 28 2023 21:39:11 GMT+0300',
					messages: [
						{
							id: '221',
							his: false,
							date: 'Thu Jan 26 2023 21:39:11 GMT+0300',
							isReaded: true,
							smile: undefined,
							isTyping: false,
							text: 'Hello how are you?',
						},
						{
							id: '222',
							his: true,
							date: 'Thu Jan 28 2023 21:39:11 GMT+0300',
							isReaded: false,
							smile: undefined,
							isTyping: false,
							text: 'Cherry cherry lady',
						},
						{
							id: '223',
							his: true,
							date: 'Thu Jan 28 2023 21:39:11 GMT+0300',
							isReaded: false,
							smile: undefined,
							isTyping: true,
						},
					],
				},
				{
					id: '13',
					name: 'Snezhanna',
					avatar: {
						img: '',
						color: 'blue',
					},
					lastMes: 'Hi',
					dateLastMes: 'Thu Jan 1 4242 21:39:11 GMT+0300',
					messages: [
						{
							id: '331',
							his: true,
							date: 'Thu Jan 2 2020 21:39:11 GMT+0300',
							isReaded: true,
							smile: undefined,
							isTyping: false,
							text: 'Hi',
						},
						{
							id: '332',
							his: true,
							date: 'Thu Jan 28 2021 21:39:11 GMT+0300',
							isReaded: false,
							smile: undefined,
							isTyping: false,
							text: 'Hi',
						},
						{
							id: '333',
							his: true,
							date: 'Thu Jan 1 4242 21:39:11 GMT+0300',
							smile: undefined,
							isTyping: false,
							text: 'Hi',
						},
					],
				},
				{
					id: '14',
					name: 'Ivan',
					avatar: {
						img: '',
						color: 'green',
					},
				},
				{
					id: '15',
					name: 'Artem',
					avatar: {
						img: '',
						color: 'yellow',
					},
				},
				{
					id: '16',
					name: 'Liza',
					avatar: {
						img: '',
						color: 'brown',
					},
				},
				{
					id: '17',
					name: 'Kostya',
					avatar: {
						img: '',
						color: 'gray',
					},
				},
				{
					id: '18',
					name: 'Kostya',
					avatar: {
						img: '',
						color: 'gray',
					},
				},
				{
					id: '19',
					name: 'Kostya',
					avatar: {
						img: '',
						color: 'gray',
					},
				},
				{
					id: '20',
					name: 'Kostya',
					avatar: {
						img: '',
						color: 'gray',
					},
				},
				{
					id: '21',
					name: 'Kostya',
					avatar: {
						img: '',
						color: 'gray',
					},
				},
				{
					id: '22',
					name: 'Kostya',
					avatar: {
						img: '',
						color: 'gray',
					},
				},
			],
		};
	});
};

const getRandom = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
