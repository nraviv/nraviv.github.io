/******************************************************************************\
* File: Four04.jsx
*
* Author: Josh Taylor
*
* Description: App 404 Page
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React        from 'react'
import { Link }     from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/Four04.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------

//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <div className="common_Four04">
                <img src="/pics/four04/ghost.png"/>
                <h1>Oopsy daisy!</h1>
                <h2>You’ve found a page that doesn’t exist.</h2>
                <p><Link to="/">[HEAD HOME]</Link></p>
            </div>
        )
    }
})