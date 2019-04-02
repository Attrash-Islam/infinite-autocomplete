import InfiniteAutocomplete from '../src';

const config = InfiniteAutocomplete({
    value: 'test',
    data: (text, page, fetchSize) => {
        return new Promise(function(resolve) {
            fetch(`http://localhost:5000/data?text=${text}&page=${page}&fetchSize=${fetchSize}`)
            .then((response) => response.json())
            .then((options) => resolve(options))
        });
    }
});

window.appInfi = config(document.getElementById('app'));
window.appInfi2 = config(document.getElementById('app2'));
