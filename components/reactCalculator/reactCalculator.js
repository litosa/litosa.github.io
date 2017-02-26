class Output extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sum,
            input1 = this.props.input1,
            input2 = this.props.input2,
            operator = this.props.operator;

        switch (operator) {
            case '+':
                sum = input1 + input2;
                break;
            case '-':
                sum = input1 - input2;
                break;
            case '*':
                sum = input1 * input2;
                break;
            case '/':
                sum = input1 / input2;
                break;
        }

        if (isNaN(input1) || isNaN(input2)) {
            sum = 'Not valid input'
        }

        return (
            <div>
                Total: {sum}
            </div>
        );
    }
}

class Input extends React.Component {

    handleChangeNumber(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.onChangeNumber(name, value)
    };

    handleChangeOperator(event) {
        const value = event.target.value;
        this.props.onChangeOperator(value)
    };

    render() {

        return (

            <div>
                <div className="form-group">
                    <select value={this.props.operator} onChange={this.handleChangeOperator.bind(this)}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                    </select>
                </div>

                <div className="form-group">
                    <input className="form-control"
                        type="number"
                        value={this.props.input1}
                        name="input1"
                        onChange={this.handleChangeNumber.bind(this)} />
                </div>
                <div className="form-group">
                    <input className="form-control"
                        type="number"
                        value={this.props.input2}
                        name="input2"
                        onChange={this.handleChangeNumber.bind(this)} />
                </div>
            </div>
        );
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input1: 0, input2: 0, operator: '+' };
    }

    handleChangeNumberInput(name, value) {
        if (name === 'input1') {
            this.setState({ input1: parseFloat(value) });
        }
        if (name === 'input2') {
            this.setState({ input2: parseFloat(value) });
        }
    }

    handleChangeOperator(operator) {
        this.setState({ operator: operator });
    }

    render() {

        return (

            <div className="col-sm-4 col-sm-offset-4">
                <div className="form-group">
                    <Input operator={this.state.operator}
                        input1={this.state.input1}
                        input2={this.state.input2}
                        onChangeNumber={this.handleChangeNumberInput.bind(this)}
                        onChangeOperator={this.handleChangeOperator.bind(this)} />
                </div>

                <div className="form-group">
                    <Output operator={this.state.operator}
                        input1={this.state.input1}
                        input2={this.state.input2} />
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('app')
);