export default (props) => {
  return (<List dense={dense}>
      {generate(
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText
            primary="Single-line item"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>,
      )}
    </List>);
}