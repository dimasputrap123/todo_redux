import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { get_post } from "../../../redux/action/postAction";

export class ListAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    console.log("apa props", this.props);
    this.props.get_post();
    // RequesGet(url.posts, {
    //   // postId: 1,
    // }).then((res) => {
    //   this.setState({
    //     data: res,
    //   });
    // });
  }

  _navigate = (postId) => {
    // console.log("props", dest);
    this.props.history.push("/list-photos", { postId });
  };

  render() {
    const { data } = this.state;
    const { classes, post } = this.props;
    console.log("res album", this.props);
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text
            </Typography>
            <div className={classes.demo}>
              <List>
                {post.length > 0 &&
                  post.map((el, id) => (
                    <a key={id} onClick={() => this._navigate(el.id)}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={el.title} secondary={el.body} />
                      </ListItem>
                    </a>
                  ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: "#fff",
  },
  title: {
    margin: 2,
  },
};

const mapState = ({ postReducer }) => ({
  post: postReducer.post,
});
const mapDispatch = {
  get_post,
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapState, mapDispatch)
)(ListAlbums);
