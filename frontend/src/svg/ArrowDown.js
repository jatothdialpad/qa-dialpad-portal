function ArrowDown(props) {
    const show=props.rotate?"rotation":"";
    return ( 
        <svg aria-hidden="true" role="img" data-name="Chevron Down" className={`d-icon d-icon--chevron-down ${show}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="currentColor" fillRule="evenodd" d="M2.646 4.146a.5.5 0 0 1 .708 0L6 6.793l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708Z" clipRule="evenodd"/></svg>
     );
}

export default ArrowDown;