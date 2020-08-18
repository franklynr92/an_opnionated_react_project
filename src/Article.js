import React, { Component } from 'react';
import Comment from './Comment'


class Article extends Component {
    render() {
        return (
            <div>
                Dear Reader: Bjarne Sroustrup has the perfect lecture oration.
                <Comment />
            </div>
        )
    }
}

export default Article