import "./Home.css";

const Home = () => {
  return (
    <div>
      <span class="inline">
        <img class="logo" src="./src/images/logo.png" />
        <div>
          <p class="header">HOMEPAGE</p>
          <p class="subhead">
            Welcome <p id="username" />
          </p>
        </div>
      </span>
      <div>
        <span class="inline">
          <div class="datablocks">
            <p class="blockheader">BATTLE DETAILS</p>
            <li>Total Battles:</li>
            <li>Battles Won:</li>
            <li>Battles Lost:</li>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div class="datablocks">
            <p class="blockheader">CURRENT LEAGUE</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Home;
