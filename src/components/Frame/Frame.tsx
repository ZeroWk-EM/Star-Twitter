interface IFrame {
  color?: string;
  children?: JSX.Element;
}

export const Frame = (props: IFrame) => {
  const { color="gray", children } = props;
  return (
    <div style={{ margin:"5px 0px", padding: "1px", border: `1px solid ${color}`, borderRadius: "10px" }}>
      {children}
    </div>
  );
};
