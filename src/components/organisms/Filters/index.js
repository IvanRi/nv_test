import React from "react";
import styled from "styled-components";
//atoms
import Paper from "../../atoms/Paper";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Collapsible from "../../atoms/Collapsible";
import Tag from "../../atoms/Tag";
//components
import RadioButtonGroup from "../../molecules/RadioButtonGroup";
import { IoSearch } from "react-icons/io5";
import { connect } from "react-redux";
import {
  changeCurrentFilters,
  setSearchKeyword,
} from "../../../actions/postingsActions";

const Filters = ({
  currentFilters,
  _changeCurrentFilters,
  _setSearchKeyword,
}) => {
  const locationFormSubmit = (event) => {
    event.preventDefault();
    const keyword = event.target[0].value;
    _setSearchKeyword(keyword);
  };

  return (
    <Paper>
      <ContentLayout>
        <h3>Filtrado actual</h3>
        <div className="tagsContainer">
          {currentFilters.map((item, i) => (
            <Tag key={i} label={item} />
          ))}
        </div>
        <Collapsible title="Dirección">
          <form className="locationGroup" onSubmit={locationFormSubmit}>
            <Input placeholder="Buscar por dirección" withCancel />
            <Button className="searchButtonLayout">
              <IoSearch className="searchIcon" />
            </Button>
          </form>
        </Collapsible>
        <Collapsible title="Tipo de operación">
          <RadioButtonGroup
            currentFilters={currentFilters}
            handleChange={_changeCurrentFilters}
          />
        </Collapsible>
      </ContentLayout>
    </Paper>
  );
};

const mapStateToProps = ({ postings }) => postings;

const mapDispatchToProps = (dispatch) => {
  return {
    _changeCurrentFilters: (filterType) =>
      dispatch(changeCurrentFilters(filterType)),
    _setSearchKeyword: (keyword) => dispatch(setSearchKeyword(keyword)),
  };
};

const ContentLayout = styled.div`
  padding: 1rem;

  .searchButtonLayout {
    margin-left: 0.5rem;
  }

  .tagsContainer {
    display: flex;
    flex-wrap: wrap;
  }

  .locationGroup {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .searchIcon {
    font-size: 1.2rem;
    color: #1da1cc;
  }

  h3 {
    font-weight: bold;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
