import {FunctionComponent, useState} from "react";

import './search.scss';

export interface SearchProps {
    onSearch: (text: string) => void;
}

const Search: FunctionComponent<SearchProps> = ({onSearch}) => {
    const [text, setText] = useState('');
    const [lastSearch, setLastSearch] = useState('');

    const handleKeyUp = (key: string) => {
        if (key === 'Enter' && text !== lastSearch) {
            onSearch(text);
            setLastSearch(text);
        }
    };

    return (
        <div className="searchbar">
            <input className="search" type="text" name="" placeholder="Search..."
                   onChange={e => setText(e.target.value)} onKeyUp={e => handleKeyUp(e.key)}>
            </input>
        </div>
    );
};

export default Search;