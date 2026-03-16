import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import ActionButtons from '../components/ActionButtons.jsx'
import SlidePanel from '../components/SlidePanel.jsx'

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)

  return (
    <div className="dashboard">
      <Navbar dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />

      <main className="dashboard-main">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header-inner">
            <h1 className="page-title">
              UI Test Harness
              <span className="page-title-tag">v1.0</span>
            </h1>
            <p className="page-subtitle">
              Automation testing surface — all interactive elements carry stable IDs.
            </p>
          </div>

          {/* Test checklist */}
          <div className="test-checklist">
            <div className="checklist-title">TEST SCENARIOS</div>
            <ul className="checklist">
              <li><span className="check">①</span> Verify normal button click</li>
              <li><span className="check">②</span> Verify dropdown opens via <code>#profileBtn</code></li>
              <li><span className="check">③</span> Verify <code>#logoutBtn</code> inside dropdown</li>
              <li><span className="check">④</span> Verify slide panel opens via <code>#openPanelBtn</code></li>
              <li><span className="check">⑤</span> Verify slide panel closes via <code>#closePanelBtn</code></li>
              <li><span className="check">⑥</span> Verify message toggle via <code>#toggleMessageBtn</code></li>
            </ul>
          </div>
        </div>

        {/* Selector Reference Table */}
        <div className="selector-table-wrapper">
          <div className="section-label">
            <span className="label-line" />
            <span className="label-text">SELECTOR MAP</span>
            <span className="label-line" />
          </div>
          <table className="selector-table">
            <thead>
              <tr>
                <th>ID Selector</th>
                <th>Element</th>
                <th>Trigger</th>
                <th>Expected Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>#profileBtn</code></td>
                <td>Button</td>
                <td>Click</td>
                <td>Opens profile dropdown</td>
              </tr>
              <tr>
                <td><code>#profileDropdown</code></td>
                <td>Div</td>
                <td>Visibility check</td>
                <td>Visible only when dropdown open</td>
              </tr>
              <tr>
                <td><code>#logoutBtn</code></td>
                <td>Button</td>
                <td>Click</td>
                <td>Triggers logout, closes dropdown</td>
              </tr>
              <tr>
                <td><code>#openPanelBtn</code></td>
                <td>Button</td>
                <td>Click</td>
                <td>Slides in right panel</td>
              </tr>
              <tr>
                <td><code>#slidePanel</code></td>
                <td>Aside</td>
                <td>Visibility check</td>
                <td>Visible when panel is open</td>
              </tr>
              <tr>
                <td><code>#closePanelBtn</code></td>
                <td>Button</td>
                <td>Click</td>
                <td>Closes the slide panel</td>
              </tr>
              <tr>
                <td><code>#normalActionBtn</code></td>
                <td>Button</td>
                <td>Click</td>
                <td>Shows alert + console log</td>
              </tr>
              <tr>
                <td><code>#toggleMessageBtn</code></td>
                <td>Button</td>
                <td>Click</td>
                <td>Shows/hides message block</td>
              </tr>
              <tr>
                <td><code>#toggleMessage</code></td>
                <td>Div</td>
                <td>Visibility check</td>
                <td>Visible when toggled on</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <ActionButtons
          setPanelOpen={setPanelOpen}
          messageVisible={messageVisible}
          setMessageVisible={setMessageVisible}
        />
      </main>

      {/* Slide Panel */}
      <SlidePanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} />
    </div>
  )
}

export default Dashboard
