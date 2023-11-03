import ArrowDown from "./svg/ArrowDown";
const HeaderMenuItem=({name})=>{
    return (
     <div className="item-container">
      <a className="d-fw-semibold .d-lh12">
          {name}
          <ArrowDown/>
      </a>
     </div>   

    );   
}

export default HeaderMenuItem;