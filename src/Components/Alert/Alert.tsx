import React from 'react';

interface Props{
  show: boolean;
  type: string;
  onDismiss: () => void;
}
const Alert:React.FC<Props> = ({show, type, onDismiss}) => {
  const style = `d-flex justify-content-between alert alert-${type}`
  let el = null;
  if(onDismiss === undefined){
    let el =
      <button className="btn btn-close" style={{display:"block"}}></button>
  }else {
    el = <button className="btn btn-close" onClick={onDismiss}></button>
  }
  return (
    <div role="alert" style={{display: show ? 'block' : 'none'}}>
      <div className={style}>
        <p style={{display: "inline"}}>A simple success alert with <a href="#" className="alert-link">an example
          link</a>. Give it a click if you like.</p>
        {el}
      </div>
    </div>
  );
};

export default Alert;