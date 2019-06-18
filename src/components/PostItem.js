import React, { PureComponent } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectPost , commentShow } from '../actions';

class PostItem extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle } = styles;
    const { post } = this.props;
    return (
      <TouchableOpacity 
        onPress={() => {
          this.props.selectPost(post) 
          this.props.commentShow(post.id)}
          }
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {post.title}
            </Text>
          </CardSection>
      
        </View>
        
      </TouchableOpacity>
      
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 15,
    paddingLeft: 25, 
    paddingRight: 10
  },
};

const mapStateToProps = state => {
  return { selectedPost: state.selectedPost };
};

export default connect(mapStateToProps , {selectPost , commentShow} ) ( PostItem );
