<a><img src='https://travis-ci.org/Attrash-Islam/infinite-autocomplete.svg?branch=master' /></a>     <a href='https://coveralls.io/github/Attrash-Islam/infinite-autocomplete'><img src='https://coveralls.io/repos/github/Attrash-Islam/infinite-autocomplete/badge.svg' alt='Coverage Status' /></a>


# infinite-autocomplete [CORE]
Pluggable infinite-autocomplete component that can accept any implementations of yours.
This autocomplete is like all these autocomplete out there, except that he is "Infinite" - which means that scrolling will fetch more data

Ease of use, flexable and written with TypeScript following the SOLID principles to guarantee a plug-in implementations so you can customize it's behaviours and inject it in any environment you want. 

# Popular Frameworks Wrappers
- <a href="https://github.com/Attrash-Islam/ng-infinite-autocomplete">ng-infinite-autocomplete (AngularJS 1.x)</a>
- <a href="https://github.com/Attrash-Islam/react-infinite-autocomplete">react-infinite-autocomplete</a>

# Live Demo (Default Style)

<img src="https://cdn.rawgit.com/Attrash-Islam/assets/749035d3/infi-basic.gif" />


# Install
```js
npm i --save infinite-autocomplete
```

# Basic Usage (Minimum Configuration)
```js
import { InfiniteAutocomplete } from 'infinite-autocomplete';
// or <script src="node_modules/infinite-autocomplete/dist/index.js"></script>
// [dist/index.debug.js is prefered for developement]

//Static data source
new InfiniteAutocomplete(document.getElementById('test'), {
            data: [
                { text: 'Islam Attrash', value: 1},
                { text: 'Shai Reznik', value: 2},
                { text: 'Uri Shaked', value: 3},
                { text: 'Salsabel Eawissat', value: 4}
            ]
        });

//Dynamic data source
new InfiniteAutocomplete(document.getElementById('test'), {
            getDataFromApi: function(text, page, fetchSize) { //Function return a Promise (http resource)
               return new Promise((resolve, reject) => {
                  setTimeout(() => {
                     resolve([ ..... ]);
                  }, 500);
               })
            }
        });
```

# Configurations
The configuration object will be exposed when initializing the infinite-autocomplete component as the second argument in the type-system typings, so it can help you know what configuration to apply.

```js
    /**
     * data static source
     */
    data?: IOption[];
    /**
     * on-select event output handler when choosing an option
     */
    onSelect?(selectedElement: EventTarget, selectedData: IOption);
    /**
     * max height for the options
     */
    maxHeight?: string;
    /**
     * data dynamic api source
     */
    getDataFromApi?(text: string, page: number, fetchSize: number): Promise<any[]>;
    /**
     * Chunk fetch size
     */
    fetchSize?: number,
    /**
     * Customized input class to override the default input
     */
    customizedInput?: IInputCompoenentConstructor;
    /**
     * Customized options class to override the default input
     */
    customizedOptions?: IOptionsComponentConstructor;
```

# customizedInput/customizedOptions Advanced configuration
Regards the custom implementations, they're targeting the two main component of this plugin, which is: InputComponent, OptionsComponent (The result)

For that you've two classes exported to help you manage correctly extending with your own classes

The Defaults implements these interfaces:

The IInputComponent interface can be defined as:

```js
export interface IInputComponent {
    /**
     * Input component template string
     * @default `<input />`
     */
    render():string;
    /**
     * onInputChange event handler
     * @param inputElement - HTMLInputElement
     * @param value - input text value
     */
    onInputChange?(inputElement:HTMLInputElement, value:string);
}
```

The IOptionsComponent interface can be defined as:

```js
export interface IOptionsComponent {
    /**
     * The list element tag selector
     * This value can be a tag string `ul` `div` `ol` that indicates tag name,
     * or it can be a class selector (or id selector) `.myClass`/`#myId` which is 
     * returned in @render method template
     * @default `ul`
     */
    listElementSelector:string;
    /**
     * Options component template string
     * @default `<ul></ul>` base list tag
     */
    render():string;
    /**
     * Option row template string in Options component
     * @param option
     * @default `<li> ${value} </li>`
     * @requires one base HTML Element
     */
    renderOption(option:IOption):string;
}
```

# Examples
See "Examples" folder

# Developer section
In the package.json scripts we've 4 basic tasks:

`build` - Build the code once

`build:watch` - Build the code and watch for changes [developement]

`test` - Run tests once

`test:watch` - Run tests and watch for changes [developement]
