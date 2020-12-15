export const theme = {
  palette: {
    orange: "#f1763b",
    darkOrange: "#b7582b",
    background: "#e8e8e8",
    shadow: "0px 0px 19px -5px rgba(0,0,0,0.75)",
  },
  layout: {
    pageWidth: "1240px",
    symmetricalMargin: ".5rem",
  },
  buttonVariants: {
    default: `border: 2px solid whitesmoke;
        background-color: transparent;
        :hover{
            background-color:whitesmoke;
        }`,
    primary: `border:none;
        background-color: #f1763b;
        color:white;
        :hover{
            background-color:#b7582b;
        }`,
  },
  publicationVariants: {
    SUPERHIGHLIGHTED: `border-top:3px solid #8d32e8`,
    HIGHLIGHTED: `border-top:3px solid #4ac393`,
    SIMPLE: `border:none`,
  },
};
