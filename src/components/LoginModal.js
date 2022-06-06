import React from 'react'
import Login from "./Login"
export default function LoginModal() {
  return (
    <div id='loginmodal' class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-body">
        <Login />
      </div>
      
    </div>
  </div>
</div>
  )
}
