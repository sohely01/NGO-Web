import React from 'react'

const HeroAbout = () => {
  return (
    <div>
    <div className="pager-header">
         <div className="container">
             <div className="page-content">
                 <h2>About Us</h2>
                 <p>Help today because tomorrow you may be the one who <br />needs more helping!</p>
                 <ol className="breadcrumb" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
<li className="breadcrumb-item" style={{ marginRight: '8px' }}>
 <a href="index.html" style={{ textDecoration: 'none', color: 'white'}}>Home</a>
</li>
<li className="breadcrumb-item active" style={{ color: '#e64a19', marginTop:'7px' }}>About</li>
</ol>

             </div>
         </div>
     </div>
 </div>
  )
}

export default HeroAbout
