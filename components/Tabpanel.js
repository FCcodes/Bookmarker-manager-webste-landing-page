import PropTypes from "prop-types"

export default function TabPanel(props) {
  const { children, value, label, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== label}
      id={`simple-tabpanel-${label}`}
      aria-labelledby={`simple-tab-${label}`}
      {...other}
    >
      {value === label && <>{children}</>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
