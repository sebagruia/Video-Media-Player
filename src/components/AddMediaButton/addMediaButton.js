import React, { Fragment, useRef } from "react";
import {connect} from "react-redux";
import {getMoviesAction} from "../../redux/movies/movie-action";
import "./addMediaButton.css";
import AddFolderIcon from "../../assets/icons/iconmonstr-folder.png";

const AddMediaButton = ({dispatch}) => {

  const inputRef = useRef(null);

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const onChangeInput = (event) => {
    let movies = {};
    const files = event.target.files;
    const objectsUrlArray = Object.values(files).map((file) => ({
      id: file.name,
      src: window.URL.createObjectURL(file),
      active: "false",
    }));

    for (let object of objectsUrlArray) {
      movies[object.id] = object;
    }

    dispatch(getMoviesAction(movies))
  };


  return (
    <Fragment>
      <img
        onClick={handleImgClick}
        className="small"
        src={AddFolderIcon}
        alt="folder icon"
        role="button"
      />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        type="file"
        multiple
        accept="video/*"
        hidden
      />
    </Fragment>
  );
};

export default connect()(AddMediaButton);
