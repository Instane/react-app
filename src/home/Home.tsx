import "./Home.css";

const Home = () => {
  return (
    <div class='blockdisplay'>
      <span class='inline'><img src="./src/images/logo.png" />
      <div><p class='header'>HOMEPAGE</p>
      <p class='subhead'>Welcome User!</p>
      </div></span>
      <div>
      <span class='inline'>
        <div class='datablocks'>
          <p>testing</p>
        </div> &nbsp;&nbsp;
        <div class="datablocks">
          <p>testing v2</p>
        </div>
      </span>
      </div>
    </div>
  );
};

export default Home;
