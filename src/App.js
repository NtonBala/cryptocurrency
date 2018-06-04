import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div id='container'>
            <table>
                <caption>Crypto Currencies Live Table</caption>
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
