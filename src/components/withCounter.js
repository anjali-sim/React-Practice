import React from "react";

const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count:0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count : prevState.count + 1}
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            // {...this.props} - used to pass name from ClickCounter
        }
    }
    return WithCounter
}

export default withCounter