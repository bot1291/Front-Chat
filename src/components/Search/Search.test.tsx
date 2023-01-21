import setRender from '../../utils/setRender';
import { Search } from './Search';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('CategoriesSkeleton', () => {
	it('Check for written value', async () => {
		setRender(<Search />);
		const inputElem = screen.getByTestId('search');
		expect(inputElem).toHaveTextContent('');

		await userEvent.type(inputElem, 'test');
		expect(inputElem).toHaveValue('test');
		await userEvent.clear(inputElem);

		await userEvent.type(inputElem, 'te s to');
		expect(inputElem).toHaveValue('te s to');

		await userEvent.type(inputElem, 'testo');
		expect(inputElem).toHaveValue('te s totesto');
	});

	it('Should follow the structuce', async () => {
		setRender(<Search />);
		const inputWrapElem = screen.getByTestId('input-wrapper');
		expect(inputWrapElem).toMatchSnapshot();
	});
});
