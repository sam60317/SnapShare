import React from 'react';
import './panel.css';

class Panel extends React.Component {

    constructor(props) {
        super(props);
        const {socket} = this.props
        this.socket = socket
    }

    setSocketListeners() {
        this.socket.on('message', (data) => {
            console.log('message', data.message)
        })

        this.socket.on('message_sent', (message) => {
            console.log('message_sent', message)
            let url = message['body']['link']
            if (!url.match(/^http?:\/\//i) || !url.match(/^https?:\/\//i)) {
                url = 'http://' + url;
            }
            window.location = url;
        })
    }

    componentDidMount() {
        this.setSocketListeners()
    }

    render() {
        return (
            <div className={"bg-img"}></div>
        );
    }
}

export default Panel;