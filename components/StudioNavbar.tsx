import "../app/globals.css";
import { StudioNavbar } from "sanity";
import ButtonReturn from "./Buttons";

function MyStudioNavbar() {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <ButtonReturn to="/" title="Go to website" />
      </div>
      <>
        <StudioNavbar />
      </>
    </div>
  );
}

export default MyStudioNavbar;
