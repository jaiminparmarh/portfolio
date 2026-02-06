import Frontend from "../Skills/Frontend";
import Backend from "../Skills/Backend";
import Tools from "../Skills/Tools";
import Creativeskills from "../Skills/Creativeskills";
import LanguageChart from "./LanguageChart";

export default function Skills() {

  return (
   <div className="section">
      <h1 style={{marginTop:"-20px"}}>My Technical & Creative Skills</h1>
        <LanguageChart/>
        <Frontend/>
        <Backend/>
        <Tools/>
        <Creativeskills/>
    </div>
  );
}