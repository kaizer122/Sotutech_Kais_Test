import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { usersFetchAll } from '../actions';
import UserItem from './UserItem';

class UserList extends PureComponent {

  componentWillMount() {
    this.props.usersFetchAll();
  }

  renderItem(user) {
    return <UserItem user={user.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.users}
        renderItem={this.renderItem}
        keyExtractor = {user => ""+user.id}
      />
    );
  }
}

const mapStateToProps = state => {

  return { users: state.users };
};

export default connect(mapStateToProps , { usersFetchAll })(UserList);
