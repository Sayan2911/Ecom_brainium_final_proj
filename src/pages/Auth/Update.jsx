import React from 'react'
import useStore from '../../useStore'

const Update = () => {
    const {name ,email}=useStore()
  return (
    <>
    <div className='m-5 d-flex justify-content-between align-items-center'>
        <div>Home/My Accounts</div>
        <div>welcome {name}</div>
    </div>
   <div className='m-5 d-flex justify-content-center align-items-center'>
    
    <div style={{width:"20%" ,listStyle:"none"}}>
        <ul>
            <h6>Manage My Account</h6>
<ol>

            <li style={{listStyle:"none"}}>My profile</li>
            <li style={{listStyle:"none"}}>My AddressBook</li>
            <li style={{listStyle:"none"}}>My Payment Option</li>
</ol>

            <h6>My Orders</h6>
<ol>
            <li style={{listStyle:"none"}}>My Returns</li>
            <li style={{listStyle:"none"}}>My Cancelations</li>
</ol>
             
             <h6>My Wishlist</h6>


        </ul>
    </div>
     
     <div style={{width:"70%" ,listStyle:"none"}}>
     <div className="container mt-5 ">
        <div className="form-section">
            <h3>Edit your profile</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter first name" value={name}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter last name" value={name}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter address"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="form-section ">
            <p>Password Changes</p>
            <div className="form-group">
     
                <input type="password" className="form-control my-2" id="currentPassword" placeholder="Enter current password"/>
            </div>
            <div className="form-group">
        
                <input type="password" className="form-control my-2" id="newPassword" placeholder="Enter new password"/>
            </div>
            <div className="form-group">
               
                <input type="password" className="form-control my-2" id="reenterNewPassword" placeholder="Re-enter new password"/>
            </div>
            <div classNameName="form-section d-flex justify-content-end">
            <button type="button" className="btn btn-secondary m-2">Cancel</button>
            <button type="button" className="btn btn-danger m-2">Save Changes</button>
        </div>
        </div>
    </div>

     </div>
     </div> 
    </>
  )
}

export default Update