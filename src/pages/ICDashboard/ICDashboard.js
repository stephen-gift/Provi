import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sidelogo.svg";
import { FaChartPie, FaCog, FaUserTie } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { TbFileDigit } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

function ICDashboard() {
  return (
    <div className="w-full min-h-screen bg-bggray flex relative">
      {/* Sidebar */}
      <div className="bg-siblack w-1/4 max-w-[255px] h-screen sticky top-0 overflow-y-auto no-scrollbar">
        <div className="py-8 px-6 pr-12 w-full select-none">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        {/* Nav Container */}
        <div className="py-12 flex flex-col h-full overflow-y- scroll-">
          {/* Main Navs */}
          <nav>
            <ul>
              <li>
                <NavLink to="/ic-dashboard" className="nav">
                  <FaChartPie />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/request" className="nav">
                  <FaUserTie />
                  <span>Request</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/printed-cards" className="nav">
                  <AiFillPrinter />
                  <span>Printed Cards</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reports" className="nav">
                  <TbFileDigit />
                  <span>Reports</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Other Navs */}
          <nav className="flex-1 flex items-center">
            <ul className="w-full">
              <li className="border-t border-t-grayScale border-opacity-10">
                <NavLink to="/settings" className="nav">
                  <FaCog />
                  <span>Settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" className="nav">
                  <FiLogOut className="logout-btn" />
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="w-3/4 ml-asuto ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae
        deserunt error autem magni excepturi quam iusto quaerat, id est delectus
        numquam doloremque voluptates aliquid temporibus ex voluptate velit
        explicabo aspernatur blanditiis aut, similique impedit eius quasi!
        Quidem totam illum asperiores reprehenderit obcaecati. Cumque eum
        repellendus inventore ipsum rerum veniam impedit quam sunt molestias
        dolores ipsa officia debitis fuga temporibus fugiat, unde adipisci sed
        ex incidunt minima accusamus porro tempora iste! Laboriosam eum
        dignissimos ullam rerum corrupti veritatis, animi modi sed quam eveniet
        officia necessitatibus dicta nostrum incidunt perspiciatis delectus
        illum hic nihil ducimus voluptate magni. Magni unde nemo voluptas
        tenetur provident neque nulla laudantium, laborum reprehenderit! Fuga,
        eos quaerat placeat, dicta et fugiat, corporis officia suscipit ea modi
        libero. Error ab eos, cumque expedita, corporis doloremque
        necessitatibus molestias saepe pariatur quas dicta eveniet ipsam.
        Deserunt aperiam sit assumenda repellat, ducimus temporibus quidem enim.
        Necessitatibus ipsa fugiat consequatur error facere tempora aspernatur
        quaerat a tenetur neque facilis quam in alias itaque adipisci mollitia
        sit, explicabo ab fuga temporibus blanditiis laudantium dolor. Dolor
        maxime similique eum earum incidunt facilis eius ex porro, labore nihil
        voluptates quia expedita reprehenderit corrupti dolorem vitae mollitia
        neque temporibus nostrum modi ratione numquam totam iste. Deleniti
        voluptatem commodi repudiandae modi ex ratione deserunt distinctio.
        Reprehenderit incidunt maiores, saepe numquam perspiciatis earum
        necessitatibus praesentium quibusdam sed corrupti neque harum magni
        distinctio dolores beatae excepturi quas nemo id cupiditate aliquam.
        Architecto, qui numquam sed debitis blanditiis, distinctio nihil unde
        fugiat necessitatibus exercitationem veniam enim quia eum odio sit
        consectetur est eligendi eveniet tenetur placeat dolorem! At, impedit?
        Ipsum saepe id deleniti quae non distinctio consequatur tempora culpa ab
        vero praesentium magnam quisquam accusamus ea sint, explicabo aliquam ad
        nobis reprehenderit! Assumenda ipsa voluptate itaque earum nemo qui
        iusto, odio eaque? Vel, quam praesentium. At adipisci necessitatibus,
        accusamus cupiditate doloremque quis rem temporibus. Aliquam quam
        quaerat explicabo? Iste eligendi blanditiis reprehenderit nam optio sint
        deleniti! Laboriosam facere adipisci fugit omnis nostrum quis! Ea
        consequuntur obcaecati quisquam. Aspernatur, enim blanditiis? Laudantium
        sed esse voluptate in, harum repellendus modi molestiae tempora optio
        consequuntur quos. Rerum placeat ullam harum quod consequuntur!
        Exercitationem quasi nostrum odio cupiditate aliquam minima culpa iusto,
        impedit quibusdam debitis hic ad optio fuga. Ex neque, sit nulla
        similique laboriosam dignissimos nam eos corrupti libero ipsa amet
        accusantium porro eum. Doloribus sequi quia saepe quaerat dicta. Debitis
        veritatis a dignissimos alias maiores iure dolor tempore reiciendis
        perspiciatis rem. Quia! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aperiam ratione temporibus ut ad maxime eaque
        molestias dolores obcaecati odit asperiores repellat, maiores eligendi
        doloremque totam magnam neque eum necessitatibus, dolorem distinctio cum
        mollitia et officia. Illum molestiae laboriosam nobis libero voluptate
        qui dignissimos voluptas sed consequatur deleniti labore iste amet
        eaque, quisquam culpa officia quidem! Odit explicabo ipsam,
        necessitatibus accusamus distinctio commodi nemo nam dolorum doloribus,
        pariatur exercitationem eius dolorem amet repellat cupiditate porro
        earum voluptate excepturi? Quos illum a sit. Incidunt id alias quibusdam
        delectus tenetur rem quos, libero eligendi impedit corporis deleniti
        ipsa iste debitis, obcaecati modi ex. Voluptate eum, fugit fugiat
        dolorum repudiandae incidunt inventore doloremque sed. Nisi, ad unde
        dicta nemo consequuntur est asperiores, fuga atque ipsum quis error sed
        dignissimos sint maxime impedit recusandae quia? Provident voluptates
        repudiandae doloribus sequi iusto molestias earum aperiam molestiae
        nostrum in ea nam voluptatem ducimus harum quod tempore eius,
        perspiciatis placeat sed, eveniet laboriosam natus ipsa adipisci
        delectus? Mollitia fugit numquam sapiente delectus veritatis blanditiis
        et maiores possimus assumenda corporis fuga sint alias cumque quidem,
        iure, nam sequi earum pariatur deserunt molestias dignissimos est
        obcaecati quasi expedita. Cupiditate quidem nihil repudiandae nesciunt
        delectus vero saepe, quod corrupti, deserunt, doloribus sapiente dolorem
        suscipit molestiae modi velit harum ratione ad aperiam placeat id!
        Excepturi, fugit, quam voluptatem rerum quasi sequi tempora perferendis
        earum ex est accusamus culpa facilis cum quisquam quidem eveniet?
        Similique molestiae aperiam iure non ut totam officia provident quas
        architecto optio placeat explicabo eligendi saepe animi rem itaque,
        laboriosam asperiores obcaecati dolorum cum blanditiis beatae! Dolor quo
        excepturi fuga architecto animi tenetur atque unde officiis aliquam
        minus? Vel minima enim magnam earum? Consectetur excepturi reiciendis
        repellat veniam ullam molestiae vero? Eaque alias distinctio tenetur
        dolores, velit exercitationem blanditiis est, mollitia possimus officiis
        pariatur modi excepturi aperiam deleniti voluptatibus optio ad, saepe
        autem adipisci? Ea odio tenetur facilis eius, vel mollitia aliquam
        magnam maiores? Soluta veniam dignissimos laboriosam exercitationem
        debitis harum consectetur ipsa iusto dolores labore modi fugit suscipit,
        beatae incidunt voluptatem asperiores molestiae? Labore, voluptatibus!
        Vero recusandae quia impedit ducimus nostrum deserunt dicta fugiat modi
        ipsum magni doloremque incidunt dolorum fugit corrupti mollitia quos
        necessitatibus accusamus, cupiditate repellendus. Placeat recusandae
        velit error ex corrupti voluptas voluptate dicta, cupiditate at itaque
        repellendus provident facere molestiae voluptatem incidunt voluptates
        asperiores qui hic ipsam saepe. Unde odio vel ipsum. Aliquam sunt saepe
        rerum aliquid incidunt laborum assumenda ullam sed mollitia magni.
      </div>
    </div>
  );
}

export default ICDashboard;
