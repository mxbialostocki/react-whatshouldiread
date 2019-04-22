import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Reviews from './Reviews'
import Resting from './Resting'
import Main from './Main'
import ReviewFrame from './ReviewFrame'
import Covers from './Covers'

class AppRoutes extends React.Component {
  render () {
    return (
      <div>
        <Switch>

          <Route exact path='/' component={Resting} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/alllist' component={ReviewFrame} />
          <Route exact path='/allcovers' component={Covers} />

        </Switch>
      </div>
    )
  }
}

export default AppRoutes

{ /* <Route exact path='/' render={props => (
            <Posts
              posts={this.props.posts}
              fetchPosts={this.props.fetchPosts}
              {...props}
            />
          )} />
          <Route path='/posts/new' render={(props) => (
            <PostForm
              fetchPosts={this.props.fetchPosts}
              {...props}
            />
          )} />
          <Route path='/posts/edit/:id' render={(props) => (
            <PostForm
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post => (
                post.id === Number(props.match.params.id))
              )}
              {...props}
            />
          )} />
          <Route path='/posts/:id' render={props => (
            <Post
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find((post) =>
                post.id === Number(props.match.params.id)
              )}
              {...props}
            />
          )} />
          <Route path='/posts/:postId/comments/:commentId' render={(props) => (
            <Post
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post => (
                post.id === Number(props.match.params.id)
              ))}
              {...props}
            />
          )} /> */ }
