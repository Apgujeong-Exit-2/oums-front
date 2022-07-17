interface IProps {
  height?: number;
  width?: number;
}

const GapDiv = (props: IProps) => {
  return <div style={{ height: props.height, width: props.width }} />;
};

export default GapDiv;
