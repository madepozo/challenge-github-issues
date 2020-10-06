import React, {
	memo,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

import useDebounce from 'hooks/useDebounce';

import { InputSearchWrapper, Input } from './InputSearch.styles';

type Props = {
	value: string;
	placeholder?: string;
	isLoading?: boolean;
	changeHandler: (value: string) => void;
	setFocused: (status: boolean) => void;
};

const InputSearch = ({
	changeHandler,
	placeholder = 'Search',
	isLoading,
	value: initialValue,
	setFocused,
}: Props): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState(initialValue);
	const debounceValue = useDebounce(value, 500);

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(evt.target.value);
	};

	const handleFocus = (): void => {
		setFocused(true);
	};

	useLayoutEffect(() => {
		if (inputRef.current !== null) {
			inputRef.current.focus();
		}
	}, []);

	useEffect(() => {
		changeHandler(debounceValue);
	}, [changeHandler, debounceValue]);

	return (
		<InputSearchWrapper>
			<Input
				ref={inputRef}
				value={value}
				type="search"
				placeholder={placeholder}
				onChange={handleChange}
				onFocus={handleFocus}
			/>
			{isLoading && <i className="loader" />}
		</InputSearchWrapper>
	);
};

export default memo(InputSearch);
