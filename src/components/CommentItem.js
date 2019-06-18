import React, { PureComponent } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection , PostHeader , PostFooter } from './common';
import { getPostsForUser , selectUser } from '../actions';
import PostItem from './PostItem';

class CommentItem extends PureComponent {

  render() {
    const { titleStyle , descriptionStyle } = styles;
    const { comment } = this.props;
    console.log (comment);
    return (

          <CardSection>
            <Text style={titleStyle}>
              {comment.email}
            </Text>
            <Text style= {descriptionStyle}>
              {comment.body}
            </Text>
          </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 2, 
    fontWeight: "bold",
    color: "#abab"
  },
  descriptionStyle: {
    paddingHorizontal: 5,
    paddingBottom : 5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
};



export default connect()(CommentItem);
