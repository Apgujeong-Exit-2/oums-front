interface props {
  height: number;
}

const GapDiv = (props: props) => {
  return <div style={{ height: props.height }} />;
};

export default GapDiv;
