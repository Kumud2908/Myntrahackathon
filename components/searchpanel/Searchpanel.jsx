import "./Searchpanel.css"
import{Search} from "@mui/icons-material"

export default function Searchpanel() {
  return (
    <div className="search-panel">
        <div className="searchbar">
          
          <input placeholder="Search for any influencer" className="searchInput"/>
          <Search htmlColor="gray" className="searchIcon"/>
        </div>
      </div>
  )
}
