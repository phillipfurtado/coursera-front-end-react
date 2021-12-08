import { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  ListGroup,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    if (comments != null) {
      const list = comments.map((comment) => {
        return (
          <div>
            <ul className="list-unstyled" key="comment.id">
              <li>{comment.comment}</li>
              <li className="list-inline-item">-- {comment.author} , </li>
              <li className="list-inline-item">
                {" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          </div>
        );
      });

      return list;
    } else return <div />;
  }

  renderDish() {
    if (this.props.dish != null)
      return (
        <Card>
          <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {this.props.dish.description}
            </CardSubtitle>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderDishDetails() {
    if (this.props.dish != null) {
      return (
        <Card>
          <CardBody>
            <CardTitle tag="h4">Comments</CardTitle>
            <ListGroup flush>
              {this.renderComments(this.props.dish?.comments)}
            </ListGroup>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <div>{this.renderDish()}</div>
        </div>
        <div className="col-12 col-md-5 m-1">
          <div> {this.renderDishDetails()}</div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
