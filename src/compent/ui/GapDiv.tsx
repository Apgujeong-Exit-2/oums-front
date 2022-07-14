interface props {
  height?: number;
  width?: number;
}

const GapDiv = (props: props) => {
  return <div style={{ height: props.height, width: props.width }} />;
};

export default GapDiv;
