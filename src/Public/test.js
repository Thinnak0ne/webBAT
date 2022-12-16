// import React,{useState} from 'react'

// import Carousel from "react-grid-carousel";
// export default function test() {
//     const [info, setInfo] = useState (0);
//   return (
//     <div>
//         <Carousel
//               cols={3}
//               rows={2}
//               responsiveLayout={[
//                 {
//                   breakpoint: 1070,
//                   cols: 2,
//                 },
//                 {
//                   breakpoint: 740,
//                   cols: 1,
//                   rows: 1,
//                 },
//               ]}
//               mobileBreakpoint={390}
//               style={{ display: "flex", justifyContent: "center",backgroundColor:'red' }}
//               loop
//             >
//               {info.map((row) => (
//                 <Carousel.Item key={row.ID}>
//                   <div
//                    style={{ display: "flex", justifyContent: "center" }}
//                     className="ctnhome"
//                   >
//                     <div
//                       className="boxhbeta"
//                       style={{ width: "100%" }}
//                     >
//                       <div className="boximghbeta">
//                         {" "}
//                         <img
//                           className="pfnimghbeta"
//                           src={
//                             "https://rest.freelanzar.com/api/getCourseImg/" +
//                             row.userphotoid
//                           }
//                           alt=""
//                         />{" "}
//                       </div>

//                       <div className="texthome1">{row.FirstName}</div>
//                       <div className="texthome1">{row.Detail}</div>
//                       <div className="namfl">
//                         <div className="tx">{row.Detail}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//     </div>
//   )
// }
