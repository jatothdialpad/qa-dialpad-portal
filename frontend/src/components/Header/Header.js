import React from 'react'
import ArrowDown from '../../svg/ArrowDown'
import { Link } from 'react-router-dom'
import Dialpad from '../../svg/Dialpad'

function Header() {
    return (
        <>
            <div className="container-flex d-jc-space-around dt-font-weight-semi-bold .d-fc-secondary dt-font-family-mono d-bs-sm">
                <div className='dialpad-logo d-d-flex'>
                    <Dialpad/>
                </div>
                <div className='navbar d-d-flex d-jc-flex-end'>
                    <div>
                        <Link to="/execute" className="">
                            Execute
                             </Link>
                    </div>
                    <div>
                        <Link to="/testcoverage" className="">
                            Testcoverage
                             </Link>
                    </div>
                    <div>
                        <Link to="/reports" className="">
                            Reports
                             </Link>
                    </div>
                    <div>
                        <Link to="/about" className="about">
                            About
                            </Link>
                    </div>
                    <div>
                        <Link to="/achievements" className="">
                            Achievements
                            </Link>
                    </div>
                    </div>
                    <div className='d-d-flex'>
                        <div className='navbar'>
                           <Link to="/about" className="">
                            Logout
                            </Link>
                        </div>
                        <div className='d-bar-circle d-h32 d-w32 d-bgc-purple-300 d-ta-center'> RJ</div>
                    </div>
                </div>
        
        </>
    )
}

export default Header