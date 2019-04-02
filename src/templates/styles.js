const styles = `
.infinite-autocomplete-wrapper {
    position: relative;
}
  
.infinite-autocomplete-wrapper input {
    height: 28px;
    border-radius: 8px;
    width: 100%;
    text-indent: 3px;
}

.infinite-autocomplete-wrapper ul {
    position: absolute;
    z-index: 10;
    overflow: hidden scroll;
    background: white;
    border: 1px solid rgb(188, 188, 188);
    padding-bottom: 5px;
    max-height: 160px;
    list-style-type: none;
    margin-top: 0;
    padding-left: 0;
    margin-bottom: 0;
    transform: translateY(5px) translateZ(0px);
}

.infinite-autocomplete-wrapper ul.hidden {
    display: none;
}

.infinite-autocomplete-wrapper ul li {
    padding: 5px 10px 10px 10px;
    cursor: pointer;
}

.infinite-autocomplete-wrapper ul li:hover {
    background: #d5ebff;
}

.infinite-autocomplete-wrapper i.loader {
    display: none;
    position: absolute;
    z-index: 1;
}
`;

export default styles;
