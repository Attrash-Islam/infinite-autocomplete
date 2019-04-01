<a><img src='https://travis-ci.org/Attrash-Islam/infinite-autocomplete.svg?branch=master' /></a>

### infinite-autocomplete
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

# Usage
```js
import InfiniteAutocomplete from 'infinite-autocomplete';

// Static data source
InfiniteAutocomplete({
    data: [
        { text: 'Islam Attrash', value: 1},
        { text: 'Shai Reznik', value: 2},
        { text: 'Uri Shaked', value: 3},
        { text: 'Salsabel Eawissat', value: 4}
    ],
    onSelect: ({ id, text }) => {
        // do something useful!
    }
}, document.getElementById('app'));

// Dynamic data source
InfiniteAutocomplete({
    value: 'test', // input initial value
    data: (text, page, fetchSize) => {
        return new Promise(function(resolve) {
            function reqListener () {
                resolve(JSON.parse(this.responseText));
            }

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "http://localhost:5000/data?text="+ text + "&page=" + page + "&fetchSize=" + fetchSize);
            oReq.onerror = function () {
              // alert('Error!');
            };
            oReq.send();
        });
    }
}, document.getElementById('app'));
```

**InfiniteAutocomplete** function is also a curried function! which means that we can set a specific configuration and render the autocomplete with these configurations for multiple DOM nodes!

```js
const citiesInfinite = InfiniteAutocomplete({
    data: () => new Promise((resolve) => {
        ...
        resolve(cities);
    })
});

// Some page
citiesInfinite(DOM1);

// Another page
citiesInfinite(DOM2);
```

# Options
```js
{
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
    onSelect?(IOption);
}
```

Where `IOption` stands for =>
```ts
interface IOption {
    id: number | string;
    text: string;
}
```
