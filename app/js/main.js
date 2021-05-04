function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("container");
const url = "http://leads.beta.openstudycollege.info/getTopLeads";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    return data.map(function (item) {
      const card = document.createElement("article");
      card.classList = "card-body";
      const content = ` <article class="card">
    <div class="cardHead">
      <div id="closeIcon">x</div>
      <div class="profilePicture" >
        <div class="imga"></div>
        <i class="checkMark"></i>
      </div>
      <h1 class="name">${item.name}</h1>
      <p class="subName">student</p>
      <div class="identificationNumber"><span>ID:</span><span class="idCode">&nbsp${item.id}</span></div>
    </div>
    <div class="greyEnrolment"></div>
    <div class="enrolment">
      <div class="textBlock">
        <p>${item.status}</p>
        <h2>enrolment status</h2>
      </div>
      <div class="headerDivider"></div>
      <div class="textBlock">
        <p>3</p>
        <h2>completed courses</h2>
      </div>
    </div>
    <div class="studentData">
      <h2 class="header">contact details</h2>
      <div class="flexBasic">
      <p>Email:</p>
      <p id="email"> &nbsp${item.email}</p></div>
      <div class="flexBasic"> <p>Tel:</p>
      <p id="telephone">&nbsp${item.telephone}</p></div>
      <h2 class="header">about me</h2>
      <p>Nunc justo eros, vehicula vel vehicula ut,lacinia a erat. Nam frinfilla eros.
      Nyllam aliquam interdum....
    </p>    </div>
    <div class="currentCourseContainer">
      <div class="currentCourse">
        <div class="flexBasic">
          <i class="hatIcon"></i>
          <div>
            <h1>Current Course:</h1>
            <p>${item.course_title}</p>
          </div>
        </div>
        <i class="arrowIcon"></i>
      </div>
    </div>
    <div class="pictureContainer">
      <div class="pictureSection">
        <div class="pictureBar">
          <h2>My photos</h2> <i class="arrowIconDown"></i>
        </div>
        <div class="gridGallery">        <div class="galleryImg1"><img src="images/galleryImage1.png" alt="woman trough a cristal" > </div>
        <div class="galleryImg2"><img
            src="images/galleryImage2.png" alt="hamock" ></div><div class="galleryImg3"> <img src="images/galleryImage3.png"
            alt="highrises" ></div> <div class="galleryImg4"><img src="images/galleryImage4.png" alt="interesting modern facade" >   <i class="arrowBig"></i></div></div>
      </div>
    </div>
  </article>`;
      container.innerHTML += content;
    });
  })
  .catch(function (error) {
    console.log(error);
  });
