import React from 'react'

export type PropTypes = {
  overlay: boolean;
  className: string;
  close(): void;
  children: React.ReactNode;
}

const Popup: React.FunctionComponent<PropTypes> = () => {
  return (
    <div>

    </div>
  )
}

export default Popup
