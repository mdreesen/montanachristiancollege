import NavigationTop from "./NavigationTop";
import NavigationMain from "./NavigationMain";

export default function Layout({ children }) {
    return (
        <div>
        <NavigationTop/>
        <NavigationMain/>
        {children}
        </div>
    );
  }