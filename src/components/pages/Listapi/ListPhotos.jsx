import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { RequesGet } from "../../../config/api/request";
import url from "../../../config/api/url";

export class ListPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      comments: [],
    };
  }
  componentDidMount() {
    const { postId } = this.props.history.location.state;
    // console.log("props", this.props.history.location.state);
    RequesGet(url.posts + "/" + postId, {
      postId,
    }).then((res) => this.setState({ post: res }));
  }

  _openComments = () => {
    const { postId } = this.props.history.location.state;
    // console.log("props", this.props.history.location.state);
    RequesGet(url.comments, {
      postId,
      _limit: 2,
    }).then((res) => this.setState({ comments: res }));
  };

  render() {
    const { classes } = this.props;
    const { post, comments } = this.state;
    return (
      <div>
        {post && (
          <>
            <Typography variant="h4" className={classes.title}>
              {post.title}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              {post.body}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this._openComments}
            >
              Buka comments
            </Button>
          </>
        )}
        {comments.length > 0 && (
          <List className={classes.root}>
            {comments.map((el, id) => (
              <div key={id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={el.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {el.email}
                        </Typography>
                        {" — " + el.body}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
          </List>
        )}
      </div>
    );
  }
}

const styles = {
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: "#b2b2b2",
  },
  demo: {
    backgroundColor: "#fff",
  },
  title: {
    margin: 2,
  },
};

export default compose(withStyles(styles), withRouter)(ListPhotos);
