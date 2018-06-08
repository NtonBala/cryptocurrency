import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const socket = io('https://streamer.cryptocompare.com/');
        const subscription = ['2~Poloniex~DOGE~USD', '2~Poloniex~ZEC~USD', '2~Poloniex~BTS~USD'];
        socket.emit('SubAdd', {subs: subscription});
        socket.on('m', message => {
            console.log(message.split('~'));
        });

    }
    render() {
        return (
            <div id='container'>
                <table>
                    <caption>Live Crypto Currencies Quotes</caption>
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Icon</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Number">1</td>
                            <td data-label="Icon">icon</td>
                            <td data-label="Name">BitCoin</td>
                            <td data-label="Price">5000 $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
