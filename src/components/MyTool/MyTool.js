import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const CheckoutTool = (props) => {
  const [open, setOpen] = React.useState(false);

  // TODO We should add the ability to send a message to a tool that's checked in.
  const handleItemClick = () => {
    setOpen(!open);
  };

  return (
    <div className="tool_item_div">
      <List className="tool_item">
        <ListItem button onClick={handleItemClick}>
          <ListItemText className="tool_name" primary={props.name} />
          <ListItemText className="workstation" primary={props.status} />
          {props.status !== "Processing" && props.canCheckbox && (
            <Checkbox
              onChange={(event) => {
                setOpen(!open);
                event.stopPropagation();
                props.selectHandler();
              }}
            />
          )}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="tool_expanded-view">
            <div className="tool_expanded-view-left">{props.children}</div>
          </div>
        </Collapse>
      </List>
    </div>
  );
};

export default CheckoutTool;
