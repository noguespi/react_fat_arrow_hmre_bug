import React from 'react';

export default class Note extends React.Component {

    render() {
        return <div>Note {this.props.name}</div>;
    }

}