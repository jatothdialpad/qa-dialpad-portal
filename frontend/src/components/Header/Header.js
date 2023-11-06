import React from 'react'
import ArrowDown from '../../svg/ArrowDown'
import { Link } from 'react-router-dom'
import Dialpad from '../../svg/Dialpad'

function Header() {
    return (
        <>
        <div className="d-jc-center dt-font-weight-semi-bold d-fc-secondary dt-font-family-mono d-bs-sm">
            <div className='d-wmx1268 d-m-auto d-d-flex d-jc-space-between d-jc-center d-py16 d-ai-center'>
                <div className='dialpad-logo'>
                    <Dialpad/>
                </div>
                <div className='d-d-flex d-fd-column d-ai-flex-end'>
                    <div className='avatar d-d-flex d-mb16 d-ai-center'>
                        <Link to="/about" className="d-mr6">
                        Logout
                        </Link>
                        <div className='d-d-flex d-bar-circle d-h32 d-w32 d-bgc-purple-300 d-ta-center d-jc-center d-ai-center d-c-pointer'> RJ</div>
                    </div>
                    <div className='navbar d-d-flex d-jc-flex-end d-divide-x2  d-divide-purple-400'>
                        <div>
                            <Link to="/execute" className="d-px16">
                                Execute
                                </Link>
                        </div>
                        <div>
                            <Link to="/testcoverage" className="d-px16">
                                Testcoverage
                                </Link>
                        </div>
                        <div>
                            <Link to="/reports" className="d-px16">
                                Reports
                                </Link>
                        </div>
                        <div>
                            <Link to="/about" className="about d-px16">
                                About
                                </Link>
                        </div>
                        <div>
                            <Link to="/achievements" className="d-pl16">
                                Achievements
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header