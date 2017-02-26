function Word(props) {

    const words = props.wordList.map((word, index) =>
        <div key={index}>
            {word.name} = {word.translation}
        </div>
    );
    return (
        <div>
            {words}
        </div>
    );
}

const wordList = [
    { name: 'katt', translation: 'cat' },
    { name: 'hav', translation: 'ocean' },
    { name: 'hund', translation: 'dog' },
    { name: 'ananas', translation: 'pineapple' }
];

ReactDOM.render(
    <Word wordList={wordList} />,
    document.getElementById('app')
);

