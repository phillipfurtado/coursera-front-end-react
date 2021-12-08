import { Component } from "react";
import {
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          className="card"
          key={dish.id}
          onClick={() => this.onDishSelect(dish)}
        >
          <CardImg src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle tag="h5">{dish.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {dish.description}
            </CardSubtitle>
          </CardBody>
        </div>
      );
    });

    return (
      <>
        <div class="container-fluid">
          <CardGroup>{menu}</CardGroup>
        </div>
        <div class="container-sm">
          <DishDetail dish={this.state.selectedDish} />
        </div>
      </>
    );
  }
}

export default Menu;
