import "./style.css";
const TopNav = () => {
  return (
    <nav class="top_bar">
    <div class="container">
        <div class="contact_info">
            <ul type="none">
                <li><i class="fa-brands fa-joomla"></i> Easy Learning</li>
            </ul>
        </div>

    </div> 

    <div class="select_info">
<select>

   <li> <option><i class="fa-solid fa-globe"></i>Global</option></li>
    <option value="Nepal">Nepal</option>
    <option value="India">India</option>
    <option value="Brazil">Brazil</option>
    <option value="China">China</option>
    <option value="Korea">Korea</option>
    <option value="Australia">Australia</option>
    <option value="Thailand">Thailand</option>
    <option value="America">America</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Japan">Japan</option>


</select>
</div>
  
</nav>
  );
};

export default TopNav;
