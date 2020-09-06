import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Button from "react-bootstrap/esm/Button";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const ToolCheckout = ({ name, amount, price, onAdd, onRemove }) => {
  return (
    <div className="request_item_div">
      <List className="request_item">
        <React.Fragment>
          <ListItem>
            <ListItemText className="request_item_number" primary={amount} />
            <ListItemText className="request_member_name" primary={name} />
            {price && (
              <ListItemText className="request_item_number" primary={price} />
            )}
            <Button
              className="small request_item_button"
              onClick={onAdd.bind(this, [name, amount])}
            >
              Add Another
            </Button>
            <Button
              className="small request_item_button"
              onClick={onRemove.bind(this, [name, amount])}
            >
              Remove One
            </Button>
          </ListItem>
        </React.Fragment>
      </List>
    </div>
  );
};

export default ToolCheckout;
