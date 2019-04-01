import InfiniteAutocomplete from '../src';

const config = InfiniteAutocomplete({
    value: 'test',
    data: (text, page, fetchSize) => {
        return new Promise(function(resolve) {
            function reqListener () {
                resolve(JSON.parse(this.responseText));
            }

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "http://localhost:5000/data?text="+ text + "&page=" + page + "&fetchSize=" + fetchSize);
            oReq.onerror = function () {
              alert('Error!');
            };
            oReq.send();
        });
    }
});

window.appInfi = config(document.getElementById('app'));
window.appInfi2 = config(document.getElementById('app2'));
