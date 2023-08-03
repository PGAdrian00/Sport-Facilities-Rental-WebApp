import React from 'react'

function UserMenu({ onLogout }) {
    return (
      <div className="user-menu">
        <button onClick={onLogout}>Iesi din cont</button>
      </div>
    );
  }

export default UserMenu
  