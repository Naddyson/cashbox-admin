import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

class Tables extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}>

                {
                    _.map(this.props.data, (item) => {
                        console.log(item)
                        return (
                            <div style={{ flexDirection: 'row' }}>
                                <table>
                                    <tr>
                                        <td className='table-head'>Name</td>
                                        <td>{item.username}</td>
                                    </tr>
                                    <tr>
                                        <td className='table-head'>City</td>
                                        <td>{item.city}</td>
                                    </tr>
                                    <tr>
                                        <td className='table-head'>Start</td>
                                        <td>{item.startTime.substring(11,19)}</td>
                                    </tr>
                                    <tr>
                                        <td className='table-head'>Finish</td>
                                        <td>{
                                            (()=> {
                                                if (item.finishTime) {
                                                    return item.finishTime.substring(11,19);
                                                } else {
                                                    return <div style={{ backgroundColor: 'green'}}>ACTIVE</div>
                                                }
                                            })()
                                        }</td>
                                    </tr>
                                    <tr>
                                        <td className='table-head'>$ Cash</td>
                                        <td>{item.cash}</td>
                                    </tr>
                                    <th colSpan={2} style={{ width: '100%', textAlign: 'center', backgroundColor: 'gray'}}>
                                        History
                                    </th>
                                    <tr>
                                        <td>Time</td>
                                        <td>Gain</td>
                                    </tr>
                                    {
                                        _.map(item.history, (single) => {
                                            console.log(single.date);
                                            return (
                                                <tr>
                                                    <td>{single.date._d.substring(11,19)}</td>
                                                    <td>{single.cashChange}</td>
                                                </tr>
                                            )
                                        }

                                        )
                                    }
                                </table>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

Tables.propTypes = {};

export default Tables;
