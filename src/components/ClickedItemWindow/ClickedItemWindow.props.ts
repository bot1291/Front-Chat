// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

export interface ClickedItemWindowProps extends Record<string, any> {
	Component: FC<any>;
	isLeftAnimation?: boolean;
}
