import React, { PureComponent } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection , Card , CardSectionHeader } from './common';
import  CommentItem  from './CommentItem';

class PostDetail extends PureComponent {


    renderComment(comment) {
        return <CommentItem comment={comment.item} />;
      }

    render () {
        const { selectedPost , comments } = this.props;
        return (
            <Card>
                <CardSection>
                  <Text style = {styles.commentsHeaderStyle}>{selectedPost.title}</Text>
                  <Text>{selectedPost.body}</Text>
                  </CardSection>
                  <CardSectionHeader>
                  <Text style = {styles.commentsHeaderStyle}>Comments</Text>
                  </CardSectionHeader>
                  <FlatList
                    data={comments}
                    renderItem={this.renderComment}
                    keyExtractor = {comment => ""+comment.id}
                  />
            </Card>
            
        );
    };
}

const styles = StyleSheet.create( {
    commentsHeaderStyle: {
        fontSize: 24,
        paddingVertical : 5,
        fontWeight: "bold",
    },
    postBody : {
        fontSize: 12,
    },
    commentName: {

    },
});

const mapStateToProps = state => {
    return { selectedPost: state.selectedPost,
             comments: state.comments            
    };
  };
  
  export default connect(mapStateToProps , null ) ( PostDetail );

