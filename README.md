<a><img src='https://travis-ci.org/Attrash-Islam/infinite-autocomplete.svg?branch=master' /></a>     <a href='https://coveralls.io/github/Attrash-Islam/infinite-autocomplete'><img src='https://coveralls.io/repos/github/Attrash-Islam/infinite-autocomplete/badge.svg' alt='Coverage Status' /></a>


### infinite-autocomplete [CORE]
The infinite-autocomplete component is like all these autocomplete out there, except that he is "Infinite" - which means that scrolling will fetch more data

Ease of use, written totally in Pure Functional Programming mindset! 

# Live Demo

<img src="https://cdn.rawgit.com/Attrash-Islam/assets/749035d3/infi-basic.gif" />

# Popular Frameworks Wrappers
- <a href="https://github.com/Attrash-Islam/ng-infinite-autocomplete">ng-infinite-autocomplete (AngularJS 1.x)</a>
- <a href="https://github.com/Attrash-Islam/react-infinite-autocomplete">react-infinite-autocomplete</a>
- <a href="https://github.com/Attrash-Islam/vue-infinite-autocomplete">vue-infinite-autocomplete</a>

# Install
```js
npm i -S infinite-autocomplete
```

# Basic Usage (Minimum Configuration)
```js
import InfiniteAutocomplete from 'infinite-autocomplete';

// Static data source
new InfiniteAutocomplete({
    data: [
        { text: 'Islam Attrash', value: 1},
        { text: 'Shai Reznik', value: 2},
        { text: 'Uri Shaked', value: 3},
        { text: 'Salsabel Eawissat', value: 4}
    ]
}, document.getElementById('test'));

// Dynamic data source
new InfiniteAutocomplete({
    data: (text, page, fetchSize) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([ ..... ]);
            }, 500);
        })
    }
}, document.getElementById('test'));
```

# Options
The options object will be exposed when initializing the infinite-autocomplete component as the first argument.

```js
interface IOption {
    id: number;
    text: string;
}

/**
 * current value
 */
value?: string;
/**
 * data source
 */
data?: IOption[] | (inputText: string, fetchSize: number, page: number) => Promise<IOption[]>;
/**
 * Chunk fetch size
 */
fetchSize?: number,
/**
 * on-select event output handler when choosing an option
 */
onSelect?({ id: number, text: string});
```
