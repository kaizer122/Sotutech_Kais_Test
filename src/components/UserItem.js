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

class UserItem extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderPostItem (post) {
    return (
      <PostItem post = {post.item} />
    );
  }

  renderPosts() {
    const { posts, expanded } = this.props;
    if (expanded) {
      return (
        <View style={{ flex: 1 }}>
    
        <FlatList
        data={posts}
        renderItem={this.renderPostItem}
        keyExtractor = {post => ""+post.id}
        ListHeaderComponent = {<PostHeader title= {"Posts"}/>}
        ListFooterComponent = {<PostFooter/>}
        />      
        </View>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, username } = this.props.user.item;
    return (
      <TouchableWithoutFeedback 
        onPress={() => {
          this.props.selectUser(id);
          this.props.getPostsForUser(id);
        } }
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {username}
            </Text>
          </CardSection>
          {this.renderPosts()}
        </View>
        
      </TouchableWithoutFeedback>
      
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15, 
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedUser === ownProps.user.item.id;

  return {
    expanded ,
    posts: state.posts
  };
};

export default connect(mapStateToProps , { getPostsForUser, selectUser })(UserItem);
