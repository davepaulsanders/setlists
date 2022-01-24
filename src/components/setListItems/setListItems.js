import React from "react";
import { useDispatch } from "react-redux";
import "./setListItems.css";
import { deleteSong } from "../../features/setListSlice";
import { changeBPM } from "../../features/MetronomeSlice";
function SetListItems({ title, bpm, id }) {
  const dispatch = useDispatch();
  const selectSong = (event) => {
    //add something that changes all the stuff inside the selected box

    bpm = Number(bpm);
    dispatch(changeBPM(bpm));
  };
  const handleClick = () => {
    dispatch(deleteSong({ id: id }));
  };

  return (
    <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
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
            </List>
          </Demo>
        </Grid>
      </Grid>
    <div className="setlist-container" onClick={selectSong}>
      <li className="songs-container" id="songs-container">
        <p className="song-details" id="title">
          {title}
        </p>
        <p id="bpm-label">{bpm} BPM</p>
      </li>
    </div>
  );
}

export default SetListItems;
