import UserNav from "./UserNav";
import BackToTheTop from "./BackToTheTop";
const Layout = ({children}) => {
    return ( 
        <div className="content">
            <UserNav />
            {children}
            <BackToTheTop />
        </div>
     );
}
 
export default Layout;