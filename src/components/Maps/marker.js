import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;


// import React from 'react';
// import './Marker.css';

// const Marker = (props: any) => {
//     const { color, name, id } = props;
//     return (
//       <div className="marker"
//         style={{ backgroundColor: color, cursor: 'pointer'}}
//         title={name}
//       />
//     );
//   };

//   export default Marker;