import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import Sidebar from '../sidebar/sidebar';


class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>I'm the dashboard</h1>
        <SidebarContainer />
      </div>
    )
  }
}

export default Dashboard;
