import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  //   return <li className="tab-item">{displayText}</li>
  const onClickTabId = () => {
    updateTabId(tabId)
  }

  const activeTabBtn = isActive ? 'active-tab-btn' : 'tab-button'
  return (
    <li>
      <button onClick={onClickTabId} className={activeTabBtn} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
