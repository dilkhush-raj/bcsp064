import { ActiveLink, HomeLink } from "@/components/Navbar";
import { adminNavLinks } from "@/utils/constant"

export default async function RootLayout({ children }) {
    return (
      <>
      <Navigation />
      {children}
      </>
    );
  }

function Navigation(){
    return(
        <div className="flex gap-2 p-2 shadow-md flex-wrap font-medium ">
            <HomeLink route={"/admin"} />
            {adminNavLinks?.map((route, index) => (
                <ActiveLink key={index} href={route?.route} label={route?.label} icon={route?.icon} />
            ))}
        </div>
    )
}